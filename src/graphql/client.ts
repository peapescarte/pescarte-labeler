import { GraphQLClient } from 'graphql-request';
import { Response } from 'graphql-request/dist/types';

function middleware(response: Response<unknown> | Error) {
  if (typeof response === typeof Error) {
    throw new Error('Erro de servidor!');
  }

  const res = response as Response<unknown>;

  // console.log(JSON.parse(JSON.stringify(response)));
  if (res.status === 401) {
    localStorage.removeItem('auth');
    window.location.replace('/login');
  }
}

const getGraphQLClient = (url: string) =>
  new GraphQLClient(url, { responseMiddleware: middleware });

export default getGraphQLClient;
