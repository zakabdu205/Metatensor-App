import BlogLayout from "../components/blog_layout";
import Head from "next/head";
import getPosts from "../helpers/getposts";
import styles from "../styles/Home.module.css";
import MetatensorLogo from "/Users/main/Documents/GitHub/Metatensor-App/public/images/Meta Tensor.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";

const thumbnail = <Image src={MetatensorLogo} alt={"MetaTensorLogo"} />;
export default function BlogPage({ posts }) {
  return (
    <div>
      <Head>
        <title>MetaTensor Blog</title>
      </Head>
      <div className={styles.container}>
        <div className="navbar bg-base-100 font-bold">
          <h1 className="mb-5 text-2xl">
            <Link href={"/"}>MetaTensor Blog</Link>
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <section className="w-4/6 mx-auto">
          <h1 className="font-bold text-2xl mb-4">News and Articles</h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-y-4">
            {posts.map((post) => (
              <BlogLayout
                key={post.key}
                title={post.data.title}
                description={post.data.description}
                date={post.data.date}
                thumbnail={thumbnail}
                slug={post.slug}
              ></BlogLayout>
            ))}
          </div>
        </section>
      </div>
      <div className=" bg-bottom my-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  return { props: { posts } };
}
