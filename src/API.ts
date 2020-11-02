/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRecipeInput = {
  id?: string | null,
  name: string,
  description: string,
  picture?: string | null,
  status: RecipeStatusEnum,
};

export enum RecipeStatusEnum {
  Complete = "Complete",
  InProgress = "InProgress",
}


export type ModelRecipeConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  status?: ModelRecipeStatusEnumInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelRecipeStatusEnumInput = {
  eq?: RecipeStatusEnum | null,
  ne?: RecipeStatusEnum | null,
};

export type UpdateRecipeInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  picture?: string | null,
  status?: RecipeStatusEnum | null,
};

export type DeleteRecipeInput = {
  id?: string | null,
};

export type CreateRecipeInstructionsSectionInput = {
  id?: string | null,
  recipeId: string,
  order: number,
  title?: string | null,
  content: string,
};

export type ModelRecipeInstructionsSectionConditionInput = {
  recipeId?: ModelIDInput | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelRecipeInstructionsSectionConditionInput | null > | null,
  or?: Array< ModelRecipeInstructionsSectionConditionInput | null > | null,
  not?: ModelRecipeInstructionsSectionConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateRecipeInstructionsSectionInput = {
  id: string,
  recipeId?: string | null,
  order?: number | null,
  title?: string | null,
  content?: string | null,
};

export type DeleteRecipeInstructionsSectionInput = {
  id?: string | null,
};

export type CreateRecipeIngredientsSectionInput = {
  id?: string | null,
  recipeId: string,
  order: number,
  title?: string | null,
};

export type ModelRecipeIngredientsSectionConditionInput = {
  recipeId?: ModelIDInput | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelRecipeIngredientsSectionConditionInput | null > | null,
  or?: Array< ModelRecipeIngredientsSectionConditionInput | null > | null,
  not?: ModelRecipeIngredientsSectionConditionInput | null,
};

export type UpdateRecipeIngredientsSectionInput = {
  id: string,
  recipeId?: string | null,
  order?: number | null,
  title?: string | null,
};

export type DeleteRecipeIngredientsSectionInput = {
  id?: string | null,
};

export type CreateRecipeIngredientInput = {
  id?: string | null,
  recipeIngredientsSectionId: string,
  quantity: number,
  unit: string,
  bakersPercentage?: number | null,
  recipeIngredientIngredientId: string,
};

export type ModelRecipeIngredientConditionInput = {
  recipeIngredientsSectionId?: ModelIDInput | null,
  quantity?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  bakersPercentage?: ModelFloatInput | null,
  and?: Array< ModelRecipeIngredientConditionInput | null > | null,
  or?: Array< ModelRecipeIngredientConditionInput | null > | null,
  not?: ModelRecipeIngredientConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateRecipeIngredientInput = {
  id: string,
  recipeIngredientsSectionId?: string | null,
  quantity?: number | null,
  unit?: string | null,
  bakersPercentage?: number | null,
  recipeIngredientIngredientId?: string | null,
};

export type DeleteRecipeIngredientInput = {
  id?: string | null,
};

export type CreateIngredientInput = {
  id?: string | null,
  name: string,
};

export type ModelIngredientConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelIngredientConditionInput | null > | null,
  or?: Array< ModelIngredientConditionInput | null > | null,
  not?: ModelIngredientConditionInput | null,
};

export type UpdateIngredientInput = {
  id: string,
  name?: string | null,
};

export type DeleteIngredientInput = {
  id?: string | null,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  status?: ModelRecipeStatusEnumInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelRecipeInstructionsSectionFilterInput = {
  id?: ModelIDInput | null,
  recipeId?: ModelIDInput | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelRecipeInstructionsSectionFilterInput | null > | null,
  or?: Array< ModelRecipeInstructionsSectionFilterInput | null > | null,
  not?: ModelRecipeInstructionsSectionFilterInput | null,
};

export type ModelRecipeIngredientsSectionFilterInput = {
  id?: ModelIDInput | null,
  recipeId?: ModelIDInput | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelRecipeIngredientsSectionFilterInput | null > | null,
  or?: Array< ModelRecipeIngredientsSectionFilterInput | null > | null,
  not?: ModelRecipeIngredientsSectionFilterInput | null,
};

export type ModelRecipeIngredientFilterInput = {
  id?: ModelIDInput | null,
  recipeIngredientsSectionId?: ModelIDInput | null,
  quantity?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  bakersPercentage?: ModelFloatInput | null,
  and?: Array< ModelRecipeIngredientFilterInput | null > | null,
  or?: Array< ModelRecipeIngredientFilterInput | null > | null,
  not?: ModelRecipeIngredientFilterInput | null,
};

export type ModelIngredientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelIngredientFilterInput | null > | null,
  or?: Array< ModelIngredientFilterInput | null > | null,
  not?: ModelIngredientFilterInput | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description: string,
    picture: string | null,
    status: RecipeStatusEnum,
    instructions:  {
      __typename: "ModelRecipeInstructionsSectionConnection",
      items:  Array< {
        __typename: "RecipeInstructionsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientsSectionConnection",
      items:  Array< {
        __typename: "RecipeIngredientsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description: string,
    picture: string | null,
    status: RecipeStatusEnum,
    instructions:  {
      __typename: "ModelRecipeInstructionsSectionConnection",
      items:  Array< {
        __typename: "RecipeInstructionsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientsSectionConnection",
      items:  Array< {
        __typename: "RecipeIngredientsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description: string,
    picture: string | null,
    status: RecipeStatusEnum,
    instructions:  {
      __typename: "ModelRecipeInstructionsSectionConnection",
      items:  Array< {
        __typename: "RecipeInstructionsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientsSectionConnection",
      items:  Array< {
        __typename: "RecipeIngredientsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRecipeInstructionsSectionMutationVariables = {
  input: CreateRecipeInstructionsSectionInput,
  condition?: ModelRecipeInstructionsSectionConditionInput | null,
};

export type CreateRecipeInstructionsSectionMutation = {
  createRecipeInstructionsSection:  {
    __typename: "RecipeInstructionsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecipeInstructionsSectionMutationVariables = {
  input: UpdateRecipeInstructionsSectionInput,
  condition?: ModelRecipeInstructionsSectionConditionInput | null,
};

export type UpdateRecipeInstructionsSectionMutation = {
  updateRecipeInstructionsSection:  {
    __typename: "RecipeInstructionsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecipeInstructionsSectionMutationVariables = {
  input: DeleteRecipeInstructionsSectionInput,
  condition?: ModelRecipeInstructionsSectionConditionInput | null,
};

export type DeleteRecipeInstructionsSectionMutation = {
  deleteRecipeInstructionsSection:  {
    __typename: "RecipeInstructionsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRecipeIngredientsSectionMutationVariables = {
  input: CreateRecipeIngredientsSectionInput,
  condition?: ModelRecipeIngredientsSectionConditionInput | null,
};

export type CreateRecipeIngredientsSectionMutation = {
  createRecipeIngredientsSection:  {
    __typename: "RecipeIngredientsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientConnection",
      items:  Array< {
        __typename: "RecipeIngredient",
        id: string,
        recipeIngredientsSectionId: string,
        quantity: number,
        unit: string,
        bakersPercentage: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecipeIngredientsSectionMutationVariables = {
  input: UpdateRecipeIngredientsSectionInput,
  condition?: ModelRecipeIngredientsSectionConditionInput | null,
};

export type UpdateRecipeIngredientsSectionMutation = {
  updateRecipeIngredientsSection:  {
    __typename: "RecipeIngredientsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientConnection",
      items:  Array< {
        __typename: "RecipeIngredient",
        id: string,
        recipeIngredientsSectionId: string,
        quantity: number,
        unit: string,
        bakersPercentage: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecipeIngredientsSectionMutationVariables = {
  input: DeleteRecipeIngredientsSectionInput,
  condition?: ModelRecipeIngredientsSectionConditionInput | null,
};

export type DeleteRecipeIngredientsSectionMutation = {
  deleteRecipeIngredientsSection:  {
    __typename: "RecipeIngredientsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientConnection",
      items:  Array< {
        __typename: "RecipeIngredient",
        id: string,
        recipeIngredientsSectionId: string,
        quantity: number,
        unit: string,
        bakersPercentage: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRecipeIngredientMutationVariables = {
  input: CreateRecipeIngredientInput,
  condition?: ModelRecipeIngredientConditionInput | null,
};

export type CreateRecipeIngredientMutation = {
  createRecipeIngredient:  {
    __typename: "RecipeIngredient",
    id: string,
    recipeIngredientsSectionId: string,
    quantity: number,
    unit: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    bakersPercentage: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecipeIngredientMutationVariables = {
  input: UpdateRecipeIngredientInput,
  condition?: ModelRecipeIngredientConditionInput | null,
};

export type UpdateRecipeIngredientMutation = {
  updateRecipeIngredient:  {
    __typename: "RecipeIngredient",
    id: string,
    recipeIngredientsSectionId: string,
    quantity: number,
    unit: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    bakersPercentage: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecipeIngredientMutationVariables = {
  input: DeleteRecipeIngredientInput,
  condition?: ModelRecipeIngredientConditionInput | null,
};

export type DeleteRecipeIngredientMutation = {
  deleteRecipeIngredient:  {
    __typename: "RecipeIngredient",
    id: string,
    recipeIngredientsSectionId: string,
    quantity: number,
    unit: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    bakersPercentage: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIngredientMutationVariables = {
  input: CreateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type CreateIngredientMutation = {
  createIngredient:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIngredientMutationVariables = {
  input: UpdateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type UpdateIngredientMutation = {
  updateIngredient:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIngredientMutationVariables = {
  input: DeleteIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type DeleteIngredientMutation = {
  deleteIngredient:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description: string,
    picture: string | null,
    status: RecipeStatusEnum,
    instructions:  {
      __typename: "ModelRecipeInstructionsSectionConnection",
      items:  Array< {
        __typename: "RecipeInstructionsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientsSectionConnection",
      items:  Array< {
        __typename: "RecipeIngredientsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes:  {
    __typename: "ModelRecipeConnection",
    items:  Array< {
      __typename: "Recipe",
      id: string,
      name: string,
      description: string,
      picture: string | null,
      status: RecipeStatusEnum,
      instructions:  {
        __typename: "ModelRecipeInstructionsSectionConnection",
        nextToken: string | null,
      } | null,
      ingredients:  {
        __typename: "ModelRecipeIngredientsSectionConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRecipeInstructionsSectionQueryVariables = {
  id: string,
};

export type GetRecipeInstructionsSectionQuery = {
  getRecipeInstructionsSection:  {
    __typename: "RecipeInstructionsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecipeInstructionsSectionsQueryVariables = {
  filter?: ModelRecipeInstructionsSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipeInstructionsSectionsQuery = {
  listRecipeInstructionsSections:  {
    __typename: "ModelRecipeInstructionsSectionConnection",
    items:  Array< {
      __typename: "RecipeInstructionsSection",
      id: string,
      recipeId: string,
      order: number,
      title: string | null,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRecipeIngredientsSectionQueryVariables = {
  id: string,
};

export type GetRecipeIngredientsSectionQuery = {
  getRecipeIngredientsSection:  {
    __typename: "RecipeIngredientsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientConnection",
      items:  Array< {
        __typename: "RecipeIngredient",
        id: string,
        recipeIngredientsSectionId: string,
        quantity: number,
        unit: string,
        bakersPercentage: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecipeIngredientsSectionsQueryVariables = {
  filter?: ModelRecipeIngredientsSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipeIngredientsSectionsQuery = {
  listRecipeIngredientsSections:  {
    __typename: "ModelRecipeIngredientsSectionConnection",
    items:  Array< {
      __typename: "RecipeIngredientsSection",
      id: string,
      recipeId: string,
      order: number,
      title: string | null,
      ingredients:  {
        __typename: "ModelRecipeIngredientConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRecipeIngredientQueryVariables = {
  id: string,
};

export type GetRecipeIngredientQuery = {
  getRecipeIngredient:  {
    __typename: "RecipeIngredient",
    id: string,
    recipeIngredientsSectionId: string,
    quantity: number,
    unit: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    bakersPercentage: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecipeIngredientsQueryVariables = {
  filter?: ModelRecipeIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipeIngredientsQuery = {
  listRecipeIngredients:  {
    __typename: "ModelRecipeIngredientConnection",
    items:  Array< {
      __typename: "RecipeIngredient",
      id: string,
      recipeIngredientsSectionId: string,
      quantity: number,
      unit: string,
      ingredient:  {
        __typename: "Ingredient",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      bakersPercentage: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetIngredientQueryVariables = {
  id: string,
};

export type GetIngredientQuery = {
  getIngredient:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIngredientsQueryVariables = {
  filter?: ModelIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIngredientsQuery = {
  listIngredients:  {
    __typename: "ModelIngredientConnection",
    items:  Array< {
      __typename: "Ingredient",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description: string,
    picture: string | null,
    status: RecipeStatusEnum,
    instructions:  {
      __typename: "ModelRecipeInstructionsSectionConnection",
      items:  Array< {
        __typename: "RecipeInstructionsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientsSectionConnection",
      items:  Array< {
        __typename: "RecipeIngredientsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description: string,
    picture: string | null,
    status: RecipeStatusEnum,
    instructions:  {
      __typename: "ModelRecipeInstructionsSectionConnection",
      items:  Array< {
        __typename: "RecipeInstructionsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientsSectionConnection",
      items:  Array< {
        __typename: "RecipeIngredientsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description: string,
    picture: string | null,
    status: RecipeStatusEnum,
    instructions:  {
      __typename: "ModelRecipeInstructionsSectionConnection",
      items:  Array< {
        __typename: "RecipeInstructionsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientsSectionConnection",
      items:  Array< {
        __typename: "RecipeIngredientsSection",
        id: string,
        recipeId: string,
        order: number,
        title: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRecipeInstructionsSectionSubscription = {
  onCreateRecipeInstructionsSection:  {
    __typename: "RecipeInstructionsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecipeInstructionsSectionSubscription = {
  onUpdateRecipeInstructionsSection:  {
    __typename: "RecipeInstructionsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecipeInstructionsSectionSubscription = {
  onDeleteRecipeInstructionsSection:  {
    __typename: "RecipeInstructionsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRecipeIngredientsSectionSubscription = {
  onCreateRecipeIngredientsSection:  {
    __typename: "RecipeIngredientsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientConnection",
      items:  Array< {
        __typename: "RecipeIngredient",
        id: string,
        recipeIngredientsSectionId: string,
        quantity: number,
        unit: string,
        bakersPercentage: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecipeIngredientsSectionSubscription = {
  onUpdateRecipeIngredientsSection:  {
    __typename: "RecipeIngredientsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientConnection",
      items:  Array< {
        __typename: "RecipeIngredient",
        id: string,
        recipeIngredientsSectionId: string,
        quantity: number,
        unit: string,
        bakersPercentage: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecipeIngredientsSectionSubscription = {
  onDeleteRecipeIngredientsSection:  {
    __typename: "RecipeIngredientsSection",
    id: string,
    recipeId: string,
    order: number,
    title: string | null,
    ingredients:  {
      __typename: "ModelRecipeIngredientConnection",
      items:  Array< {
        __typename: "RecipeIngredient",
        id: string,
        recipeIngredientsSectionId: string,
        quantity: number,
        unit: string,
        bakersPercentage: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRecipeIngredientSubscription = {
  onCreateRecipeIngredient:  {
    __typename: "RecipeIngredient",
    id: string,
    recipeIngredientsSectionId: string,
    quantity: number,
    unit: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    bakersPercentage: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecipeIngredientSubscription = {
  onUpdateRecipeIngredient:  {
    __typename: "RecipeIngredient",
    id: string,
    recipeIngredientsSectionId: string,
    quantity: number,
    unit: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    bakersPercentage: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecipeIngredientSubscription = {
  onDeleteRecipeIngredient:  {
    __typename: "RecipeIngredient",
    id: string,
    recipeIngredientsSectionId: string,
    quantity: number,
    unit: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    bakersPercentage: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIngredientSubscription = {
  onCreateIngredient:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIngredientSubscription = {
  onUpdateIngredient:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIngredientSubscription = {
  onDeleteIngredient:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
