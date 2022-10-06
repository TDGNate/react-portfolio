import React from 'react'

import "../styles/skills.css"

// All Image icons for Skills 
import { Express, Github, Html, Css3, Bootstrap, Reactt, Javascript, Matcss, Sass, Git, NPM, Heroku, RestApi, Insomnia, VsCode, Node, Handlebars, MySQL, Sequelize, WorkBench, Mongo, Compass, Mongoose, jQuery } from "../imgs/skills"

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-section-bg" id="skillsBg"></div>

      <div className="skills-slide-left revealLeft"></div>
      <div className="skills-slide-right revealRight"></div>

      <div className="container">

        <h2>Technical Skills</h2>
        <p>
          Here are my abilities and the tools i'm experienced with!
        </p>

        <div className="skills-wrapper">

          <h3>Languages and Frameworks</h3>

          <div className="skills-box-container revealRight">

            <div className="skill">
              <img src={Javascript} alt="javascript icon" className="skill-img" />
              <p className="skill-title ">Javascript</p>
            </div>
            <div className="skill">
              <img src={jQuery} alt="javascript icon" className="skill-img" />
              <p className="skill-title ">jQuery</p>
            </div>
            <div className="skill">
              <img src={Express} alt="express icon" className="skill-img invert" />
              <p className="skill-title ">Express</p>
            </div>
            <div className="skill">
              <img src={Reactt} alt="react icon" className="skill-img" />
              <p className="skill-title ">React</p>
            </div>
            <div className="skill">
              <img src={Html} alt="html icon" className="skill-img" />
              <p className="skill-title">HTML5</p>
            </div>
            <div className="skill">
              <img src={Sass} alt="sass icon" className="skill-img" />
              <p className="skill-title">SASS</p>
            </div>
            <div className="skill">
              <img src={Bootstrap} alt="bootstrap icon" className="skill-img" />
              <p className="skill-title">Bootstrap</p>
            </div>
            <div className="skill">
              <img src={Matcss} alt="Materialize icon" className="skill-img" />
              <p className="skill-title">Materialize</p>
            </div>
            <div className="skill">
              <img src={Css3} alt="css icon" className="skill-img" />
              <p className="skill-title">CSS3</p>
            </div>

          </div>

          <h3>Tools and Technologies</h3>

          <div className="skills-box-container revealLeft">

            <div className="skill">
                <img src={Git} alt="git icon" className="skill-img" />
                <p className="skill-title">Git</p>
            </div>
            <div className="skill">
                <img src={NPM} alt="npm icon" className="skill-img" />
                <p className="skill-title">NPM</p>
            </div>
            <div className="skill">
                <img src={Heroku} alt="heroku icon" className="skill-img" />
                <p className="skill-title">Heroku</p>
            </div>
            <div className="skill">
                <img src={Github} alt="github icon" className="skill-img invert" />
                <p className="skill-title">Github</p>
            </div>
            <div className="skill">
                <img src={RestApi} alt="rest api icon" className="skill-img skill-api" />
                <p className="skill-title">Rest API</p>
            </div>
            <div className="skill">
                <img src={Insomnia} alt="insomnia icon" className="skill-img" />
                <p className="skill-title">Insomnia</p>
            </div>
            <div className="skill">
                <img src={VsCode} alt="Visual Studio code icon" className="skill-img" />
                <p className="skill-title">VS Code</p>
            </div>
            <div className="skill">
                <img src={Node} alt="Node js icon" className="skill-img" />
                <p className="skill-title">Node</p>
            </div>
            <div className="skill">
                <img src={Handlebars} alt="handlebars icon" className="skill-img invert" />
                <p className="skill-title">Handlebars</p>
            </div>

          </div>

          <h3>Databases</h3>

          <div className="skills-box-container revealRight">

            <div className="skill">
              <img src={MySQL} alt="MySQL icon" className="skill-img" />
              <p className="skill-title">MySQL</p>
            </div>
            <div className="skill">
              <img src={Sequelize} alt="Sequelize icon" className="skill-img" />
              <p className="skill-title">Sequelize</p>
            </div>
            <div className="skill">
              <img src={WorkBench} alt="workbench icon" className="skill-img" />
              <p className="skill-title">Workbench</p>
            </div>
            <div className="skill">
              <img src={Mongo} alt="Mongo Database icon" className="skill-img" />
              <p className="skill-title">Mongo</p>
            </div>
            <div className="skill">
              <img src={Compass} alt="Compass icon" className="skill-img" />
              <p className="skill-title">Compass</p>
            </div>
            <div className="skill">
              <img src={Mongoose} alt="Mongoose icon" className="skill-img" />
              <p className="skill-title">Mongoose</p>
            </div>

          </div>
      </div>
        
      </div>
    </section>
  )
}

export default Skills