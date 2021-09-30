import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import { Server } from 'http';
import { ProxyHandler } from 'aws-lambda';
import { proxy, createServer } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';

import { AllExceptionsFilter } from './filters/allExceptionsFilter';
import { AppModule } from './app.module';

const binaryMimeTypes: string[] = [];

let cacheServer: Server;

export async function bootstrapServer(): Promise<Server> {
  const expressApp = express();
  const nestApp = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  nestApp.setGlobalPrefix('api/v1');
  nestApp.useGlobalFilters(new AllExceptionsFilter());
  nestApp.useGlobalPipes(new ValidationPipe({
    transform: true,
    forbidNonWhitelisted: true,
    disableErrorMessages: process.env.IS_OFFLINE !== 'true',
  }));

  nestApp.use(eventContext());
  nestApp.use(cookieParser());

  await nestApp.init();

  return createServer(expressApp, undefined, binaryMimeTypes);
}

export const handler: ProxyHandler = async (event, context) => {
  console.log('process.env', process.env)

  if (!cacheServer) {
    console.log('[Nest] OMAR TEST =====================================')
    console.log('no cache :(')
    cacheServer = await bootstrapServer();

    console.log('cache created:', !!cacheServer);

  } else {
    console.log('[Nest] OMAR TEST =====================================')
    console.log('CACHE SERVER!')
  }

  return proxy(cacheServer, event, context, 'PROMISE').promise;
};
