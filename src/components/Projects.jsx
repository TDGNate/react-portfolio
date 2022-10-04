import React from 'react'
import "../styles/project.css"

const Projects = () => {
  return (
    <section className="project-section" style={{ backgroundImage: "url(/svgs/wave-projects.svg)" }}>
      <div className="container">
        <h2>Projects</h2>
        <div className="project-content">
          <h3>Prime</h3>
          <div className="project-primary">
          <div className="project-prime-card">

          </div>
          </div>
          <h3>More...</h3>
          <div className="project-more">
            <div className="project-card">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects