import fastify, { FastifyInstance } from 'fastify';
import fastifyCookie from 'fastify-cookie';

import { ProxyHandler } from 'aws-lambda';
import { proxy } from 'aws-serverless-fastify';

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

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
  nestApp.setGlobalPrefix('api/v1');
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

export const handler: ProxyHandler = async (event, context) => {
  // if (!cacheServer) {
  //   cacheServer = await bootstrapServer();
  // }

  // console.log('event', event);
  // console.log('context', context);

  // const response = await proxy(cacheServer, event, context);

  // console.log('response', response);

  return {
    statusCode: 201,
    body: '',
    headers: {
      'set-cookie':
        '_jbt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTU3YzEwYzNhYmU2Mzg2YjQyMmQ5ZTciLCJpYXQiOjE2MzMyMTczNDEsImV4cCI6MTYzMzQ3NjU0MX0.sMOLKsZp8WdnQaWr1aty0jPUv-IKYkVuHiAKxnP49XE; Path=/; Expires=Mon, 04 Oct 2021 23:29:01 GMT; HttpOnly',
      'content-length': '0',
      date: 'Sat, 02 Oct 2021 23:29:01 GMT',
      connection: 'keep-alive',
      'keep-alive': 'timeout=5'
    },
    isBase64Encoded: false
  };
};
