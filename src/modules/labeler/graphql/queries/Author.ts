const GET_AUTHORS = /* GraphQL */ `
  query GetAuthors {
    listUsers {
      firstName
      middleName
      lastName
      id
      role
    }
  }
`;
export default GET_AUTHORS;
