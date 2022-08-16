// Creating Dynamic Route for the posts as an array to create links between the blog page and post.
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Generating a props for the pre backend needed to render and serlize mdx files to parse data to show title and description and date in the blog page.
export async function getStaticProps() {
  const source = await "pages/posts/md.mdx";
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
