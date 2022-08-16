import BlogLayout from "../components/blog_layout";
import Head from "next/head";
import getPost from "../helpers/getpost";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function BlogPage({ source }) {
  return (
    <div>
      <Head>
        <title>MetaTensor Blog</title>
      </Head>
      <BlogLayout></BlogLayout>
      <div>
        <MDXRemote {...source.data} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const source = await getPost("pages/posts/md.mdx");
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
