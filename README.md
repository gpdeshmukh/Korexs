# Korexs website (React + Vite)

## Run it on your laptop
1. Install Node.js (LTS version) from nodejs.org.
2. In this folder run:
   npm install
   npm run dev
3. Open http://localhost:5173

## Before you publish
Edit `src/config.js`: add your Formspree form address and your real email.

## Build for hosting
   npm run build
This creates a `dist` folder. Upload `dist` to Netlify (drag and drop), or connect the
project from GitHub with build command `npm run build` and publish directory `dist`.

## Where things are
- `src/App.jsx`            page layout (puts the sections in order)
- `src/components/`        one file per section (Header, Hero, Services, Products, Process, Contact, Footer)
- `src/data/content.js`    services, products, steps and sample bill text
- `src/config.js`          form address and email
- `src/index.css`          all styles
- `public/favicon.svg`     browser tab icon
