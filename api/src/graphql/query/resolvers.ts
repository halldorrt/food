import { Resolvers } from '../schema.types';

const resolvers: Resolvers = {
  Query: {
    test: async () =>
      `Salutations from your GQL DataManager query endpoint, date: ${new Date().toISOString()}`,
  },
};

export default resolvers;
