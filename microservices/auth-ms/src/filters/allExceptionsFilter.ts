import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: InternalServerErrorException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const exceptionResponse =
      exception instanceof HttpException ? exception.getResponse() : null;

    const responseMessage = (type: string, message: unknown) => {
      console.error({
        statusCode: status,
        path: request.url,
        errorType: type,
        errorMessage: message,
      });

      response.status(status).send({
        statusCode: status,
        path: request.url,
        errorType: type,
        errorMessage: message,
      });
    };

    if (exceptionResponse) {
      console.error(exceptionResponse);
      response.status(status).send(exceptionResponse);

      return;
    }

    responseMessage(
      exception.name || 'Internal Server Error',
      exception.message || exception,
    );
  }
}
