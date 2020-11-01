import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Recipe, getAllRecipes } from '../recipes/recipes';

type HomeProps = {
  recipes: Recipe[];
};

export default function Home({ recipes }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recipes</h2>
        <ul className={utilStyles.list}>
          {recipes?.map(({ id, name }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/recipes/${id}`}>
                <a>{name}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      recipes: getAllRecipes(),
    },
  };
};
