import React from 'react'


// images for projects
import { QuizCode, TeamGenerator, NoteTaker } from "../../gifs/projects"

// Icons for projects 
import { Node, Javascript, MySQL, Heroku, Bootstrap, Express, Handlebars, Sequelize, SweetAlert, FontAwesome, Matcss, jQuery, Html, Css3, API } from "../../imgs/skills"

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

          {/* Quiz Game  */}

          <div className="one-project">
            <img src={QuizCode} alt="code quiz" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">Quiz Code</h3>
              <p className="one-project-text">
               A quick coding quiz to test their frontend knowledge! A timer is set and score is being tracked. When the game has ended, users can save their score by adding their initials and clicking the save button. Their score will appear on the local leaderboard.
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

          {/* Team Profile Generator */}

          <div className="one-project">
            <img src={TeamGenerator} alt="" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">Team Profile Generator</h3>
              <p className="one-project-text">
                Command line application that lets a user to input data for their team which will generator a HTML page that displays each team member's name, role, id, email, and office number or github depending on their role.
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

                  </div>
              <hr className="one-project-hr"/>
              <div className="one-project-btns">
                <a href="https://github.com/TDGNate/Team-profile-generator" target="blank" className="project-prime-btn github-btn">GITHUB</a>
              </div>
            </div>
          </div>


        
          {/* Note Taker */}

          <div className="one-project">
            <img src={NoteTaker} alt="Note Taker" className="one-project-img" />
            <div className="one-project-bottom">
              <h3 className="one-project-title">Note Taker</h3>
              <p className="one-project-text">
                App that allows users to store their notes with a title and paragraph in a json file. Deployed on Heroku and powered by Express for the backend.
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