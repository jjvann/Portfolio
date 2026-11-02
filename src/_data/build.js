// Gives the stylesheet link a "version" that changes whenever styles.css changes,
// so browsers never keep showing an old look after you publish. You never need to edit this file.
import fs from "node:fs";
import crypto from "node:crypto";

export default function () {
  const css = fs.readFileSync("src/css/styles.css");
  return { cssVersion: crypto.createHash("sha1").update(css).digest("hex").slice(0, 8) };
}
