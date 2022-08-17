import BlogLayout from "../components/blog_layout";
import Head from "next/head";
import getPost from "../helpers/getpost";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function BlogPage({ data, content }) {
  return (
    <div>
      <Head>
        <title>MetaTensor Blog</title>
      </Head>
      <BlogLayout></BlogLayout>
      <div>
        <MDXRemote {...content} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const post = getPost("pages/posts/md.mdx");
  const { data, content } = post;
  const mdxSource = await serialize(content);
  return { props: { data, content: mdxSource } };
}
