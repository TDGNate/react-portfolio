import React from 'react';

// Components 
import ProjectCard from "../ProjectCard";

// images for projects
import { QuizCode, TeamGenerator, NoteTaker, EComBackend, ReadMeGen, WeatherApp, TechBlog, PassGen, MyTodos, CalenderApp, RpsGame } from "../../gifs/projects";

// Icons for projects 
import { Node, Javascript, MySQL, Heroku, Bootstrap, Express, Handlebars, Sequelize, SweetAlert, FontAwesome, jQuery, Html, Css3, API, NPM } from "../../imgs/skills";

import "../../styles/moreProjects.css";

const MoreProjects = () => {
  return (
    <div id="moreProjects" className="more-projects-page">
      
      <div className="more-projects-filter"></div>

      <div className="container">
        <div className="more-projects-empty-space"></div>
        <h1>My Projects</h1>
        <p>Here's all my backend, frontend, and full stack projects :)</p>

        <div className="more-projects-project-container">

          {/* E-Commerce Backend */}
          <ProjectCard
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
          />

          {/* Team Profile Generator */}
          <ProjectCard
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
          />

          {/* Quiz Game  */}
          <ProjectCard
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
          />

          {/* Read Me Generator  */}
          <ProjectCard
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
          />
 
          {/* N8 Tech Blog */}
          <ProjectCard
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
          />

          {/* Weather App */}
          <ProjectCard
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
          />

          {/* Password Generator */}
          <ProjectCard
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
          />

          {/* My Todos */}
          <ProjectCard
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

          {/* Calender App */}

          <div className="one-project">
            <img src={CalenderApp} alt="Note Taker" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">Calender App</h3>
              <p className="one-project-text">
              A simple calendar app for scheduling your work day! It saves messages in each block event to localstorage. And depending on the time of day, each block will be color coordinated to show if it's in the future, past, or present.
              </p>
                <h4>Stack</h4>
                <div className="one-project-techs">

                  {/* HTML */}
                  <div className="one-project-tech">
                    <a href="https://en.wikipedia.org/wiki/HTML" target="blank" className="skill-anchor">
                      <img src={Html} alt="Html icon" className="skill-img" />
                      </a>
                  </div>

                  {/* CSS */}
                  <div className="one-project-tech">
                    <a href="https://en.wikipedia.org/wiki/CSS" target="blank" className="skill-anchor">
                      <img src={Css3} alt="Css3 icon" className="skill-img" />
                      </a>
                  </div>
                
                  {/* javascript */}
                  <div className="one-project-tech">
                    <a href="https://www.javascript.com/" target="blank" className="skill-anchor">
                    <img src={Javascript} alt="javascript icon" className="skill-img" />
                    </a>
                </div>
                
                  {/* jQuery */}
                  <div className="one-project-tech">
                    <a href="https://jquery.com/" target="blank" className="skill-anchor">
                    <img src={jQuery} alt="jQuery icon" className="skill-img" />
                    </a>
                  </div>

                  </div>
              <hr className="one-project-hr"/>
              <div className="one-project-btns">
                <a href="https://tdgnate.github.io/Calender-App/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                <a href="https://github.com/TDGNate/Calender-App" target="blank" className="project-prime-btn github-btn">GITHUB</a>
              </div>
            </div>
          </div>

          {/* Rock Paper Scissors */}

          <div className="one-project">
            <img src={RpsGame} alt="Rock paper Scissors Game" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">Rock Paper Scissors</h3>
              <p className="one-project-text">
              My first website game of rock paper scissors vs a bot. I don't think I have to explain how the game works, but each element is smoothly animated and styled. The background color changes based on if the user wins or losses.
              </p>
                <h4>Stack</h4>
                <div className="one-project-techs">

                  {/* HTML */}
                  <div className="one-project-tech">
                    <a href="https://en.wikipedia.org/wiki/HTML" target="blank" className="skill-anchor">
                      <img src={Html} alt="Html icon" className="skill-img" />
                      </a>
                  </div>

                  {/* CSS */}
                  <div className="one-project-tech">
                    <a href="https://en.wikipedia.org/wiki/CSS" target="blank" className="skill-anchor">
                      <img src={Css3} alt="Css3 icon" className="skill-img" />
                      </a>
                  </div>
                
                  {/* javascript */}
                  <div className="one-project-tech">
                    <a href="https://www.javascript.com/" target="blank" className="skill-anchor">
                    <img src={Javascript} alt="javascript icon" className="skill-img" />
                    </a>
                </div>

                  </div>
              <hr className="one-project-hr"/>
              <div className="one-project-btns">
                <a href="https://tdgnate.github.io/Rock-Paper-Scissors/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                <a href="https://github.com/TDGNate/Rock-Paper-Scissors" target="blank" className="project-prime-btn github-btn">GITHUB</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default MoreProjects;