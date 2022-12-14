// Data for all my projects 

// images for projects
import { QuizCode, TeamGenerator, NoteTaker, EComBackend, ReadMeGen, WeatherApp, TechBlog, PassGen, MyTodos, CalenderApp, RpsGame, Platello, POPUmai } from "./gifs/projects";

// Icons for projects 
import { Node, Javascript, MySQL, Heroku, Bootstrap, Express, Handlebars, Sequelize, SweetAlert, FontAwesome, jQuery, Html, Css3, API, NPM, Matcss } from "./imgs/skills";

// Projects Array 
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

  /* Read Me Generator  */

  {
    cardTitle: "README Generator",
    cardThumbnail: ReadMeGen,
    cardDesc: "An app that makes it easy for users to directly create a high quality, polished, README markdown file. Just needs their project's title, description, Usage, etc. The user can choose if they want a Table of Contents, that has everything linked up for each section.",
    cardTechStack: [
      { tech: Javascript, link: "https://www.javascript.com/" },
      { tech: NPM, link: "https://www.npmjs.com/package/inquirer" },
      { tech: Node, link: "https://nodejs.org/en/" }
    ],
    cardBtns: [
      { repo: "https://github.com/TDGNate/Readme-Generator" }
    ]
  },

  /* N8 Tech Blog */

  {
    cardTitle: "N8 Tech Blog",
    cardThumbnail: TechBlog,
    cardDesc: "Full-stack CMS-style blog site where developers can create posts and add comments on others. They can also view all their posts/comments and have access to update/delete them from their dashboard.",
    cardTechStack: [
      { tech: Node, link: "https://nodejs.org/en/" },
      { tech: Express, link: "https://expressjs.com/", invert: true },
      { tech: Handlebars, link: "https://handlebarsjs.com/", invert: true },
      { tech: MySQL, link: "https://www.mysql.com/" },
      { tech: Sequelize, link: "https://sequelize.org/" },
      { tech: Bootstrap, link: "https://getbootstrap.com/" },
      { tech: SweetAlert, link: "https://sweetalert.js.org/guides/" },
      { tech: FontAwesome, link: "https://fontawesome.com/" },
      { tech: Heroku, link: "https://www.heroku.com/" }
    ],
    cardBtns: [
      { repo: "https://github.com/TDGNate/Tech-Blog" },
      { deployed: "https://techer-blogger.herokuapp.com/" }
    ]
  },

  /* Weather App */

  {
    cardTitle: "Weather App",
    cardThumbnail: WeatherApp,
    cardDesc: "Website that lets you search up cities and returns their temperature, wind speed, humidity, and UV index. And it also displays 5 more cards showing the 5 day forecast. Their last 8 searches will be saved in their history, and are clickable to be research again.",
    cardTechStack: [
      { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
      { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
      { tech: Javascript, link: "https://www.javascript.com/" },
      { tech: API, link: "https://en.wikipedia.org/wiki/API" }
    ],
    cardBtns: [
      { repo: "https://github.com/TDGNate/Weather-site" },
      { deployed: "https://tdgnate.github.io/Weather-site/" }
    ]
  },

  /* Password Generator */

  {
    cardTitle: "Password Generator",
    cardThumbnail: PassGen,
    cardDesc: "Website that allows users to choose how they want their password to be generated. Multiple prompts will appear asking if they'd like to include Upper Case letters, Lower Case letters, Numbers, and or Special characters.",
    cardTechStack: [
      { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
      { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
      { tech: Javascript, link: "https://www.javascript.com/" }
    ],
    cardBtns: [
      { repo: "https://github.com/TDGNate/Nates-password-generation" },
      { deployed: "https://tdgnate.github.io/Nates-password-generation/" }
    ]
  },

  /* My Todos */

  {
    cardTitle: "My Todos",
    cardThumbnail: MyTodos,
    cardDesc: "A website that stores your todos in local storage for your next visit! The user can remove certain Todos by clicking the trash bin, or clear all their todos at once by clicking the clear button on the bottom.",
    cardTechStack: [
      { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
      { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
      { tech: Javascript, link: "https://www.javascript.com/" },
      { tech: FontAwesome, link: "https://fontawesome.com/" }
    ],
    cardBtns: [
      { repo: "https://github.com/TDGNate/My-Todos" },
      { deployed: "https://tdgnate.github.io/My-Todos/" }
    ]
  },

  /* Platello */

  {
    cardTitle: "Platello",
    cardThumbnail: Platello,
    cardDesc: "Cheers to a new dish! Website that recommends users foods and drinks based on their preferences. Powered by the Spoonacular and the CocktailDB APIs.",
    cardTechStack: [
      { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
      { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
      { tech: Javascript, link: "https://www.javascript.com/" },
      { tech: Matcss, link: "https://materializecss.com/" },
      { tech: jQuery, link: "https://jquery.com/" },
      { tech: API, link: "https://en.wikipedia.org/wiki/API" }
    ],
    cardBtns: [
      { repo: "https://github.com/PreDevz/Platello" },
      { deployed: "https://predevz.github.io/Platello/" }
    ]
  },

  /* Note Taker */

  {
    cardTitle: "Note Taker",
    cardThumbnail: NoteTaker,
    cardDesc: "Application that allows users to store their notes in a json file with their title and paragraph. Deployed on Heroku and powered by Express for the backend.",
    cardTechStack: [
      { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
      { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
      { tech: Javascript, link: "https://www.javascript.com/" },
      { tech: Node, link: "https://nodejs.org/en/" },
      { tech: Express, link: "https://expressjs.com/", invert: true }
    ],
    cardBtns: [
      { repo: "https://github.com/TDGNate/Note-Taker" },
      { deployed: "https://mighty-ridge-88200.herokuapp.com/" }
    ]
  },

  /* POP Umai */

  {
    cardTitle: "POP Umai",
    cardThumbnail: POPUmai,
    cardDesc: "Collaborative full-stack application for a local business owner and her company, POP Umai. Took our Clients ideas and desires, and made it reality. Added authentication for accessing the admin dashboard to manage all her events.",
    cardTechStack: [
      { tech: Node, link: "https://nodejs.org/en/" },
      { tech: Express, link: "https://expressjs.com/", invert: true },
      { tech: Handlebars, link: "https://handlebarsjs.com/", invert: true },
      { tech: MySQL, link: "https://www.mysql.com/" },
      { tech: Sequelize, link: "https://sequelize.org/" },
      { tech: Bootstrap, link: "https://getbootstrap.com/" },
      { tech: SweetAlert, link: "https://sweetalert.js.org/guides/" },
      { tech: Heroku, link: "https://www.heroku.com/" }
    ],
    cardBtns: [
      { repo: "https://github.com/PreDevz/POP-Umai" },
      { deployed: "https://pop-umai.herokuapp.com/" }
    ]
  },

  /* Calender App */

  {
    cardTitle: "Calender App",
    cardThumbnail: CalenderApp,
    cardDesc: "A simple calendar app for scheduling your work day! It saves messages in each block event to localstorage. And depending on the time of day, each block will be color coordinated to show if it's in the future, past, or present.",
    cardTechStack: [
      { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
      { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
      { tech: Javascript, link: "https://www.javascript.com/" },
      { tech: jQuery, link: "https://jquery.com/" }
    ],
    cardBtns: [
      { repo: "https://github.com/TDGNate/Calender-App" },
      { deployed: "https://tdgnate.github.io/Calender-App/" }
    ]
  },

  /* Rock Paper Scissors */

  {
    cardTitle: "Rock Paper Scissors",
    cardThumbnail: RpsGame,
    cardDesc: "My first website game of rock paper scissors vs a bot. I don't think I have to explain how the game works, but each element is smoothly animated and styled. The background color changes based on if the user wins or losses.",
    cardTechStack: [
      { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
      { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
      { tech: Javascript, link: "https://www.javascript.com/" }
    ],
    cardBtns: [
      { repo: "https://github.com/TDGNate/Rock-Paper-Scissors" },
      { deployed: "https://tdgnate.github.io/Rock-Paper-Scissors/" }
    ]
  },
]

export default ProjectsData;