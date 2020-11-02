/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreateRecipeInstructionsSection = /* GraphQL */ `
  subscription OnCreateRecipeInstructionsSection {
    onCreateRecipeInstructionsSection {
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
export const onUpdateRecipeInstructionsSection = /* GraphQL */ `
  subscription OnUpdateRecipeInstructionsSection {
    onUpdateRecipeInstructionsSection {
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
export const onDeleteRecipeInstructionsSection = /* GraphQL */ `
  subscription OnDeleteRecipeInstructionsSection {
    onDeleteRecipeInstructionsSection {
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
export const onCreateRecipeIngredientsSection = /* GraphQL */ `
  subscription OnCreateRecipeIngredientsSection {
    onCreateRecipeIngredientsSection {
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
export const onUpdateRecipeIngredientsSection = /* GraphQL */ `
  subscription OnUpdateRecipeIngredientsSection {
    onUpdateRecipeIngredientsSection {
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
export const onDeleteRecipeIngredientsSection = /* GraphQL */ `
  subscription OnDeleteRecipeIngredientsSection {
    onDeleteRecipeIngredientsSection {
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
export const onCreateRecipeIngredient = /* GraphQL */ `
  subscription OnCreateRecipeIngredient {
    onCreateRecipeIngredient {
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
export const onUpdateRecipeIngredient = /* GraphQL */ `
  subscription OnUpdateRecipeIngredient {
    onUpdateRecipeIngredient {
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
export const onDeleteRecipeIngredient = /* GraphQL */ `
  subscription OnDeleteRecipeIngredient {
    onDeleteRecipeIngredient {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
