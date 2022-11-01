import React from "react";

// Icons for projects 
import { Node, Javascript, MySQL, Heroku, Bootstrap, Express, Handlebars, Sequelize, SweetAlert, Matcss, jQuery, Html, Css3, API, Reactt, Mongo, Mongoose, Sass, NPM, Git } from "../imgs/skills";

// Thumbnails for projects 
import { POPUmai, Platello, DaisysCakes } from "../gifs/projects";

import manOnPc from "../svgs/working-with-laptop.svg";
import "../styles/project.css";
import "../styles/animations.css";

// Animations 
import { RevealY } from "../utils/animation.js";

const Projects = ({ currentPage, handlePageChange }) => {

  return (
    <section id="projects" className="project-section" >
      <div className="container">
        <h2>My Work</h2>
        <div className="project-content reveal">
          <h3>Experience</h3>
          <div className="project-primary">
            
            {/* POP Umai Project  */}

            <div className="project-prime-card reveal">
              <div className="project-prime-card-left">
                <img src={POPUmai} alt="project" className="project-prime-thumbnail"/>
              </div>

              <div className="project-prime-card-right">
                <div className="project-prime-title">POP Umai - <span className="project-prime-title-sub">Freelance</span></div>
                <p>Collaborative full-stack application for a local business owner and her company, POP Umai. Worked directly with the client to take her ideas and desires, and make it reality. App contains smooth UI and authentication so our client can access the admin dashboard to manage all her events.</p>
                <div className="project-prime-tech-title">
                  Technologies and Tools
                </div>

                <div className="project-prime-tech">
                  <img className="tech-icon" src={Node} alt="node icon" />
                  <img className="tech-icon" src={Javascript} alt="javascript icon" />
                  <img className="tech-icon" src={MySQL} alt="mysql database icon" />
                  <img className="tech-icon" src={Heroku} alt="heroku icon" />
                  <img className="tech-icon" src={Bootstrap} alt="bootstrap icon" />
                  <img className="tech-icon invert" src={Express} alt="express icon" />
                  <img className="tech-icon invert" src={Handlebars} alt="handlebars icon" />
                  <img className="tech-icon" src={Sequelize} alt="sequelize icon" />
                </div>

                <div className="project-prime-btns">
                  <a href="https://pop-umai.herokuapp.com/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                  <a href="https://github.com/PreDevz/POP-Umai" target="blank" className="project-prime-btn github-btn">GITHUB</a>
                </div>
              </div>
            </div>

            {/* Tech Blog Project  */}

            {/* <div className="project-prime-card reverse reveal">
              <div className="project-prime-card-left">
                <img src={TechBlog} alt="project" className="project-prime-thumbnail"/>
              </div>

              <div className="project-prime-card-right">
                <div className="project-prime-title">N8 Tech Blog</div>
                <p className="project-prime-middle">Full-stack CMS-style blog site where developers can publish their blogs and add comments on others. Users can also view all their posts and comments they've made along with having access of updating/deleting their posts/comments from their dashboard.</p>
                <div className="project-prime-tech-title project-prime-middle">
                  Technologies and Tools
                </div>

                <div className="project-prime-tech project-prime-middle">
                  <img className="tech-icon" src={Heroku} alt="icon" />
                  <img className="tech-icon invert" src={Handlebars} alt="icon" />
                  <img className="tech-icon" src={Sequelize} alt="icon" />
                  <img className="tech-icon" src={Javascript} alt="icon" />
                  <img className="tech-icon invert" src={Express} alt="icon" />
                  <img className="tech-icon" src={Bootstrap} alt="icon" />
                  <img className="tech-icon" src={MySQL} alt="icon" />
                  <img className="tech-icon" src={Node} alt="icon" />
                  <img className="tech-icon" src={SweetAlert} alt="icon" />
                  <img className="tech-icon" src={FontAwesome} alt="icon" />
                </div>

                <div className="project-prime-btns">
                  <a href="https://techer-blogger.herokuapp.com/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                  <a href="https://github.com/TDGNate/Tech-Blog" target="blank" className="project-prime-btn github-btn">GITHUB</a>
                </div>

              </div>
            </div> */}

            {/* For Now  | Daisy's Cakes*/}

              <div className="project-prime-card reverse reveal">
              <div className="project-prime-card-left">
                <img src={DaisysCakes} alt="project" className="project-prime-thumbnail"/>
              </div>

              <div className="project-prime-card-right">
                <div className="project-prime-title">Daisy's Cakes - <span className="project-prime-title-sub">Freelance</span></div>
                <p className="project-prime-middle">Full-stack Mern-Stack site for a small local owned business that creates custom cakes for all occasions. Daisy&lsquo;s Cakes had no prior website except instagram for customers to contact her for cake orders. So we took on the challenge of creating an entire website from scratch including logo, theme or layout.</p>
                <div className="project-prime-tech-title project-prime-middle">
                  Technologies and Tools
                </div>

                <div className="project-prime-tech project-prime-middle">
                  <img className="tech-icon" src={Mongo} alt="icon" />
                  <img className="tech-icon invert" src={Express} alt="icon" />
                  <img className="tech-icon" src={Reactt} alt="icon" />
                  <img className="tech-icon" src={Node} alt="icon" />
                  <img className="tech-icon" src={Git} alt="icon" />
                  <img className="tech-icon invert" src={Mongoose} alt="icon" />
                  <img className="tech-icon" src={Heroku} alt="icon" />
                  <img className="tech-icon" src={SweetAlert} alt="icon" />
                  <img className="tech-icon" src={Sass} alt="icon" />
                  <img className="tech-icon" src={NPM} alt="icon" />
                </div>

                <div className="project-prime-btns">
                  <a href="https://bakedwithlove.herokuapp.com/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                  <a href="https://github.com/PreDevz/Daisys-Cakes" target="blank" className="project-prime-btn github-btn">GITHUB</a>
                </div>

              </div>
            </div>

            {/* Platello Project  */}

            <div className="project-prime-card reveal">
              <div className="project-prime-card-left">
                <img src={ Platello } alt="project" className="project-prime-thumbnail"/>
              </div>

              <div className="project-prime-card-right">
                <div className="project-prime-title">Platello</div>
                <p>Cheers to a new dish! Website that recommends users foods and drinks based on their preferences. Powered by the Spoonacular and the CocktailDB APIs.</p>
                <div className="project-prime-tech-title">
                  Technologies and Tools
                </div>

                <div className="project-prime-tech">
                  <img className="tech-icon" src={Html} alt="icon" />
                  <img className="tech-icon" src={Css3} alt="icon" />
                  <img className="tech-icon" src={Javascript} alt="icon" />
                  <img className="tech-icon" src={Matcss} alt="icon" />
                  <img className="tech-icon" src={jQuery} alt="icon" />
                  <img className="tech-icon" src={API} alt="icon" />
                </div>

                <div className="project-prime-btns">
                  <a href="https://predevz.github.io/Platello/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                  <a href="https://github.com/PreDevz/Platello" target="blank" className="project-prime-btn github-btn">GITHUB</a>
                </div>

              </div>
            </div>

          </div>

          <div className="project-more">

            <div className="project-more-left">
              <a href="#moreProjects"
                onClick={() => handlePageChange('MoreProjects')}
                className="view-all-projects">View All Projects</a>
            </div>

            <div className="project-more-right">
              <p className="check-out-my-projects-message revealRight">Hey, I have more projects you can check out, click the button next to me!</p>
              <img src={manOnPc} alt="Nate working on a laptop" className="man-laptop" />
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

window.addEventListener("scroll", RevealY);

export default Projects;