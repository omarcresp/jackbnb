import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: InternalServerErrorException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseMessage = (type: string, message: unknown) => {
      console.log({
        statusCode: status,
        path: request.url,
        errorType: type,
        errorMessage: message,
      });

      response.status(status).json({
        statusCode: status,
        path: request.url,
        errorType: type,
        errorMessage: message,
      });
    };

    if (
      typeof exception.message === 'string' &&
      typeof exception.name === 'string'
    ) {
      responseMessage(exception.name, exception.message);
    } else {
      responseMessage('Error', exception);
    }
  }
}
