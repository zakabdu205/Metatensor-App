import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getPost(pth) {
  const fileContents = fs.readFileSync(path.join(pth), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
}
