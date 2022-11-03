import React from 'react';

// Components 
import ProjectCard from "../ProjectCard";

// images for projects
import { QuizCode, TeamGenerator, NoteTaker, EComBackend, ReadMeGen, WeatherApp, TechBlog, PassGen, MyTodos, CalenderApp, RpsGame, Platello, POPUmai } from "../../gifs/projects";

// Icons for projects 
import { Node, Javascript, MySQL, Heroku, Bootstrap, Express, Handlebars, Sequelize, SweetAlert, FontAwesome, jQuery, Html, Css3, API, NPM, Matcss } from "../../imgs/skills";

// Styles 
import "../../styles/moreProjects.css";

// Data 
import ProjectsData from "../../ProjectsData";

const MoreProjects = () => {
  return (
    <div id="moreProjects" className="more-projects-page">
      
      <div className="more-projects-filter"></div>

      <div className="container">
        <div className="more-projects-empty-space"></div>
        <h1>My Projects</h1>
        <p className="more-projects-sub-text">Here's all my backend, frontend, and full stack projects :)</p>

        <div className="more-projects-project-container">

          {ProjectsData.map((item, index) => {
            return (
              <ProjectCard
              key={index}
              title={item.cardTitle}
              thumbNail={item.cardThumbnail}
              description={item.cardDesc}
              techStack={item.cardTechStack}
              btns={item.cardBtns}
              />
            )
          })}

          {/* E-Commerce Backend */}
          {/* <ProjectCard
            title="E-Commerce Backend"
            thumbNail={EComBackend}
            description="A backend for an e-commerce site that users can make API requests. Created routes that can get all data, get certain data, add new item, update item, and completely remove an item from the database."
            techStack={[
              { tech: Node, link: "https://nodejs.org/en/" },
              { tech: Express, link: "https://expressjs.com/", invert: true },
              { tech: API, link: "https://en.wikipedia.org/wiki/API" },
              { tech: MySQL, link: "https://www.mysql.com/" },
              { tech: Sequelize, link: "https://sequelize.org/" }
            ]}
            btns={[
              {repo: "https://github.com/TDGNate/E-Commerce-Backend" }
            ]}
          /> */}

          {/* Team Profile Generator */}
          {/* <ProjectCard
            title="Team Profile Generator"
            thumbNail={TeamGenerator}
            description="Command line application that lets a user input data for their team which will generator an HTML page that displays each team member's name, role, id, email, and office number OR github depending on their role."
            techStack={[
              { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
              { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
              { tech: Node, link: "https://nodejs.org/en/" },
              { tech: Bootstrap, link: "https://getbootstrap.com/" },
              { tech: NPM, link: "https://www.npmjs.com/package/inquirer" }
            ]}
            btns={[
              {repo: "https://github.com/TDGNate/Team-profile-generator" }
            ]}
          /> */}

          {/* Quiz Game  */}
          {/* <ProjectCard
            title="Quiz Code"
            thumbNail={QuizCode}
            description="A quick coding quiz to test your frontend knowledge! A timer is set and a score is being tracked. When the game has ended, you can save your score by adding your initials and clicking the save button. Then the score will appear on your local leaderboard."
            techStack={[
              { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
              { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
              { tech: Javascript, link: "https://www.javascript.com/" },
            ]}
            btns={[
              { repo: "https://github.com/TDGNate/Quiz-Code" },
              { deployed: "https://tdgnate.github.io/Quiz-Code/" }
            ]}
          /> */}

          {/* Read Me Generator  */}
          {/* <ProjectCard
            title="README Generator"
            thumbNail={ReadMeGen}
            description="An app that makes it easy for users to directly create a high quality, polished, README markdown file. Just needs their project's title, description, Usage, etc. The user can choose if they want a Table of Contents, that has everything linked up for each section."
            techStack={[
              { tech: Javascript, link: "https://www.javascript.com/" },
              { tech: NPM, link: "https://www.npmjs.com/package/inquirer" },
              { tech: Node, link: "https://nodejs.org/en/" }
            ]}
            btns={[
              { repo: "https://github.com/TDGNate/Readme-Generator" }
            ]}
          /> */}
 
          {/* N8 Tech Blog */}
          {/* <ProjectCard
            title="N8 Tech Blog"
            thumbNail={TechBlog}
            description="Full-stack CMS-style blog site where developers can create posts and add comments on others. They can also view all their posts/comments and have access to update/delete them from their dashboard."
            techStack={[
              { tech: Node, link: "https://nodejs.org/en/" },
              { tech: Express, link: "https://expressjs.com/", invert: true },
              { tech: Handlebars, link: "https://handlebarsjs.com/", invert: true },
              { tech: MySQL, link: "https://www.mysql.com/" },
              { tech: Sequelize, link: "https://sequelize.org/" },
              { tech: Bootstrap, link: "https://getbootstrap.com/" },
              { tech: SweetAlert, link: "https://sweetalert.js.org/guides/" },
              { tech: FontAwesome, link: "https://fontawesome.com/" },
              { tech: Heroku, link: "https://www.heroku.com/" }
            ]}
            btns={[
              { repo: "https://github.com/TDGNate/Tech-Blog" },
              { deployed: "https://techer-blogger.herokuapp.com/" }
            ]}
          /> */}

          {/* Weather App */}
          {/* <ProjectCard
            title="Weather App"
            thumbNail={WeatherApp}
            description="Website that lets you search up cities and returns their temperature, wind speed, humidity, and UV index. And it also displays 5 more cards showing the 5 day forecast. Their last 8 searches will be saved in their history, and are clickable to be research again."
            techStack={[
              { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
              { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
              { tech: Javascript, link: "https://www.javascript.com/" },
              { tech: API, link: "https://en.wikipedia.org/wiki/API" }
            ]}
            btns={[
              { repo: "https://github.com/TDGNate/Weather-site" },
              { deployed: "https://tdgnate.github.io/Weather-site/" }
            ]}
          /> */}

          {/* Password Generator */}
          {/* <ProjectCard
            title="Password Generator"
            thumbNail={PassGen}
            description="Website that allows users to choose how they want their password to be generated. Multiple prompts will appear asking if they'd like to include Upper Case letters, Lower Case letters, Numbers, and or Special characters."
            techStack={[
              { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
              { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
              { tech: Javascript, link: "https://www.javascript.com/" }
            ]}
            btns={[
              { repo: "https://github.com/TDGNate/Nates-password-generation" },
              { deployed: "https://tdgnate.github.io/Nates-password-generation/" }
            ]}
          /> */}

          {/* My Todos */}
          {/* <ProjectCard
            title="My Todos"
            thumbNail={MyTodos}
            description="A website that stores your todos in local storage for your next visit! The user can remove certain Todos by clicking the trash bin, or clear all their todos at once by clicking the clear button on the bottom."
            techStack={[
              { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
              { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
              { tech: Javascript, link: "https://www.javascript.com/" },
              { tech: FontAwesome, link: "https://fontawesome.com/" }
            ]}
            btns={[
              { repo: "https://github.com/TDGNate/My-Todos" },
              { deployed: "https://tdgnate.github.io/My-Todos/" }
            ]}
          /> */}

          {/* Platello */}
          <ProjectCard
            title="Platello"
            thumbNail={Platello}
            description="Cheers to a new dish! Website that recommends users foods and drinks based on their preferences. Powered by the Spoonacular and the CocktailDB APIs."
            techStack={[
              { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
              { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
              { tech: Javascript, link: "https://www.javascript.com/" },
              { tech: Matcss, link: "https://materializecss.com/" },
              { tech: jQuery, link: "https://jquery.com/" },
              { tech: API, link: "https://en.wikipedia.org/wiki/API" }
            ]}
            btns={[
              { repo: "https://github.com/PreDevz/Platello" },
              { deployed: "https://predevz.github.io/Platello/" }
            ]}
          />

          {/* Note Taker */}
          <ProjectCard
            title="Note Taker"
            thumbNail={NoteTaker}
            description="Application that allows users to store their notes in a json file with their title and paragraph. Deployed on Heroku and powered by Express for the backend."
            techStack={[
              { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
              { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
              { tech: Javascript, link: "https://www.javascript.com/" },
              { tech: Node, link: "https://nodejs.org/en/" },
              { tech: Express, link: "https://expressjs.com/", invert: true }
            ]}
            btns={[
              { repo: "https://github.com/TDGNate/Note-Taker" },
              { deployed: "https://mighty-ridge-88200.herokuapp.com/" }
            ]}
          />

          {/* POP Umai */}
          <ProjectCard
            title="POP Umai"
            thumbNail={POPUmai}
            description="Collaborative full-stack application for a local business owner and her company, POP Umai. Took our Clients ideas and desires, and made it reality. Added authentication for accessing the admin dashboard to manage all her events."
            techStack={[
              { tech: Node, link: "https://nodejs.org/en/" },
              { tech: Express, link: "https://expressjs.com/", invert: true },
              { tech: Handlebars, link: "https://handlebarsjs.com/", invert: true },
              { tech: MySQL, link: "https://www.mysql.com/" },
              { tech: Sequelize, link: "https://sequelize.org/" },
              { tech: Bootstrap, link: "https://getbootstrap.com/" },
              { tech: SweetAlert, link: "https://sweetalert.js.org/guides/" },
              { tech: Heroku, link: "https://www.heroku.com/" }
            ]}
            btns={[
              { repo: "https://github.com/PreDevz/POP-Umai" },
              { deployed: "https://pop-umai.herokuapp.com/" }
            ]}
          />

          {/* Calender App */}
          <ProjectCard
            title="Calender App"
            thumbNail={CalenderApp}
            description="A simple calendar app for scheduling your work day! It saves messages in each block event to localstorage. And depending on the time of day, each block will be color coordinated to show if it's in the future, past, or present."
            techStack={[
              { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
              { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
              { tech: Javascript, link: "https://www.javascript.com/" },
              { tech: jQuery, link: "https://jquery.com/" }
            ]}
            btns={[
              { repo: "https://github.com/TDGNate/Calender-App" },
              { deployed: "https://tdgnate.github.io/Calender-App/" }
            ]}
          />

          {/* Rock Paper Scissors */}
          <ProjectCard
            title="Rock Paper Scissors"
            thumbNail={RpsGame}
            description=" My first website game of rock paper scissors vs a bot. I don't think I have to explain how the game works, but each element is smoothly animated and styled. The background color changes based on if the user wins or losses."
            techStack={[
              { tech: Html, link: "https://en.wikipedia.org/wiki/HTML" },
              { tech: Css3, link: "https://en.wikipedia.org/wiki/CSS" },
              { tech: Javascript, link: "https://www.javascript.com/" }
            ]}
            btns={[
              { repo: "https://github.com/TDGNate/Rock-Paper-Scissors" },
              { deployed: "https://tdgnate.github.io/Rock-Paper-Scissors/" }
            ]}
          />
          
        </div>
      </div>
    </div>
  )
}

export default MoreProjects;