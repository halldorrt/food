import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import { getDataBase } from './infrastructure/db';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    ...getDataBase()
  }),
  playground: { endpoint: '/dev/graphql' },
});

export const handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
