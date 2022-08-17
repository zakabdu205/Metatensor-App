import BlogLayout from "../components/blog_layout";
import Head from "next/head";
import getPosts from "../helpers/getposts";
import styles from "../styles/Home.module.css";

const thumbnail = (
  <img src={"https://placeimg.com/400/225/arch"} alt={"Shoes"} />
);
export default function BlogPage({ posts }) {
  return (
    <div>
      <Head>
        <title>MetaTensor Blog</title>
      </Head>
      <div className={styles.container}>
        <div className="navbar bg-base-100 font-bold">
          <h1 className="mb-5 text-2xl">MetaTensor Blog</h1>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl">News and Articles</h1>
        <div className="box-border grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-y-4">
          {posts.map((post) => (
            <BlogLayout
              title={post.data.title}
              description={post.data.description}
              date={post.data.date}
              thumbnail={thumbnail}
            ></BlogLayout>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  return { props: { posts } };
}
