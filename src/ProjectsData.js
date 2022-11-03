// images for projects
import { QuizCode, TeamGenerator, NoteTaker, EComBackend, ReadMeGen, WeatherApp, TechBlog, PassGen, MyTodos, CalenderApp, RpsGame, Platello, POPUmai } from "./gifs/projects";

// Icons for projects 
import { Node, Javascript, MySQL, Heroku, Bootstrap, Express, Handlebars, Sequelize, SweetAlert, FontAwesome, jQuery, Html, Css3, API, NPM, Matcss } from "./imgs/skills";

const ProjectsData = [

  /* E-Commerce Backend */
  {
    cardTitle: "E-Commerce Backend",
    cardThumbnail: EComBackend,
    cardDesc: "A backend for an e-commerce site that users can make API requests. Created routes that can get all data, get certain data, add new item, update item, and completely remove an item from the database.",
    cardTechStack: [
      { tech: Node, link: "https://nodejs.org/en/" },
      { tech: Express, link: "https://expressjs.com/", invert: true },
      { tech: API, link: "https://en.wikipedia.org/wiki/API" },
      { tech: MySQL, link: "https://www.mysql.com/" },
      { tech: Sequelize, link: "https://sequelize.org/" }
    ],
    cardBtns: [
      { repo: "https://github.com/TDGNate/E-Commerce-Backend" }
    ]
  },

  /* Team Profile Generator */
  {
    cardTitle: "Team Profile Generator",
    cardThumbnail: TeamGenerator,
    cardDesc: "Command line application that lets a user input data for their team which will generator an HTML page that displays each team member's name, role, id, email, and office number OR github depending on their role.",
    cardTechStack: [
      { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
      { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
      { tech: Node, link: "https://nodejs.org/en/" },
      { tech: Bootstrap, link: "https://getbootstrap.com/" },
      { tech: NPM, link: "https://www.npmjs.com/package/inquirer" }
    ],
    cardBtns: [
      { repo: "https://github.com/TDGNate/Team-profile-generator" }
    ]
  },

  /* Quiz Game  */
  {
    cardTitle: "Quiz Code",
    cardThumbnail: QuizCode,
    cardDesc: "A quick coding quiz to test your frontend knowledge! A timer is set and a score is being tracked. When the game has ended, you can save your score by adding your initials and clicking the save button. Then the score will appear on your local leaderboard.",
    cardTechStack: [
      { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
      { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
      { tech: Javascript, link: "https://www.javascript.com/" },
    ],
    cardBtns: [
      { repo: "https://github.com/TDGNate/Quiz-Code" },
      { deployed: "https://tdgnate.github.io/Quiz-Code/" }
    ]
  },
]

export default ProjectsData;