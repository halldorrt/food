import React from 'react';
import Ingredients from '../../components/Ingredients';
import Instructions from '../../components/Instructions';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getAllRecipes,
  getRecipe,
  Recipe as RecipeData,
} from '../../recipes/recipes';
import Layout, { siteTitle } from '../../components/Layout';
import Head from 'next/head';

type RecipeProps = {
  recipe: RecipeData;
};

export default function Recipe({ recipe }: RecipeProps) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <>
        <section>
          <h1>{recipe.name}</h1>
          {recipe.description && <p>{recipe.description}</p>}
          <img src={recipe.picture}></img>
          <p>{recipe.status}</p>
        </section>
        {recipe?.body
          ?.sort((r) => r.order)
          .map((section, idx) => (
            <section>
              {section.type === 'Ingredients' && (
                <Ingredients key={idx} ingredientList={section} />
              )}
              {section.type === 'Instructions' && (
                <Instructions key={idx} instructions={section} />
              )}
            </section>
          ))}
      </>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllRecipes().map((r) => ({
    params: {
      id: r.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<RecipeProps> = async ({
  params,
}) => {
  const recipe = getRecipe(params?.id as string);
  return {
    props: {
      recipe,
    },
  } as any;
};
