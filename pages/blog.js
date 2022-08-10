import BlogLayout from "../components/blog_layout";
import Head from "next/head";
export default function BlogPage() {
  return (
    <div>
      <Head>
        <title>MetaTensor Blog</title>
        <BlogLayout></BlogLayout>
      </Head>
    </div>
  );
}
