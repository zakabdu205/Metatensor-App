import BlogLayout from "../components/blog_layout";
import Head from "next/head";
import getPosts from "../helpers/getposts";

const thumbnail = (
  <img src={"https://placeimg.com/400/225/arch"} alt={"Shoes"} />
);
export default function BlogPage({ posts }) {
  return (
    <div>
      <Head>
        <title>MetaTensor Blog</title>
      </Head>
      {posts.map((post) => (
        <BlogLayout
          title={post.data.title}
          description={post.data.description}
          date={post.data.date}
          thumbnail={thumbnail}
        ></BlogLayout>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  return { props: { posts } };
}
