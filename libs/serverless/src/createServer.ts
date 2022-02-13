import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common';
import {NestExpressApplication, ExpressAdapter} from '@nestjs/platform-express';

import * as express from 'express';
import type {Express} from 'express';
import * as cookieParser from 'cookie-parser';

import {AllExceptionsFilter} from '@wermote/exception-filter';

async function createServer(
  appModule: unknown,
  appPrefix: string,
): Promise<Express> {
  const instance = express();

  const nestApp = await NestFactory.create<NestExpressApplication>(
    appModule,
    new ExpressAdapter(instance),
  );

  nestApp.use(cookieParser());
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
