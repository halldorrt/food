/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createRecipeInstructionsSection = /* GraphQL */ `
  mutation CreateRecipeInstructionsSection(
    $input: CreateRecipeInstructionsSectionInput!
    $condition: ModelRecipeInstructionsSectionConditionInput
  ) {
    createRecipeInstructionsSection(input: $input, condition: $condition) {
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
export const updateRecipeInstructionsSection = /* GraphQL */ `
  mutation UpdateRecipeInstructionsSection(
    $input: UpdateRecipeInstructionsSectionInput!
    $condition: ModelRecipeInstructionsSectionConditionInput
  ) {
    updateRecipeInstructionsSection(input: $input, condition: $condition) {
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
export const deleteRecipeInstructionsSection = /* GraphQL */ `
  mutation DeleteRecipeInstructionsSection(
    $input: DeleteRecipeInstructionsSectionInput!
    $condition: ModelRecipeInstructionsSectionConditionInput
  ) {
    deleteRecipeInstructionsSection(input: $input, condition: $condition) {
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
export const createRecipeIngredientsSection = /* GraphQL */ `
  mutation CreateRecipeIngredientsSection(
    $input: CreateRecipeIngredientsSectionInput!
    $condition: ModelRecipeIngredientsSectionConditionInput
  ) {
    createRecipeIngredientsSection(input: $input, condition: $condition) {
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
export const updateRecipeIngredientsSection = /* GraphQL */ `
  mutation UpdateRecipeIngredientsSection(
    $input: UpdateRecipeIngredientsSectionInput!
    $condition: ModelRecipeIngredientsSectionConditionInput
  ) {
    updateRecipeIngredientsSection(input: $input, condition: $condition) {
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
export const deleteRecipeIngredientsSection = /* GraphQL */ `
  mutation DeleteRecipeIngredientsSection(
    $input: DeleteRecipeIngredientsSectionInput!
    $condition: ModelRecipeIngredientsSectionConditionInput
  ) {
    deleteRecipeIngredientsSection(input: $input, condition: $condition) {
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
export const createRecipeIngredient = /* GraphQL */ `
  mutation CreateRecipeIngredient(
    $input: CreateRecipeIngredientInput!
    $condition: ModelRecipeIngredientConditionInput
  ) {
    createRecipeIngredient(input: $input, condition: $condition) {
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
export const updateRecipeIngredient = /* GraphQL */ `
  mutation UpdateRecipeIngredient(
    $input: UpdateRecipeIngredientInput!
    $condition: ModelRecipeIngredientConditionInput
  ) {
    updateRecipeIngredient(input: $input, condition: $condition) {
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
export const deleteRecipeIngredient = /* GraphQL */ `
  mutation DeleteRecipeIngredient(
    $input: DeleteRecipeIngredientInput!
    $condition: ModelRecipeIngredientConditionInput
  ) {
    deleteRecipeIngredient(input: $input, condition: $condition) {
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
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
