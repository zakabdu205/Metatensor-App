import BlogLayout from "../components/blog_layout";
import Head from "next/head";
import getPost from "../helpers/getpost";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote"; // Used with Serlization to get clean content from mdx files and could be put in component to style them.

import Image from "next/image";

const thumbnail = (
  <img src={"https://placeimg.com/400/225/arch"} alt={"Shoes"} />
);
export default function BlogPage({ data, content }) {
  return (
    <div>
      <Head>
        <title>MetaTensor Blog</title>
      </Head>
      <BlogLayout
        title={data.title}
        description={data.description}
        date={data.date}
        thumbnail={thumbnail}
      ></BlogLayout>
    </div>
  );
}

export async function getStaticProps() {
  const post = getPost("pages/posts/md.mdx");
  const { data } = post;
  return { props: { data } };
}
