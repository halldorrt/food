import { IBaseProtocol } from 'pg-promise';
import { Recipe, RecipeStatusEnum } from '../schema.types';

export type RecipesDb = {
  id: string;
  name: string;
  decription: string;
  picture_url: string;
  status: RecipeStatusEnum;
  created_time: Date;
};

export async function listRecipes(
  {},
  foodDB: IBaseProtocol<RecipesDb>
): Promise<Recipe[]> {
  const recipes = await foodDB.any(`
    select
      id,
      name,
      description,
      picture_url,
      status,
      created_time
    from recipes.recipes;
  `);
  return recipes.map((r) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    picture: {
      url: r.picture_url,
    },
    status: r.status,
    createdTime: r.created_time,
  }));
}
