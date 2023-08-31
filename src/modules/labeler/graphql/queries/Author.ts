/**
 * Estrutura de chamada Graphql para busca de autores
 *
 */
const GET_AUTHORS = /* GraphQL */ `
  query GetAuthors {
    listarUsuarios {
      id
      primeiroNome
      sobrenome
      tipo
    }
  }
`;
export default GET_AUTHORS;
