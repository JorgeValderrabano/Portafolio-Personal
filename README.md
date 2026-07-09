# Jorge Valderrabano — Portfolio

Personal portfolio website showcasing web development and design projects. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Bilingual** — Spanish/English toggle with full translation support
- **Project showcase** — 61+ projects organized into 9 filterable categories (Health, Reservations, Education, E-Commerce, Artists, Professional Services, Real Estate, Tourism)
- **Filter counts** — Each filter button displays the number of projects in its category
- **Scroll animations** — Intersection Observer-based reveal animations
- **Draggable cards** — About section text cards with drag and resize
- **Certificate lightbox** — Click to view certification images
- **Responsive design** — Dark theme with violet accents, mobile-friendly navigation
- **GitHub projects** — Auto-rendered from a curated list

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid, animations)
- Vanilla JavaScript (no frameworks)
- Font Awesome 6.5.1
- Google Fonts (Inter, Space Grotesk)

## Structure

```
index.html          — Main HTML
styles.css          — All styles (design tokens, layout, animations)
script.js           — Translations, project data, rendering, interactivity
img/                — Project screenshots (p1.png - p61.png)
media/              — Education logos, work logos, certifications
favicon.png         — Site favicon
```

## Local Development

Open `index.html` in any browser. No build step required.

## Live Site

[https://jorgevalderrabano.github.io/Portafolio-Personal/](https://jorgevalderrabano.github.io/Portafolio-Personal/)

## Deployment

Deployed via GitHub Pages. The `.github/workflows/static.yml` workflow handles automatic deployment on push to the main branch.
