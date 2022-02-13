import { ProxyHandler } from 'aws-lambda';
import { proxy, createServer } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import { Express } from 'express';

import { createServer as createServerBase } from '@wermote/serverless';

import { AppModule } from './app.module';

let cacheServer: Express;

export const handler: ProxyHandler = async (event, context) => {
  if (!cacheServer) {
    cacheServer = await createServerBase(AppModule, 'properties');
    cacheServer.use(eventContext());
  }
  const binaryMimeTypes: string[] = [];
  const server = createServer(cacheServer, undefined, binaryMimeTypes);
  const response = await proxy(server, event, context, 'PROMISE').promise;

  server.close();

  return response;
};
