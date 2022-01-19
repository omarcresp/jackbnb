import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common';
import {NestFastifyApplication, FastifyAdapter} from '@nestjs/platform-fastify';

import fastify, {FastifyInstance} from 'fastify';
import fastifyCookie from 'fastify-cookie';

import {AllExceptionsFilter} from '@wermote/exception-filter';

async function createServer(
  appModule: unknown,
  appPrefix: string,
): Promise<FastifyInstance> {
  const instance = fastify({logger: true});

  const nestApp = await NestFactory.create<NestFastifyApplication>(
    appModule,
    new FastifyAdapter(instance),
  );

  nestApp.register(fastifyCookie);
  nestApp.setGlobalPrefix(appPrefix);
  nestApp.useGlobalFilters(new AllExceptionsFilter());
  nestApp.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: process.env.IS_OFFLINE !== 'true',
    }),
  );

  await nestApp.init();

  return instance;
}

export default createServer;
