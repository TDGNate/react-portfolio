# Nate McIlvenny — Portfolio

Personal portfolio of **Christian "Nate" McIlvenny** — a creative builder,
former game developer (Unreal Engine + Verse), and Mechanical Engineering
student at California Baptist University.

🔗 **Live:** [natemci.com](https://natemci.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Overview

A modern, animation-forward site with an Apple-style **liquid / frosted glass**
treatment on the nav, cards, and buttons. Features a **light + dark theme**
(defaults to your system, remembers your choice), smooth-scrolling section nav,
cursor parallax in the hero, and scroll-reveal animations. Built in React and
reproduced from a design created in Claude.

**Two views:**

- **Home** (`/`) — Hero · About + timeline · Skills & Tools · Projects preview · Faith · Contact
- **Projects** (`/projects`) — the three project focus areas in detail, a full grid of individual web/coding builds (each with source + live demo where available), and a Highlights section

## Tech stack

- [React](https://reactjs.org/) + [React Router](https://reactrouter.com/)
- [Create React App](https://create-react-app.dev/)
- [GitHub Pages](https://pages.github.com/) with a custom domain (`CNAME`)
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
  CNAME · 404.html (SPA fallback) · index.html
archive/         old pre-redesign README, images, SVGs, resume (see archive/OLD-CONTENT.md)
```

## Run locally

```bash
npm install
npm start          # http://localhost:3000
```

## Deploy

The site is served at `natemci.com` from GitHub Pages (`public/CNAME`).

```bash
npm run deploy     # builds and publishes build/ to the gh-pages branch
```

## Contact

GitHub [TDGNate](https://github.com/TDGNate) · LinkedIn
[christian-mcilvenny](https://www.linkedin.com/in/christian-mcilvenny) ·
Email itsnzte@gmail.com
