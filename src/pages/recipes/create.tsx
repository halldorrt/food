import Head from 'next/head';
import { FormEvent } from 'react';
import Layout, { siteTitle } from '../../components/Layout';
import { createRecipe } from '../../graphql/mutations';
import {
  CreateRecipeInput,
  CreateRecipeMutation,
  RecipeStatusEnum,
} from '../../API';
import { v4 as uuidv4 } from 'uuid';
import { executeMutation } from '../../lib/graphql';

async function handleCreatePost(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = new FormData(event.currentTarget);
  const name = form.get('name')?.toString();
  const description = form.get('description')?.toString();

  if (!name || name.length <= 5) {
    alert('Name is missing');
    return;
  }
  if (!description || description.length <= 10) {
    alert('Description is missing');
    return;
  }

  try {
    const { data } = await executeMutation<
      CreateRecipeMutation,
      CreateRecipeInput
    >(createRecipe, {
      input: {
        id: uuidv4(),
        name,
        description,
        status: RecipeStatusEnum.InProgress,
      },
    });

    window.location.href = `/recipes  /${data?.createRecipe?.id}`;
  } catch (e) {
    console.log(e);
  }
}

export default function CreateRecipe() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <form onSubmit={handleCreatePost}>
        <fieldset>
          <legend>Name</legend>
          <input placeholder="Name" name="name" />
        </fieldset>

        <fieldset>
          <legend>Content</legend>
          <textarea placeholder="Description" name="description" />
        </fieldset>

        <button>Create Recipe</button>
      </form>
    </Layout>
  );
}
