# PASAN MUSIC — portfolio
Edit everything in `src/data/content.js`. Images → `public/images`, audio → `public/audio`.

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. vercel.com → Add New → Project → import the repo.
3. Framework preset "Vite" (auto-detected). Build: `npm run build`, Output: `dist`. Deploy.
(Or CLI: `npm i -g vercel && vercel --prod`.)
