// import { Resolvers } from '../schema.types';

const resolvers /*: Resolvers */ = {
  Query: {
    test: async (_: any, {}, context: any) => {
      try {
        console.log(context.foodDB);
        const recipes = await context.foodDB.any('select * from recipes.recipes');
        console.log(recipes);
        return JSON.stringify(recipes);
      } catch (e) {
        console.log(e);
        throw e;
      }
      //return `Salutations from your GQL DataManager query endpoint, date: ${new Date().toISOString()}`
    }
  },
};

export default resolvers;
