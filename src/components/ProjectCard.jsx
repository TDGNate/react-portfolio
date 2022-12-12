import React from 'react'

import "../styles/projectCard.css"

const ProjectCard = ({ title, thumbNail, description, techStack, btns }) => {
  return (
  <div className="one-project">
    <img src={ thumbNail } alt="E-Commerce Backend Taker" className="one-project-img" />
      <div className="one-project-bottom">
        
        <h3 className="one-project-title">{ title }</h3>
        <p className="one-project-text">
        { description }
        </p>
        
        <h4>Stack</h4>
        <div className="one-project-techs">

        {/* Check each Project's Card tech stack and display them  */}
        {
          techStack.map((tech, index) => {
            return <div key={index} className="one-project-tech">
            <a href={tech.link} target="blank" className="skill-anchor">
              <img src={tech.tech} alt="Tech Icon" className={` skill-img ${tech.invert ? "invert" : ""}`} />
            </a>
          </div>
        })
        }
        </div>
        
        <hr className="one-project-hr" />
        
        <div className="one-project-btns">

          {/* Check if the cards has buttons to display with their links  */}
          {
            btns.map((btn, index) => {
              if (btn.repo) {
                return <a key={index} href={btn.repo} target="blank" className="project-prime-btn github-btn">GITHUB</a>
              }
              if (btn.deployed) {
                return <a key={index} href={btn.deployed} target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
              } 
              return ""
            })
          }
        </div>
        
    </div>
  </div>
  )
}

export default ProjectCard