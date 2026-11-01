# JJ Vann Portfolio (jjvann.com)

This is a fast, photo-first portfolio site. You never need to write code to update it. Almost everything is done by editing a plain text file and dropping photos into a folder.

---

## 1. What lives where

```
portfolio/
├── about.md                 <- the About section text and headshot name
├── resume.md                <- the resume shown on the website (no phone number)
├── projects/                <- ONE text file per project
│   ├── beyond-malibu.md
│   ├── texas-lax.md
│   └── hill-country-margs.md
├── images/                  <- photos, ONE folder per project
│   ├── beyond-malibu/
│   ├── texas-lax/
│   ├── hill-country-margs/
│   └── site/                <- your headshot goes here
├── resume/                  <- JJ_Vann_Resume.pdf (the Download PDF button)
├── src/_data/site.json      <- your name and contact email
└── (everything else)        <- the machinery. Leave it alone.
```

The order of the three panels on the home page comes from the `order:` number at the top of each project file (1 is first, 2 is second, and so on).

---

## 2. Things you still need to supply

The site works today, but these are placeholders until you add the real thing:

| What | Where to put it |
|---|---|
| About paragraph | edit `about.md` (delete the "PLACEHOLDER TEXT" words) |
| Beyond Malibu cover and photos | `images/beyond-malibu/`, then list them in `projects/beyond-malibu.md` |
| Project logos (optional) | `images/<project-folder>/`, then set `logo:` in that project's file |
| Final case study text | the text below the `---` line in each project file. Delete the `<!-- DRAFT ... -->` line when you're done. |
| A real favicon (the little tab icon) | replace `src/favicon.svg` |

When something is missing, the site shows a clearly marked placeholder instead of breaking.

---

## 3. Editing a project

Open its file in `projects/`. It has two parts, split by lines of three dashes (`---`):

1. **The top part** holds the settings (title, cover, photo list).
2. **The bottom part** is the description. Write it like a normal email. Blank line = new paragraph. `**bold**` makes bold. A line starting with `- ` makes a bullet.

Example of the top part:

```
---
title: Texas Men's Lacrosse Apparel & Merchandise
shortTitle: Texas Men's Lacrosse
order: 2
tag:
cover: 1.webp
coverAlt: Describe the cover photo for people who can't see it
coverFocus: 40% 45%
logo:
summary: One sentence shown in Google results and link previews.
meta:
  - label: Role
    value: Equipment Manager and merch designer
gallery:
  - file: 1.webp
    alt: Describe this photo
    caption: Optional small caption under the photo
---
```

What each line does:

| Line | Meaning |
|---|---|
| `title` | The big heading on the project page |
| `shortTitle` | The shorter name shown on the home panel and "Next project" link |
| `order` | Position on the home page (1, 2, 3...) |
| `tag` | A small label like "In progress" or "Concept". Leave blank for none. |
| `cover` | The photo filename for the home page panel. Leave blank for a placeholder. |
| `coverAlt` | A short description of the cover photo (for screen readers) |
| `coverFocus` | Which part of the photo stays visible when the panel crops it. `50% 50%` is the center. The first number moves left to right, the second moves top to bottom. Try `40% 20%` to favor the upper part. |
| `logo` | Optional logo filename. Blank shows a letter placeholder. |
| `summary` | One plain sentence about the project |
| `meta` | The little fact list (Role, Timeframe, etc). Add or remove pairs freely. |
| `gallery` | The photos, in the order they should appear. `file` and `alt` are required. `caption`, `heading` and `size` are optional (see below). |

**Grouping photos.** Two optional lines on a photo help keep related shots together so visitors scroll less:

