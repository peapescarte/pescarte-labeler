/**
 * Estrutura de chamada Graphql de login
 *
 * @param string cpf - cpf em formato de texto.
 * @param string senha - senha em formato de texto.
 */
const LOGIN = /* GraphQL */ `
  mutation Login($cpf: String!, $senha: String!) {
    login(input: { cpf: $cpf, senha: $senha }) {
      token
      usuario {
        id
        tipo
        primeiroNome
        sobrenome
      }
    }
  }
`;
export default LOGIN;
