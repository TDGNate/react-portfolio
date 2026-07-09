# Archive — old portfolio content & assets

This folder preserves everything from the **pre-redesign** portfolio so nothing
is lost. The live site was rebuilt from a Claude design handoff in July 2026;
the old design's code lives in git history at commit **`b987986`** (and earlier).

## What's in this folder

| Path | What it is |
| --- | --- |
| `OLD-README.md` | The original project README (EmailJS + Bootstrap era). |
| `imgs/` | Old images: portraits (`Nate-Portrait.jpg`, `Nate1.png`, `Nate-six-flags.jpg`), backgrounds (`mountains.jpg`, `waterfall.jpg`, `ailenbg.jpg`), `cli.png`, and `skills/` — the full old skill-icon set (PNG logos for React, Node, MySQL, etc.). |
| `imgs/Nate's Resume.pdf` | The **old** resume (replaced by `public/Christian-McIlvenny-Resume.pdf`). |
| `svgs/` | Old decorative SVGs (waves, rocket, backgrounds) used by the old sections. |
| `gifs/daisysCakes.gif` | An old project GIF that wasn't referenced by any card. |

> These files are **not part of the build** (the folder is outside `src/` and
> `public/`), so they don't ship to natemci.com — they're kept purely for
> reference / reuse.

To recover any old **code** (components, styles, utils): `git show b987986:src/<path>`.

---

## Old site copy (text)

### Hero
- Title: **"Hello, I'm Christian McIlvenny"**
- Subtitle: **"Software Developer"**
- Blurb: "You can just call me Nate! My passion is building applications for clients, team collaboration, problem-solving, and designing."
- Links: More About Me · Resume · "Check out some of my work below!" · "Contact Me!"

### Navbar
- Logo: "Nate" — links: About Me · Projects · Skills · Resume · Contact

### About page — "Who am I?"
> I'm Christian but my peers call me **Nate**! My journey began when my CyberSecurity teacher made us write our first line of code in Python and revealed the fundamentals of computers and technology.
>
> I love learning new things and finding ways to utilize them for personal projects. I was also self-taught for 4-6 months and built multiple responsive websites before enrolling in a Bootcamp.

> Now I'm a full-stack developer with a Software Engineering Certificate from the **University of California, Riverside**. I'm experienced with web designing, code structuring, team collaboration, and problem-solving while following Git Practice.
>
> I can take other designs and convert them to code, maintain full-stack websites for clients, and have the tasks ready for production. I'm always eager to learn more and grow with others and can work in fast-paced environments while still completing expectations.

### Skills — "Technical Skills"
- **Languages and Frameworks:** JavaScript, jQuery, Express, React, HTML5, SASS, Bootstrap, Materialize, CSS3
- **Tools and Technologies:** Git, NPM, Heroku, GitHub, Rest API, Insomnia, VS Code, Node, Handlebars
- **Databases:** MySQL, Sequelize, Workbench, Mongo, Compass, Mongoose

### Contact — "Get in touch..."
- Christian "Nate" McIlvenny · itsnzte@gmail.com
- Had a working EmailJS contact form ("Send me a message!") + a "My Socials" list.

---

## Old projects (the full list + links)

The redesigned site groups these under **"Student Web & Coding Projects"** and
shows them on the Projects page. Full original details preserved here:

1. **E-Commerce Backend** — Backend for an e-commerce site with a full REST API (get all / get one / create / update / delete). Node, Express, API, MySQL, Sequelize. Repo: https://github.com/TDGNate/E-Commerce-Backend
2. **Team Profile Generator** — CLI app that generates an HTML team page (name, role, id, email, office/GitHub). HTML, CSS, Node, Bootstrap, NPM. Repo: https://github.com/TDGNate/Team-profile-generator
3. **Quiz Code** — Timed front-end coding quiz with a local leaderboard. HTML, CSS, JS. Repo: https://github.com/TDGNate/Quiz-Code · Live: https://tdgnate.github.io/Quiz-Code/
4. **README Generator** — CLI that builds a polished README with optional linked table of contents. JS, NPM, Node. Repo: https://github.com/TDGNate/Readme-Generator
5. **N8 Tech Blog** — Full-stack CMS blog with posts, comments, and a user dashboard. Node, Express, Handlebars, MySQL, Sequelize, Bootstrap, SweetAlert, FontAwesome, Heroku. Repo: https://github.com/TDGNate/Tech-Blog · Live (offline): https://techer-blogger.herokuapp.com/
6. **Weather App** — City search with current conditions + 5-day forecast and saved history. HTML, CSS, JS, API. Repo: https://github.com/TDGNate/Weather-site · Live: https://tdgnate.github.io/Weather-site/
7. **Password Generator** — Generates passwords with chosen character sets/length. HTML, CSS, JS. Repo: https://github.com/TDGNate/Nates-password-generation · Live: https://tdgnate.github.io/Nates-password-generation/
8. **My Todos** — To-do app persisting to local storage. HTML, CSS, JS, FontAwesome. Repo: https://github.com/TDGNate/My-Todos · Live: https://tdgnate.github.io/My-Todos/
9. **Platello** — Food/drink recommender via Spoonacular + CocktailDB APIs. HTML, CSS, JS, Materialize, jQuery, API. Repo: https://github.com/PreDevz/Platello · Live: https://predevz.github.io/Platello/
10. **Note Taker** — Notes saved to JSON via an Express backend. HTML, CSS, JS, Node, Express. Repo: https://github.com/TDGNate/Note-Taker · Live (offline): https://mighty-ridge-88200.herokuapp.com/
11. **POP Umai** — Collaborative full-stack site for a local business, with an authenticated admin dashboard. Node, Express, Handlebars, MySQL, Sequelize, Bootstrap, SweetAlert, Heroku. Repo: https://github.com/PreDevz/POP-Umai · Live (offline): https://pop-umai.herokuapp.com/
12. **Calendar App** — Work-day scheduler with color-coded, local-storage-persisted time blocks. HTML, CSS, JS, jQuery. Repo: https://github.com/TDGNate/Calender-App · Live: https://tdgnate.github.io/Calender-App/
13. **Rock Paper Scissors** — First browser game vs. a bot with animated elements. HTML, CSS, JS. Repo: https://github.com/TDGNate/Rock-Paper-Scissors · Live: https://tdgnate.github.io/Rock-Paper-Scissors/

> The Heroku-hosted demos (Tech Blog, Note Taker, POP Umai) went offline when
> Heroku ended free dynos, which is why the new site shows them as **Code-only**.