- `size: half` makes the photo half-width, so two `half` photos in a row sit side by side (for example a shirt's front and back). Photos without it are full width. Use `half` photos in pairs. A single one leaves an empty space beside it.
- `heading: Apparel` puts a small section title above that photo. Use it on the first photo of each group.

Put the most important photos first.

**Logos.** Set `logo: logo.webp` and put the file in the project's image folder. A transparent PNG or WebP with the white background removed looks best.

**Careful with spacing.** The indentation (the spaces at the start of lines) matters. Copy an existing entry and change the words rather than typing from scratch. If a value has a colon in it, wrap the value in quotes, like `value: "Phase 1: Concept"`.

**Alt text** (`alt`) is a short plain description of what's in the photo, like "Burnt orange quarter-zip with a white longhorn logo". It helps visitors using screen readers and helps search engines. Please don't skip it.

---

## 4. Adding photos

1. Put the photo in the project's folder, for example `images/texas-lax/`.
2. Add it to the `gallery:` list in that project's file. Use the exact filename, including capitals and `.webp`.
3. Rebuild (see section 6).

**Don't worry about shrinking photos.** The build automatically makes phone-sized and desktop-sized copies in modern formats (AVIF and WebP), so the visitor's device loads only what it needs. Your originals are never changed. Still, a good habit is to export photos at roughly **1600 pixels wide or less** before adding them, so the folder stays small.

If a photo named in a project file is missing, the build stops and tells you which file and which folder in plain English.

---

## 5. Adding a brand-new project

1. Copy an existing file in `projects/` (for example `hill-country-margs.md`) and rename it. The file name becomes the web address, so `my-new-project.md` becomes `jjvann.com/work/my-new-project/`. Use lowercase letters and dashes, no spaces.
2. Create a matching photo folder: `images/my-new-project/`. The folder name must match the file name exactly.
3. Change the text at the top and the description below.
4. Set `order:` where you want it. Other projects' numbers may need to shift.
5. Rebuild.

The home page is designed around three tall panels. With more than three projects, the panels get narrower, so it's worth checking how it looks.

To remove a project, delete its file from `projects/`.

---

## 6. Previewing on your computer

You only need to do the setup once. This needs Node.js, which is already installed on your Mac.

Open the Terminal app, then:

```bash
cd ~/Desktop/portfolio
```

```bash
npm install
```

(Only needed the first time, or if the `node_modules` folder is ever deleted.)

To see the site live while you edit:

```bash
npm start
```

Then open the address it prints (usually http://localhost:8080) in your browser. Every time you save a file, the page refreshes by itself. Press `Ctrl + C` in Terminal to stop.

To make the finished site (this is what gets published):

```bash
npm run build
```

The result lands in a folder called `_site`. You never edit that folder by hand.

---

## 7. Editing other text

- **About section:** `about.md`. Change `heading`, `photo` (filename inside `images/site/`), `photoAlt`, and the paragraph below the dashes.
- **Email address or name:** `src/_data/site.json`. The site shows email only, never a phone number.
- **Resume on the page:** edit `resume.md`. The comment at the top explains the simple formatting. Then replace `resume/JJ_Vann_Resume.pdf` (same name) so the Download PDF button matches. The Download button only appears when that PDF exists.
- **Instagram and LinkedIn links:** `src/_data/site.json`. The Contact section shows the email, Instagram and LinkedIn with icons.
- **Colors and fonts:** the top of `src/css/styles.css` lists the color names (sand, espresso, orange, pine). Change a color code there and it updates everywhere.

---

## 8. Putting the site online (Cloudflare Pages, free)

Your domain jjvann.com is already at Cloudflare, so this is the easiest route. There are two parts.

### Part A: Put the folder on GitHub

The portfolio folder is already set up as its own separate git project (separate from the rest of your Desktop). Nothing has been committed yet. The short version is:

1. On github.com (signed in as jjvann), create a new empty repository called `portfolio`. Don't add a README or any other files.
2. In Terminal, run these one at a time from inside the portfolio folder to save the first version:

```bash
cd ~/Desktop/portfolio
```

```bash
git add .
```

```bash
git commit -m "First version of portfolio"
```

3. Then connect it to GitHub and upload (GitHub shows you these exact lines on the new empty repository page):

```bash
git remote add origin https://github.com/jjvann/portfolio.git
```

```bash
git push -u origin main
```

Note: the `.gitignore` file keeps junk (`node_modules`, `_site`, `.DS_Store`) and your private working files (original photo folders, the original resume with your phone number, the project brief) out of GitHub. Those stay on your computer. The commit will list your name and the email in your git settings, and GitHub shows that publicly on a public repository.

### Part B: Connect Cloudflare Pages

1. Sign in at dash.cloudflare.com. Go to **Workers & Pages**, then **Create**, then the **Pages** tab, then **Connect to Git**.
2. Pick the `jjvann/portfolio` repository.
3. Use these build settings:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `_site`
4. Click **Save and Deploy**. After a minute or two you get a temporary address like `portfolio-xyz.pages.dev`. Open it and check the site.
5. In the project, open **Custom domains**, then **Set up a custom domain**, and enter `jjvann.com`. Because the domain is already at Cloudflare, it connects the records for you. Optionally add `www.jjvann.com` too.
6. The padlock (HTTPS) turns on automatically, usually within a few minutes.

### Updating the live site afterward

Save your changes, then in Terminal from the portfolio folder:

```bash
git add .
```

```bash
git commit -m "Describe what you changed"
```

```bash
git push
```

Cloudflare notices the upload and rebuilds the site by itself in about a minute.

---

## 9. Troubleshooting

- **"I added a photo but it doesn't show."** Check the spelling of the filename in the project file, including `.webp` and capital letters, and that the photo is in that project's folder.
- **The build stops with an error that names a project file.** Read the message. It says which file and what's missing or mis-typed. Usually it's a spacing problem at the top of a project file, or a photo that isn't in the folder.
- **"Resume link doesn't work."** `resume/JJ_Vann_Resume.pdf` is missing or named differently. The build prints a reminder when it's missing.
- **The preview looks outdated.** Refresh the page with Cmd + Shift + R. If that fails, stop the preview with Ctrl + C and run `npm start` again.
- **Terminal says "command not found: npm".** Node.js isn't on the path. Close and reopen Terminal.

---

## 10. Content rules to keep in mind

- Hill Country Margs was a concept. It was never produced or sold. Keep that clear.
- Pink Out is upcoming (February 19, 2027). Don't add a sponsor, charity, or results until they're real.
- Beyond Malibu is in progress. Don't claim it has launched.
- Email is the only contact. No phone number.

---

## 11. Optional later improvements

- **Link previews** (the image and title that appear when someone texts or posts your link) are not set up yet. A small addition can add this.
- **A sitemap** helps Google find your pages. Also an optional small addition.
- After the site is live, run a Lighthouse speed test (in Chrome: right-click, Inspect, Lighthouse tab) to confirm scores are still in the 90s or higher.
