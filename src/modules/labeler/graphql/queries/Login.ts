const LOGIN = /* GraphQL */ `
  mutation Login($cpf: String!, $senha: String!) {
    login(cpf: $cpf, password: $senha) {
      user {
        firstName
      }
      token
    }
  }
`;
export default LOGIN;
