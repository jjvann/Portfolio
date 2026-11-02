// Eleventy settings. You never need to edit this file.
import fs from "node:fs";
import Image from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  // Files copied to the finished site as-is
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "resume": "resume" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });

  // Friendly reminder if the resume PDF hasn't been added yet
  eleventyConfig.on("eleventy.before", async () => {
    if (!fs.existsSync("resume/JJ_Vann_Resume.pdf")) {
      console.warn("[portfolio] Heads up: resume/JJ_Vann_Resume.pdf is missing, so the Resume link will not work yet.");
    }
  });

  // Rebuild when project text files or photos change
  eleventyConfig.addWatchTarget("projects/");
  eleventyConfig.addWatchTarget("about.md");
  eleventyConfig.addWatchTarget("resume.md");
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("images/");

  // {% image "images/folder/photo.webp", "alt text", "sizes", "eager" %}
  // Makes phone-sized and desktop-sized copies (AVIF + WebP) and sets width/height.
  eleventyConfig.addAsyncShortcode(
    "image",
    async function (src, alt, sizes = "100vw", loading = "lazy", cls = "") {
      const metadata = await Image(src, {
        widths: [480, 800, 1200, 1600],
        formats: ["avif", "webp"],
        outputDir: "_site/img/",
        urlPath: "/img/",
        cacheOptions: { directory: ".cache" },
      });
      return Image.generateHTML(metadata, {
        alt,
        sizes,
        loading,
        decoding: loading === "eager" ? "sync" : "async",
        fetchpriority: loading === "eager" ? "high" : "auto",
        class: cls,
      });
    }
  );

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
