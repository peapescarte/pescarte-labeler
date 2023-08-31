import { GraphQLClient } from 'graphql-request';
import { Response } from 'graphql-request/dist/types';
import { toast } from 'react-toastify';

export interface GqlResponseError extends Error {
  response?: {
    errors?: {
      message: string;
      status_code: number;
    }[];
  };
}

/**
 * middleware que recebe cada resposta das chamadas realizadas
 * util para por exemplo interceptar resposta de não autenticado e redirecionar.
 * @param response response - objeto resposta recebido do servidor.
 */
function middleware(response: Response<unknown> | Error) {
  // console.log(JSON.parse(JSON.stringify(response)));
  if (typeof response === typeof Error) {
    throw new Error('Ocorreu um erro inesperado, tente novamente!');
  }
  const { response: res } = response as GqlResponseError;
  if (res && res.errors) {
    if (res.errors[0].status_code === 401) {
      localStorage.removeItem('auth');

      toast.dismiss();
      toast('Usuário não autenticado, redirecionando..', {
        type: 'warning',
        autoClose: 2500,
      });

      setTimeout(() => {
        window.location.replace('/login');
      }, 3000);
    }
  }
}

/**
 * Função que retorna um client Graphql para realizar as chamadas http.
 *
 * @param string url - endereço que aponta para api.
 */
const getGraphQLClient = (url: string) =>
  new GraphQLClient(url, { responseMiddleware: middleware });

export default getGraphQLClient;
