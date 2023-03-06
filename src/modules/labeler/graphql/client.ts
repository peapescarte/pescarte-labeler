import { GraphQLClient } from 'graphql-request';

const getGraphQLClient = (url: string) => new GraphQLClient(url);

export default getGraphQLClient;
