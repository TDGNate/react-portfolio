import React from 'react'

// images for projects
import { QuizCode, TeamGenerator, NoteTaker, EComBackend, ReadMeGen, WeatherApp, TechBlog } from "../../gifs/projects"

// Icons for projects 
import { Node, Javascript, MySQL, Heroku, Bootstrap, Express, Handlebars, Sequelize, SweetAlert, FontAwesome, Matcss, jQuery, Html, Css3, API, NPM } from "../../imgs/skills"

import "../../styles/moreProjects.css"

const MoreProjects = () => {
  return (
    <div id="moreProjects" className="more-projects-page">
      
      <div className="more-projects-filter"></div>

      <div className="container">
        <div className="more-projects-empty-space"></div>
        <h1>My Projects</h1>
        <p>Here are all my backend, frontend, and full stack projects :)</p>

        <div className="more-projects-project-container">

            {/* E-Commerce Backend */}

            <div className="one-project">
            <img src={EComBackend} alt="E-Commerce Backend Taker" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">E-Commerce Backend</h3>
              <p className="one-project-text">
                A backend for an e-commerce site that users can make API requests. Created routes that can get all data, get certain data, add new item, update item, and completely remove an item from the database.
              </p>
                <h4>Stack</h4>
                <div className="one-project-techs">

                  {/* Node */}
                  <div className="one-project-tech">
                    <a href="https://nodejs.org/en/" target="blank" className="skill-anchor">
                      <img src={Node} alt="Node icon" className="skill-img" />
                      </a>
                 </div>

                  {/* Express */}
                  <div className="one-project-tech">
                    <a href="https://expressjs.com/" target="blank" className="skill-anchor">
                      <img src={Express} alt="Express icon" className="skill-img invert" />
                      </a>
                 </div>

                  {/* API */}
                  <div className="one-project-tech">
                    <a href="https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm" target="blank" className="skill-anchor">
                      <img src={API} alt="API icon" className="skill-img" />
                      </a>
                 </div>

                  {/* MySQL */}
                  <div className="one-project-tech">
                    <a href="https://www.mysql.com/" target="blank" className="skill-anchor">
                      <img src={MySQL} alt="MySQL icon" className="skill-img" />
                      </a>
                 </div>

                  {/* Sequelize */}
                  <div className="one-project-tech">
                    <a href="https://sequelize.org/" target="blank" className="skill-anchor">
                      <img src={Sequelize} alt="Sequelize icon" className="skill-img" />
                      </a>
                 </div>

               </div>
              <hr className="one-project-hr"/>
              <div className="one-project-btns">
                <a href="https://github.com/TDGNate/E-Commerce-Backend" target="blank" className="project-prime-btn github-btn">GITHUB</a>
              </div>
            </div>
          </div>

          {/* Team Profile Generator */}

          <div className="one-project">
            <img src={TeamGenerator} alt="" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">Team Profile Generator</h3>
              <p className="one-project-text">
                Command line application that lets a user input data for their team which will generator an HTML page that displays each team member's name, role, id, email, and office number OR github depending on their role.
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

                  {/* Node */}
                  <div className="one-project-tech">
                    <a href="https://nodejs.org/en/" target="blank" className="skill-anchor">
                      <img src={Node} alt="Node icon" className="skill-img" />
                      </a>
                 </div>
                
                  {/* Bootstrap */}
                  <div className="one-project-tech">
                    <a href="https://getbootstrap.com/" target="blank" className="skill-anchor">
                      <img src={Bootstrap} alt="Bootstrap icon" className="skill-img" />
                      </a>
                  </div>
                
                  {/* NPM */}
                  <div className="one-project-tech">
                    <a href="https://www.npmjs.com/package/inquirer" target="blank" className="skill-anchor">
                      <img src={NPM} alt="NPM icon" className="skill-img" />
                   </a>
                </div>

                  </div>
              <hr className="one-project-hr"/>
              <div className="one-project-btns">
                <a href="https://github.com/TDGNate/Team-profile-generator" target="blank" className="project-prime-btn github-btn">GITHUB</a>
              </div>
            </div>
          </div>

          {/* Quiz Game  */}

          <div className="one-project">
            <img src={QuizCode} alt="code quiz" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">Quiz Code</h3>
              <p className="one-project-text">
               A quick coding quiz to test your frontend knowledge! A timer is set and a score is being tracked. When the game has ended, you can save your score by adding your initials and clicking the save button. Then the score will appear on your local leaderboard.
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
                <a href="https://tdgnate.github.io/Quiz-Code/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                <a href="https://github.com/TDGNate/Quiz-Code" target="blank" className="project-prime-btn github-btn">GITHUB</a>
              </div>
            </div>
          </div>

          {/* Read Me Generator  */}

          <div className="one-project">
            <img src={ReadMeGen} alt="README Generator" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">README Generator</h3>
              <p className="one-project-text">
              An app that makes it easy for users to directly create a high quality, polished, README markdown file. Just needs their project's title, description, Usage, etc. The user can choose if they want a Table of Contents, that has everything linked up for each section.
              </p>
                <h4>Stack</h4>
              <div className="one-project-techs">

                {/* javascript */}
                <div className="one-project-tech">
                  <a href="https://www.javascript.com/" target="blank" className="skill-anchor">
                    <img src={Javascript} alt="javascript icon" className="skill-img" />
                    </a>
                </div>

                {/* NPM */}
                <div className="one-project-tech">
                  <a href="https://www.npmjs.com/package/inquirer" target="blank" className="skill-anchor">
                    <img src={NPM} alt="NPM icon" className="skill-img" />
                    </a>
                </div>

                {/* Node */}
                <div className="one-project-tech">
                  <a href="https://nodejs.org/en/" target="blank" className="skill-anchor">
                    <img src={Node} alt="Node icon" className="skill-img" />
                    </a>
                </div>

              </div>
              <hr className="one-project-hr"/>
              <div className="one-project-btns">
                <a href="https://tdgnate.github.io/Quiz-Code/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                <a href="https://github.com/TDGNate/Quiz-Code" target="blank" className="project-prime-btn github-btn">GITHUB</a>
              </div>
            </div>
          </div>

          {/* N8 Tech Blog */}

          <div className="one-project">
            <img src={TechBlog} alt="Tech blog" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">N8 Tech Blog</h3>
              <p className="one-project-text">
              Full-stack CMS-style blog site where developers can create posts and add comments on others. They can also view all their posts and comments and have access to update/delete their posts/comments from their dashboard.
              </p>
                <h4>Stack</h4>
              <div className="one-project-techs">

                {/* Node */}
                <div className="one-project-tech">
                  <a href="https://nodejs.org/en/" target="blank" className="skill-anchor">
                    <img src={Node} alt="Node icon" className="skill-img" />
                    </a>
                </div>

                {/* Express */}
                <div className="one-project-tech">
                  <a href="https://expressjs.com/" target="blank" className="skill-anchor">
                    <img src={Express} alt="Express icon" className="skill-img invert" />
                    </a>
                </div>

                {/* Handlebars */}
                <div className="one-project-tech">
                  <a href="https://handlebarsjs.com/" target="blank" className="skill-anchor">
                    <img src={Handlebars} alt="Handlebars icon" className="skill-img invert" />
                    </a>
                </div>
                
                {/* MySQL */}
                <div className="one-project-tech">
                  <a href="https://www.mysql.com/" target="blank" className="skill-anchor">
                    <img src={MySQL} alt="MySQL icon" className="skill-img" />
                    </a>
                </div>

                {/* Sequelize */}
                <div className="one-project-tech">
                  <a href="https://sequelize.org/" target="blank" className="skill-anchor">
                    <img src={Sequelize} alt="Sequelize icon" className="skill-img" />
                    </a>
                </div>

                {/* Bootstrap */}
                <div className="one-project-tech">
                  <a href="https://getbootstrap.com/" target="blank" className="skill-anchor">
                    <img src={Bootstrap} alt="Bootstrap icon" className="skill-img" />
                    </a>
                </div>

                {/* SweetAlert */}
                <div className="one-project-tech">
                  <a href="https://sweetalert.js.org/guides/" target="blank" className="skill-anchor">
                    <img src={SweetAlert} alt="SweetAlert icon" className="skill-img" />
                    </a>
                </div>

                {/* FontAwesome */}
                <div className="one-project-tech">
                  <a href="https://fontawesome.com/" target="blank" className="skill-anchor">
                    <img src={FontAwesome} alt="FontAwesome icon" className="skill-img" />
                    </a>
                </div>

                {/* Heroku */}
                <div className="one-project-tech">
                  <a href="https://www.heroku.com/" target="blank" className="skill-anchor">
                    <img src={Heroku} alt="Heroku icon" className="skill-img" />
                    </a>
                </div>

              </div>
              <hr className="one-project-hr"/>
              <div className="one-project-btns">
                <a href="https://techer-blogger.herokuapp.com/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                <a href="https://github.com/TDGNate/Tech-Blog" target="blank" className="project-prime-btn github-btn">GITHUB</a>
              </div>
            </div>
          </div>

          {/* Weather App */}

          <div className="one-project">
            <img src={WeatherApp} alt="Weather App Generator" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">Weather App</h3>
              <p className="one-project-text">
              Website that lets you search up cities and returns their temperature, wind speed, humidity, and UV index. And it also displays 5 more cards showing the 5 day forecast. Their last 8 searches will be saved in their history, and are clickable to be research again.
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
                
                {/* API */}
                <div className="one-project-tech">
                  <a href="https://en.wikipedia.org/wiki/API" target="blank" className="skill-anchor">
                    <img src={API} alt="API icon" className="skill-img" />
                    </a>
                </div>

              </div>
              <hr className="one-project-hr"/>
              <div className="one-project-btns">
                <a href="https://tdgnate.github.io/Weather-site/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                <a href="https://github.com/TDGNate/Weather-site" target="blank" className="project-prime-btn github-btn">GITHUB</a>
              </div>
            </div>
          </div>

          {/* Note Taker */}

          <div className="one-project">
            <img src={NoteTaker} alt="Note Taker" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">Note Taker</h3>
              <p className="one-project-text">
                Application that allows users to store their notes in a json file with their title and paragraph. Deployed on Heroku and powered by Express for the backend.
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

                  {/* Node */}
                  <div className="one-project-tech">
                    <a href="https://nodejs.org/en/" target="blank" className="skill-anchor">
                      <img src={Node} alt="Node icon" className="skill-img" />
                      </a>
                 </div>

                  {/* Express */}
                  <div className="one-project-tech">
                    <a href="https://expressjs.com/" target="blank" className="skill-anchor">
                      <img src={Express} alt="Express icon" className="skill-img invert" />
                      </a>
                 </div>

                  </div>
              <hr className="one-project-hr"/>
              <div className="one-project-btns">
                <a href="https://mighty-ridge-88200.herokuapp.com/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                <a href="https://github.com/TDGNate/Note-Taker" target="blank" className="project-prime-btn github-btn">GITHUB</a>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default MoreProjects