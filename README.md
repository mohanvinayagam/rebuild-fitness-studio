# Rebuild Fitness Studio — Website

A premium, high-converting landing website for **Rebuild Fitness Studio**, a modern gym and fitness studio in Chromepet, Chennai.

## Tech Stack

- **React** — UI framework
- **Vite** — Build tool
- **Tailwind CSS v4** — Utility-first CSS
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **Google Fonts** — Bebas Neue, Oswald, Inter

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

## Netlify Deployment

This project is pre-configured for Netlify deployment.

### Option 1: Deploy via Netlify UI

1. Push this repo to GitHub
2. Connect the repo to Netlify
3. Netlify will auto-detect the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### Option 2: Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## How to Update

### Replace Images

All images are in `public/images/`. Simply replace the files with the same names:

| File | Used For |
|------|----------|
| `logo.png` | Site logo (navbar + footer) |
| `hero.jpg` | Hero section background |
| `about.jpg` | About section image |
| `cta-bg.jpg` | Call-to-action section background |
| `gym-01.jpg` | Facilities & gallery |
| `gym-02.jpg` | Facilities & gallery |
| `training-01.jpg` | Facilities & gallery |
| `gallery-01.jpg` | Gallery |
| `gallery-02.jpg` | Gallery |

### Update Membership Prices

Edit `src/data/memberships.js`:

```js
// Change prices here
{ name: 'Monthly', price: '1,500', ... }
```

### Update Gym Information

Edit `src/data/gymData.js`:

```js
// Update phone, address, hours, etc.
export const gymData = {
  phone: '+91 86088 82233',
  address: { ... },
  openingHours: { ... },
};
```

### Update Testimonials

Edit `src/components/Testimonials.jsx` — replace the placeholder testimonials array with real member testimonials.

## Project Structure

```
src/
  components/     # React components (one per section)
  data/           # Centralized data files
  assets/         # Static assets imported by components
  App.jsx         # Main app layout
  main.jsx        # Entry point
  index.css       # Global styles + Tailwind config

public/
  images/         # Image assets
  favicon/        # Favicon files
  robots.txt      # Search engine crawling rules
  sitemap.xml     # Sitemap for SEO
```

## License

© 2026 Rebuild Fitness Studio. All Rights Reserved.
