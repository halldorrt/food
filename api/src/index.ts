import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import { contextFunction } from './server/context';

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context: contextFunction,
  playground: { endpoint: '/dev/graphql' },
});

export const handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
