// Single source of truth for portfolio content.
// Text is lifted verbatim from the Claude design handoff
// (Home.dc.html / Projects.dc.html). The individual coding projects below are
// Nate's real bootcamp/personal builds, shown as extra glass cards on the
// Projects page with their real screenshots + links.

import {
  Makullveny,
  QuizCode,
  TeamGenerator,
  NoteTaker,
  EComBackend,
  ReadMeGen,
  WeatherApp,
  TechBlog,
  PassGen,
  MyTodos,
  CalenderApp,
  RpsGame,
  Platello,
  POPUmai,
} from "../gifs/projects";

// ---- Hero ---------------------------------------------------------------
export const hero = {
  eyebrow: "Creative Builder · Mechanical Engineering Student",
  title: "I like building things that feel simple — and work well.",
  body: "I'm Christian McIlvenny — I go by Nate, short for my middle name, Nathaniel. A former game developer (Unreal Engine + Verse) who started out in web dev and still builds software while exploring AI. These days I'm studying Mechanical Engineering at California Baptist University.",
};

// ---- About --------------------------------------------------------------
export const about = {
  eyebrow: "About",
  title: "From game worlds to real-world design.",
  paragraphs: [
    "Mechanical Engineering student with a creative, technical background in coding, robotics, game development, and digital media. I enjoy building things with a team, solving practical problems, and learning tools that connect software with real-world design.",
    "I value keeping things straightforward and uncluttered — in how I build, and how I communicate.",
  ],
};

export const values = [
  "Straightforward",
  "Uncluttered",
  "Team-oriented",
  "Patient",
  "Dependable",
];

export const timeline = [
  { label: "Web Dev", sub: "Where it started" },
  { label: "Game Dev", sub: "Unreal Engine + Verse" },
  { label: "Computer Science", sub: "CBU, before switching" },
  { label: "Mechanical Engineering", sub: "CBU, now", current: true },
];

// ---- Skills -------------------------------------------------------------
export const skillGroups = [
  {
    title: "Code & Software",
    items: ["JavaScript", "React", "Python", "C++", "HTML & CSS", "JSON"],
  },
  {
    title: "Game & Creative",
    items: ["Unreal Engine", "Verse", "Photo & Video Editing"],
  },
  { title: "Exploring with AI", items: ["Claude", "Codex", "MCP"] },
];

// ---- Featured project categories (Home preview + Projects page) --------
export const featuredProjects = [
  {
    id: "game-dev",
    kicker: "Unreal Engine · Verse",
    title: "Independent Game Development",
    tagsShort: ["Unreal Engine", "Verse", "Game Design"],
    tags: ["Unreal Engine", "Verse", "Gameplay Systems", "Asset Creation"],
    descShort:
      "Built and shipped interactive game projects end-to-end — gameplay logic, assets, and polish — then promoted them across platforms, earning about $7K through user engagement.",
    descLong:
      "Created interactive digital projects using Verse and Unreal Engine tools — gameplay logic, asset creation, and video/photo editing. Built, tested, and improved games, then promoted published projects across platforms, earning about $7K through user engagement while learning how to advertise.",
  },
  {
    id: "web-coding",
    kicker: "UCR Bootcamp · Team Projects",
    title: "Student Web & Coding Projects",
    tagsShort: ["JavaScript", "HTML/CSS", "Team Projects"],
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
    descShort:
      "Built responsive pages and small apps for two client-style projects at the UCR coding bootcamp, working with a team from planning to shipped site.",
    descLong:
      "Built responsive web pages, small applications, and team-based websites for two client-style projects using core web tools. Worked with classmates to organize tasks, troubleshoot code, communicate progress, and ship finished sites.",
  },
  {
    id: "robotics",
    kicker: "California Baptist University",
    title: "Campus Robotics",
    titleLong: "Campus Robotics & Team Projects",
    tagsShort: ["Robotics", "LEGO Mechanics", "Teamwork"],
    tags: ["Robotics", "LEGO Mechanics", "Programming Logic", "Teamwork"],
    descShort:
      "Collaborated on small robotics builds at CBU — mechanical design, programming logic, and competition-day problem solving.",
    descLong:
      "Collaborated on small robotics builds using simple programming, LEGO-based mechanical design, and testing. Contributed ideas, helped adjust designs during challenges, and supported the team during competition-style events.",
  },
];

