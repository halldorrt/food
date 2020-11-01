import path from 'path';
import fs from 'fs';

export type Recipe = {
  id: string;
  name: string;
  description?: string | null;
  picture: string;
  status: 'InProgress' | 'Complete';
  body?: (RecipeIngredientList | RecipeInstructions)[] | null;
};

export type RecipeIngredientList = {
  type: 'Ingredients';
  order: number;
  title?: string | null;
  ingredients: RecipeIngredients[];
};

export type RecipeIngredients = {
  quantity: number;
  unit: string;
  ingredient: string;
  bakersPercentage: number;
};

export type RecipeInstructions = {
  type: 'Instructions';
  order: number;
  title: string;
  text: string;
};

export function getAllRecipes(): Recipe[] {
  const recipesPath = path.join(process.cwd(), 'src/recipes/recipes.json');
  const file = fs.readFileSync(recipesPath);
  return JSON.parse(file.toString()).recipes;
}

export function getRecipe(id?: string): Recipe | undefined {
  return getAllRecipes().find((r) => r.id === id);
}
