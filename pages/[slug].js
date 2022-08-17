// Creating Dynamic Route for the posts as an array to create links between the blog page and post.
import getPosts from "../helpers/getposts";
import getPost from "../helpers/getpost";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote"; // Used with Serlization to get clean content from mdx files and could be put in component to style them.

export default function Post({ data, content }) {
  return (
    <div>
      <h1 className="font-bold text-7xl mt-24 mb-12">{data.title}</h1>
      <time className="text-gray-500 italic">{data.date}</time>
      <p className="prose mt-12">
        <MDXRemote {...content} />
      </p>
    </div>
  );
}
export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
