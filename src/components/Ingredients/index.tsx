import React from 'react';
import styles from './styles.module.css';
import { RecipeIngredientList } from '../../recipes/recipes';

type IngredientsProps = {
  ingredientList: RecipeIngredientList;
};

export default function Ingredients({ ingredientList }: IngredientsProps) {
  // Todo: key of each ingredient is idx. We should have id for each ingredient, instruction etc. in a recipe
  const ingredients = ingredientList.ingredients;

  return (
    <>
      {ingredientList?.title && <h2>{ingredientList.title}</h2>}
      <table className={styles.ingredients}>
        <thead className={styles.ingredientHeaders}>
          <tr>
            <th>Magn</th>
            <th>Innihaldsefni</th>
            <th>Bakaraprósenta</th>
          </tr>
        </thead>
        <tbody>
          {ingredients?.map((row, idx) => (
            <tr key={idx} className={styles.ingredient}>
              <td>{`${row.quantity} ${row.unit}`}</td>
              <td>{row.ingredient}</td>
              <td>{row.bakersPercentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
