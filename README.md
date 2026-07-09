# Nate's Portfolio — natemci.com

The personal portfolio of Christian "Nate" McIlvenny — a creative builder, former
game developer (Unreal Engine + Verse), and Mechanical Engineering student at
California Baptist University.

**Live:** https://natemci.com

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About

A modern, animation-forward site with an Apple-style "liquid / frosted glass"
treatment on the nav, cards, and buttons. It ships with a **light + dark theme**
(defaults to your system preference, remembers your choice), smooth-scrolling
section nav, cursor parallax in the hero, and scroll-reveal animations.

It's two views:

- **Home** (`/`) — a single scrolling page: Hero, About + timeline, Skills &
  Tools, a Projects preview, Faith, and Contact.
- **Projects** (`/projects`) — the three project focus areas in detail, a full
  grid of individual web/coding builds (each with its source and, where still
  hosted, a live demo), and a Highlights section.

The visual design was created in Claude and reproduced here in React.

## Tech

- [React](https://reactjs.org/) + [React Router](https://reactrouter.com/)
- [Create React App](https://create-react-app.dev/)
- [GitHub Pages](https://pages.github.com/) (custom domain via `CNAME`)
- Fonts: Space Grotesk (headings) + Inter (body)

## Project structure

```
src/
  theme/         theme tokens + provider (light/dark, glass recipe)
  components/    Nav, Reveal, ScrollToHash, UI primitives, sections/
  pages/         Home, Projects
  data/          portfolio.js — single source of truth for all content
  hooks/         useMouseParallax
  styles/        global.css (keyframes, media queries, hover interactions)
public/
  Christian-McIlvenny-Resume.pdf
  CNAME, 404.html (SPA fallback), index.html
```

## Run locally

```
npm install
npm start
```

Opens http://localhost:3000.

## Deploy

The site deploys to GitHub Pages and is served at the custom domain
`natemci.com` (see `public/CNAME`).

```
npm run deploy
```

This builds the app and publishes `build/` to the `gh-pages` branch.

## Questions

_Reach out!_

GitHub: [TDGNate](https://github.com/TDGNate) · Email: itsnzte@gmail.com
