import getGraphQLClient from '../graphql/client';
import LOGIN from '../graphql/queries/login';
import { User } from '../interfaces/user';

/**
 * Service inicial da aplicação.
 * Utilizada para realizar login e outras chamadas do tipo.
 */
export class PescarteService {
  private _baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;
  private _client = getGraphQLClient(this._baseUrl);

  async login(cpf: string, senha: string): Promise<{ user: User; token: string }> {
    const { login } = await this._client.request(LOGIN, { cpf, senha });

    return {
      token: login.token,
      user: {
        id: login.usuario.id,
        firstName: login.usuario.primeiroNome,
        lastName: login.usuario.sobrenome,
        role: login.usuario.tipo,
      },
    };
  }
}
