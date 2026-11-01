// Reads resume.md (the on-page resume) and hands it to the site.
// Also notes whether a downloadable PDF exists. You never need to edit this file.
import fs from "node:fs";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: true });

export default function () {
  const html = md
    .render(fs.readFileSync("resume.md", "utf8"))
    // "##" sections become small headings, "###" entries become sub-headings
    .replace(/<(\/?)h3>/g, "<$1h4>")
    .replace(/<(\/?)h2>/g, "<$1h3>")
    // "Title | date" -> title on the left, date on the right
    .replace(/<h4>(.*?) \| (.*?)<\/h4>/g, '<h4><span>$1</span><span class="resume-date">$2</span></h4>');
  return {
    html,
    hasPdf: fs.existsSync("resume/JJ_Vann_Resume.pdf"),
  };
}
