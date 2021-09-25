"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.bootstrapServer = void 0;
const express = require("express");
const cookieParser = require("cookie-parser");
const aws_serverless_express_1 = require("aws-serverless-express");
const middleware_1 = require("aws-serverless-express/middleware");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const allExceptionsFilter_1 = require("./allExceptionsFilter");
const app_module_1 = require("./app.module");
const binaryMimeTypes = [];
let cacheServer;
async function bootstrapServer() {
    if (!cacheServer) {
        const expressApp = express();
        const nestApp = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
        nestApp.setGlobalPrefix('api/v1');
        nestApp.useGlobalFilters(new allExceptionsFilter_1.AllExceptionsFilter());
        nestApp.use((0, middleware_1.eventContext)());
        nestApp.use(cookieParser());
        await nestApp.init();
        cacheServer = (0, aws_serverless_express_1.createServer)(expressApp, undefined, binaryMimeTypes);
        console.log('no cache');
    }
    return cacheServer;
}
exports.bootstrapServer = bootstrapServer;
const handler = async (event, context) => {
    const server = await bootstrapServer();
    const response = await (0, aws_serverless_express_1.proxy)(server, event, context, 'PROMISE').promise;
    return response;
};
exports.handler = handler;
//# sourceMappingURL=main.js.map