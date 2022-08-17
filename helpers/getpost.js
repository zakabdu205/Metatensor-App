import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getPost(slug) {
  const fileContents = fs.readFileSync(
    path.join(`pages/posts/${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
}
