/**
 * Estrutura de chamada Graphql para busca de categorias
 *
 */
const GET_CATEGORIES = /* GraphQL */ `
  query GetCategories {
    listarCategorias {
      id
      nome
    }
  }
`;
export default GET_CATEGORIES;
