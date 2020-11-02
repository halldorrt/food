/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      description
      picture
      status
      instructions {
        items {
          id
          recipeId
          order
          title
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      ingredients {
        items {
          id
          recipeId
          order
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        picture
        status
        instructions {
          nextToken
        }
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipeInstructionsSection = /* GraphQL */ `
  query GetRecipeInstructionsSection($id: ID!) {
    getRecipeInstructionsSection(id: $id) {
      id
      recipeId
      order
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const listRecipeInstructionsSections = /* GraphQL */ `
  query ListRecipeInstructionsSections(
    $filter: ModelRecipeInstructionsSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeInstructionsSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeId
        order
        title
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipeIngredientsSection = /* GraphQL */ `
  query GetRecipeIngredientsSection($id: ID!) {
    getRecipeIngredientsSection(id: $id) {
      id
      recipeId
      order
      title
      ingredients {
        items {
          id
          recipeIngredientsSectionId
          quantity
          unit
          bakersPercentage
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRecipeIngredientsSections = /* GraphQL */ `
  query ListRecipeIngredientsSections(
    $filter: ModelRecipeIngredientsSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeIngredientsSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeId
        order
        title
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipeIngredient = /* GraphQL */ `
  query GetRecipeIngredient($id: ID!) {
    getRecipeIngredient(id: $id) {
      id
      recipeIngredientsSectionId
      quantity
      unit
      ingredient {
        id
        name
        createdAt
        updatedAt
      }
      bakersPercentage
      createdAt
      updatedAt
    }
  }
`;
export const listRecipeIngredients = /* GraphQL */ `
  query ListRecipeIngredients(
    $filter: ModelRecipeIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeIngredients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeIngredientsSectionId
        quantity
        unit
        ingredient {
          id
          name
          createdAt
          updatedAt
        }
        bakersPercentage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
