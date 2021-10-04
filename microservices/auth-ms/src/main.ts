import fastify, { FastifyInstance } from 'fastify';
import fastifyCookie from 'fastify-cookie';

import { ProxyHandler } from 'aws-lambda';
import { proxy } from 'aws-serverless-fastify';

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AllExceptionsFilter } from './filters/allExceptionsFilter';
import { AppModule } from './app.module';

let cacheServer: FastifyInstance;

export async function bootstrapServer(): Promise<FastifyInstance> {
  const instance = fastify({ logger: true });

  const nestApp = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(instance),
  );

  nestApp.register(fastifyCookie);
  nestApp.setGlobalPrefix('auth');
  nestApp.useGlobalFilters(new AllExceptionsFilter());
  nestApp.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: process.env.IS_OFFLINE !== 'true',
    }),
  );

  nestApp.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'auth-ms-consumer',
      },
    },
  });

  await nestApp.startAllMicroservices();
  await nestApp.init();

  return instance;
}

export const handler: ProxyHandler = async (event, context) => {
  if (!cacheServer) {
    cacheServer = await bootstrapServer();
  }

  const response = await proxy(cacheServer, event, context);

  const setCookie = response.headers?.['set-cookie'] as unknown as string[];

  if (setCookie instanceof Array) {
    response.headers['set-cookie'] = setCookie.shift();
  }

  return response;
};
