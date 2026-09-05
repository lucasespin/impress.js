# Nick Cassidy — Portfolio Site (placeholder build)

A static, responsive one-page portfolio site for composer/music producer Nick
Cassidy, built to showcase work in commercials, TV, and sports broadcast and
drive freelance inquiries.

## What's here

- `index.html` — full page markup (hero, about, portfolio grid with
  category filters, services, testimonials, contact form, footer)
- `css/style.css` — dark theme styling, fully responsive
- `js/script.js` — mobile nav toggle, portfolio filtering, scroll-reveal
  animation, placeholder contact form handling

No build step or dependencies — open `index.html` directly in a browser, or
serve the folder with any static file host (GitHub Pages, Netlify, Vercel,
S3, etc.).

## This is a placeholder build

Everything content-wise is a sample and needs to be swapped out before this
goes live:

- Bio text and location in the **About** section
- Portrait photo (currently a placeholder box)
- Real credits/clients and years in the **Portfolio** cards
- Actual reel clips or embeds (e.g. YouTube/Vimeo `<iframe>`) in place of
  the `.card-media` play-button placeholders
- Testimonial quotes and attributions
- Email address, location, and social links in **Contact**
- The contact form currently only shows a confirmation message client-side —
  wire it to a real backend or a service like Formspree/Netlify Forms so
  submissions actually reach an inbox

## Notes

This folder is self-contained so it doesn't touch the impress.js library
files at the repo root. If you want this to be the site actually deployed
(e.g. via GitHub Pages from the repo root), move these files up to the repo
root, or point your hosting at this subfolder.
