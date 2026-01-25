# Portfolio Next.js Migration

This is the Next.js (App Router) version of your portfolio website. The original static HTML/CSS/JS site remains in the parent directory.

## Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx            # Home page (converted from index.html)
│   ├── globals.css         # Global styles (converted from style.css)
│   └── project-*/          # Project detail pages
│       ├── page.tsx
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
└── public/
    ├── images/             # All images and assets
    └── Vann, Jacob - Resume.pdf
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   cd portfolio-nextjs
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Routes

- `/` - Home page (Hero, Gallery, Selected Work, Resume, Contact sections)
- `/project-hillcountrymargs` - Hill Country Margs project detail
- `/project-texaslacrosse` - Texas Lacrosse project detail
- `/project-studio41` - Young Life Studio 41 project detail
- `/project-hillcountrypressurewash` - Hill Country Pressure Wash project detail

## Key Changes from Static Site

1. **React Components**: Navbar and Footer are now reusable React components
2. **React Hooks**: All vanilla JavaScript has been converted to React hooks (useState, useEffect)
3. **Next.js Image**: Using Next.js Image component for optimized images
4. **TypeScript**: All components are written in TypeScript
5. **App Router**: Using Next.js 14 App Router structure
6. **CSS**: Global stylesheet maintained, class → className conversion

## Features Preserved

- ✅ All styling and design identical to original
- ✅ Mobile navigation menu functionality
- ✅ Smooth scrolling for anchor links
- ✅ Rotating text animation in hero section
- ✅ Active navigation link highlighting
- ✅ All images and assets
- ✅ Resume PDF download

## Build for Production

```bash
npm run build
npm start
```

## Notes

- The home page (`/`) contains all sections (Hero, Gallery, Selected Work, Resume, Contact) as anchor-linked sections, matching the original `index.html` structure.
- All project detail pages are available as separate routes.
- Images are served from `/public/images/` and referenced as `/images/...` in the code.

