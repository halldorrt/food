import { Resolvers, RecipesQuery } from '../schema.types';
import * as db from './db';

export type RecipesQueryPartial = Partial<RecipesQuery>;

const resolvers: Resolvers = {
  Query: {
    recipes: () => ({}),
  },
  RecipesQuery: {
    list: (_, {}, context) => {
      return db.listRecipes({}, context.foodDB);
    },
  },
};

export default resolvers;
