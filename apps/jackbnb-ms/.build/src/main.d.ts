/// <reference types="node" />
import { Server } from 'http';
import { ProxyHandler } from 'aws-lambda';
export declare function bootstrapServer(): Promise<Server>;
export declare const handler: ProxyHandler;
