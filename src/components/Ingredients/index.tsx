import React from 'react';
import styles from './styles.module.css';
type Props = {
  ingredients: {
    fields?: {
      quantity: number;
      unit: string;
      ingredient: string;
      bakersPercentage: number;
    }[];
    primary?: { title: string };
  };
};

export default function Ingredients(props: Props) {
  const { fields, primary } = props.ingredients;

  return (
    <div>
      {primary?.title && <h2>{primary.title}</h2>}
      <table className={styles.Ingredient}>
        <thead className={styles.ingredientHeaders}>
          <tr>
            <th>Magn</th>
            <th>Innihaldsefni</th>
            <th>Bakaraprósenta</th>
          </tr>
        </thead>
        <tbody>
          {fields?.map((field, idx) => (
            <tr key={idx} className="Ingredient">
              <td>{`${field.quantity} ${field.unit}`}</td>
              <td>{field.ingredient}</td>
              <td>{field.bakersPercentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
