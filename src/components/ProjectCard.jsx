import React from 'react'

import "../styles/projectCard.css"

const ProjectCard = ({title, thumbNail, description}) => {
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

         

       </div>
      <hr className="one-project-hr"/>
      <div className="one-project-btns">
        <a href="https://github.com/TDGNate/E-Commerce-Backend" target="blank" className="project-prime-btn github-btn">GITHUB</a>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard