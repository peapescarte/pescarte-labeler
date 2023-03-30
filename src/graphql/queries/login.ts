const LOGIN = /* GraphQL */ `
  mutation Login($cpf: String!, $senha: String!) {
    login(cpf: $cpf, password: $senha) {
      token
      user {
        id
        role
        firstName
        lastName
        middleName
      }
    }
  }
`;
export default LOGIN;
