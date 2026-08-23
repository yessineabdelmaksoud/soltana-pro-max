# Soltana Pro Max

Static React/Vite website for Soltana Pro Max, Sfax. It uses the supplied local restaurant imagery and the existing `framer-motion` dependency for light, accessible interaction.

## Requirements

- Node.js 20 or newer (Node 22 is recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` creates the production files in `dist/`.

## Content configuration

Edit [src/data/restaurant.js](src/data/restaurant.js) to set verified social links, the exact Google Maps destination, and opening hours. Empty fields are intentional: no unverified business data is published.

Edit [src/data/menu.js](src/data/menu.js) only when you have the official menu and confirmed prices. The supplied PDF is an unrelated sample menu, so this site deliberately shows categories without invented prices.

## Project structure

```text
src/
  components/     Page sections and shared SVG icons
  data/           Restaurant, menu, and brand phrase content
  motion/         Reusable Framer Motion variants
  styles.css      Responsive design tokens and page styling
design-system/    Generated UI/UX design direction
```

## Quality notes

- The brand intro respects `prefers-reduced-motion` and does not delay users who request reduced motion.
- Below-the-fold images are lazy-loaded with fixed image dimensions where applicable.
- The page has keyboard-visible focus styles, semantic links/buttons, an accessible mobile menu, and an Escape-close gallery lightbox.
- Test viewport sizes: 375px, 430px, 768px, 1024px, 1440px, and 1920px.

See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub, Vercel, custom-domain, and GitHub Student Developer Pack instructions.
