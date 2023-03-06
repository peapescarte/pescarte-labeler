const GET_AUTHORS = /* GraphQL */ `
  query GetAuthors {
    users {
      firstName
      middleName
      lastName
      id
    }
  }
`;
export default GET_AUTHORS;
