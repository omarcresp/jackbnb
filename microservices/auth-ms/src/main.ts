import { ProxyHandler } from 'aws-lambda';
import { proxy } from 'aws-serverless-fastify';
import { FastifyInstance } from 'fastify';

import { createServer, parseCookies } from '@wermote/serverless';

import { AppModule } from './app.module';

let cacheServer: FastifyInstance;

export const handler: ProxyHandler = async (event, context) => {
  if (!cacheServer) {
    cacheServer = await createServer(AppModule, 'properties');
  }

  const response = await proxy(cacheServer, event, context);

  parseCookies(response);

  return response;
};
