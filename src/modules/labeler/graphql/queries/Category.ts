const GET_CATEGORIES = /* GraphQL */ `
  query GetCategories {
    listCategorias {
      id
      name
    }
  }
`;
export default GET_CATEGORIES;
