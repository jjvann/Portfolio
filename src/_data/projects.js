// Reads every text file in the /projects folder and hands it to the site.
// You never need to edit this file.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: true });
const dir = path.resolve("projects");

function needImage(file, slug, name) {
  if (!name) return null;
  const imagePath = `images/${slug}/${name}`;
  if (!fs.existsSync(imagePath)) {
    throw new Error(
      `projects/${file}: I can't find the image "${name}". Put it in the folder images/${slug}/ or fix the filename.`
    );
  }
  return imagePath;
}

export default function () {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      return {
        ...data,
        slug,
        url: `/work/${slug}/`,
        coverPath: needImage(file, slug, data.cover),
        logoPath: needImage(file, slug, data.logo),
        gallery: (data.gallery || []).map((item) => ({
          ...item,
          path: needImage(file, slug, item.file),
          also: (item.also || []).map((a) => ({ ...a, path: needImage(file, slug, a.file) })),
        })),
        descriptionHtml: md.render(content),
      };
    })
    .sort((a, b) => (a.order || 99) - (b.order || 99));
}
