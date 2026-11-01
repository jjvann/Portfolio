// Reads about.md (your name, paragraph and headshot) and hands it to the site.
// You never need to edit this file.
import fs from "node:fs";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: true });

export default function () {
  const { data, content } = matter(fs.readFileSync("about.md", "utf8"));
  const photoPath = data.photo ? `images/site/${data.photo}` : null;
  return {
    ...data,
    photoPath: photoPath && fs.existsSync(photoPath) ? photoPath : null,
    bodyHtml: md.render(content),
  };
}
