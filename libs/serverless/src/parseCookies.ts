import {APIGatewayProxyResult} from 'aws-lambda';

const parseCookies = (response: APIGatewayProxyResult): void => {
  const setCookie = response.headers?.['set-cookie'] as unknown as string[];

  if (setCookie instanceof Array) {
    response.headers['set-cookie'] = setCookie.shift();
  }
};

export default parseCookies;
