import { ProxyHandler } from 'aws-lambda';
import { proxy } from 'aws-serverless-fastify';
import { FastifyInstance } from 'fastify';

import { createServer } from '@jackbnb/serverless';

import { AppModule } from './app.module';

let cacheServer: FastifyInstance;

export const handler: ProxyHandler = async (event, context) => {
  if (!cacheServer) {
    cacheServer = await createServer(AppModule, 'properties');
  }

  return proxy(cacheServer, event, context);
};
