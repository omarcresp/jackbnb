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
      console.error({
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

    const exceptionResponse = exception?.getResponse();

    if (exceptionResponse) {
      console.error(exceptionResponse);
      response.status(status).json(exceptionResponse);

      return;
    }

    responseMessage(
      exception.name || 'Internal Server Error',
      exception.message || exception
    );
  }
}
