import type { NextPage } from 'next';
import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components/index';
import { getPosts } from '../services';
import FeaturedPosts from '../sections/FeaturedPosts';

// const posts = [
//   { title: 'React Testing', excerpt: 'Learn React Testing' },
//   { title: 'React with tailwind', excerpt: 'Learn React with Tailwind' },
// ];

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any, index: number) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget categories={undefined} slug={undefined} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