// ---- Highlights (Projects page) ----------------------------------------
export const highlights = [
  { title: "1st & 2nd Place", sub: "CBU Freshman robotics competitions" },
  { title: "Shipped & Promoted Games", sub: "Built and grew online game projects" },
  { title: "Two Client Websites", sub: "Helped build full sites end-to-end" },
  { title: "First Degree Black Belt", sub: "ATA Taekwondo, earned at age 14" },
];

// ---- Makullveny — current flagship (public landing page, private source) --
export const makullveny = {
  title: "Makullveny",
  thumbnail: Makullveny,
  kicker: "TDG · Desktop Study App",
  descShort:
    "A local-first desktop study app in active development — a calm dashboard, a notes “Library Desk,” ambient study atmosphere, and student tools, all in one focused place.",
  desc: "A local-first desktop study assistant in active development. It opens on a calm dashboard, then gives students focused spaces for notes, tools, ambience, and study music. The “Library Desk” lets you build books, bookshelves, and pages for classes and journals — with typed text, drawings, and imported images — while ambient sounds, a lofi radio, and warm cabin themes keep long study sessions calm. Notes stay on your computer by default.",
  tagsShort: ["Desktop App", "Local-first", "Study Tools"],
  tags: ["Desktop App", "Local-first", "Notes & Study Tools", "In development"],
  live: "https://tdg-org.github.io/makullveny-site/",
  liveLabel: "View site",
  privateSource: true,
};

// ---- Individual coding projects (Projects page grid) -------------------
// Real screenshots + repos. "Live" links point only at demos still hosted on
// GitHub Pages; the old Heroku demos went offline when free dynos ended, so
// those cards show the repo only (no dead link).
export const codingProjects = [
  {
    title: "POP Umai",
    thumbnail: POPUmai,
    desc: "Collaborative full-stack app for a local business owner and her company, POP Umai. Turned the client's ideas into reality, with authentication guarding an admin dashboard for managing all her events.",
    tags: ["Node.js", "Express", "Handlebars", "MySQL", "Sequelize", "Bootstrap"],
    repo: "https://github.com/PreDevz/POP-Umai",
  },
  {
    title: "Platello",
    thumbnail: Platello,
    desc: "Cheers to a new dish! A site that recommends foods and drinks based on your preferences, powered by the Spoonacular and CocktailDB APIs.",
    tags: ["HTML", "CSS", "JavaScript", "Materialize", "jQuery", "API"],
    repo: "https://github.com/PreDevz/Platello",
    live: "https://predevz.github.io/Platello/",
  },
  {
    title: "N8 Tech Blog",
    thumbnail: TechBlog,
    desc: "Full-stack CMS-style blog where developers can create posts and comment on others'. Each user has a dashboard to view, update, and delete their own posts and comments.",
    tags: ["Node.js", "Express", "Handlebars", "MySQL", "Sequelize", "Bootstrap"],
    repo: "https://github.com/TDGNate/Tech-Blog",
  },
  {
    title: "E-Commerce Backend",
    thumbnail: EComBackend,
    desc: "A backend for an e-commerce site with a full REST API — routes to read all data, read specific records, create, update, and delete items from the database.",
    tags: ["Node.js", "Express", "API", "MySQL", "Sequelize"],
    repo: "https://github.com/TDGNate/E-Commerce-Backend",
  },
  {
    title: "Weather App",
    thumbnail: WeatherApp,
    desc: "Search any city for its temperature, wind speed, humidity, and UV index, plus a 5-day forecast. Your last 8 searches are saved and clickable to look up again.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    repo: "https://github.com/TDGNate/Weather-site",
    live: "https://tdgnate.github.io/Weather-site/",
  },
  {
    title: "Quiz Code",
    thumbnail: QuizCode,
    desc: "A quick timed coding quiz that tests your front-end knowledge and tracks your score. Save your initials to the local leaderboard when the game ends.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/TDGNate/Quiz-Code",
    live: "https://tdgnate.github.io/Quiz-Code/",
  },
  {
    title: "Team Profile Generator",
    thumbnail: TeamGenerator,
    desc: "A command-line app that takes a team's details and generates an HTML page displaying each member's name, role, id, email, and office number or GitHub.",
    tags: ["HTML", "CSS", "Node.js", "Bootstrap", "npm"],
    repo: "https://github.com/TDGNate/Team-profile-generator",
  },
  {
    title: "README Generator",
    thumbnail: ReadMeGen,
    desc: "Quickly create a polished, high-quality README from the command line — title, description, usage, and an optional auto-linked table of contents.",
    tags: ["JavaScript", "npm", "Node.js"],
    repo: "https://github.com/TDGNate/Readme-Generator",
  },
  {
    title: "Note Taker",
    thumbnail: NoteTaker,
    desc: "An app that saves your notes (title + body) to a JSON file, with an Express backend handling the reads and writes.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    repo: "https://github.com/TDGNate/Note-Taker",
  },
  {
    title: "Password Generator",
    thumbnail: PassGen,
    desc: "Generate a password on your terms — prompts let you include uppercase, lowercase, numbers, and special characters at the length you choose.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/TDGNate/Nates-password-generation",
    live: "https://tdgnate.github.io/Nates-password-generation/",
  },
  {
    title: "My Todos",
    thumbnail: MyTodos,
    desc: "A to-do app that stores your list in local storage for your next visit. Remove single items with the trash icon or clear everything at once.",
    tags: ["HTML", "CSS", "JavaScript", "Font Awesome"],
    repo: "https://github.com/TDGNate/My-Todos",
    live: "https://tdgnate.github.io/My-Todos/",
  },
  {
    title: "Calendar App",
    thumbnail: CalenderApp,
    desc: "A simple work-day scheduler that saves each time block's notes to local storage and color-codes blocks by whether they're in the past, present, or future.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    repo: "https://github.com/TDGNate/Calender-App",
    live: "https://tdgnate.github.io/Calender-App/",
  },
  {
    title: "Rock Paper Scissors",
    thumbnail: RpsGame,
    desc: "My first browser game — rock paper scissors against a bot, with smoothly animated elements and a background that shifts color on a win or loss.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/TDGNate/Rock-Paper-Scissors",
    live: "https://tdgnate.github.io/Rock-Paper-Scissors/",
  },
];

