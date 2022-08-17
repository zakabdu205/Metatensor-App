import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getPosts() {
  const files = fs.readdirSync(path.join("pages/posts"));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(
      path.join(`pages/posts/${slug}.mdx`),
      "utf8"
    );
    const { data } = matter(fileContents);
    return { slug, data };
  });
  return allPostsData;
}
