import React from 'react'

import "../styles/skills.css"

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-section-bg" id="skillsBg"></div>

      <div className="skills-slide-left revealLeft"></div>
      <div className="skills-slide-right revealRight"></div>

      <div className="container">

        <h2>Skills</h2>
        <p>
          Here is a list of my knowledge and abilities!
        </p>

          <h3>Languages and Frameworks</h3>
        <div className="langs-frames-container">

        <i class="fa-sharp fa-solid fa-house"></i>

        </div>
        
      </div>
    </section>
  )
}

export default Skills