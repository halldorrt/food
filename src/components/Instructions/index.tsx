import React from 'react';
import { RecipeInstructions } from '../../recipes/recipes';

export type InstructionsProps = {
  instructions: RecipeInstructions;
};

export default function Instructions({ instructions }: InstructionsProps) {
  // Todo: key of instructions is order. We should have id for each ingredient, instruction etc. in a recipe
  return (
    <>
      <div key={instructions.order}>
        <h2>{instructions.title}</h2>
        <p>{instructions.text}</p>
      </div>
    </>
  );
}