// ---- Home "Selected Projects" (categories + featured real projects) -----
const _n8 = codingProjects.find((p) => p.title === "N8 Tech Blog");

const _gameDev = featuredProjects[0]; // Independent Game Development

export const homeFeatured = [
  {
    key: "makullveny",
    title: makullveny.title,
    thumbnail: makullveny.thumbnail,
    bannerLabel: null,
    desc: makullveny.descShort,
    tags: makullveny.tagsShort,
    live: makullveny.live,
    liveLabel: makullveny.liveLabel,
  },
  {
    key: "n8",
    title: _n8.title,
    thumbnail: _n8.thumbnail,
    bannerLabel: null,
    desc: _n8.desc,
    tags: _n8.tags.slice(0, 3),
    repo: _n8.repo,
  },
  {
    key: _gameDev.id,
    title: _gameDev.title,
    thumbnail: null,
    bannerLabel: _gameDev.kicker,
    desc: _gameDev.descShort,
    tags: _gameDev.tagsShort,
  },
];

// ---- Projects page: every real project as a card (flagship first) -------
export const projectsPageProjects = [makullveny, ...codingProjects];

// ---- Contact / footer ---------------------------------------------------
export const RESUME_URL = `${process.env.PUBLIC_URL}/Christian-McIlvenny-Resume.pdf`;

export const contactLinks = {
  email: "mailto:itsnzte@gmail.com",
  linkedin: "https://www.linkedin.com/in/christian-mcilvenny",
  github: "https://github.com/TDGNate",
  codepen: "https://codepen.io/tdgnate",
};

export const FAITH_LINE = "Jesus gave his life for us; our souls belong to him.";
export const COPYRIGHT = "© 2026 Christian McIlvenny · natemci.com";
