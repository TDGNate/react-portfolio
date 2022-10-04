import React from 'react'
import "../styles/project.css"

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-content">
          <h3>Prime</h3>
          <div className="project-primary">
            
            <div className="project-prime-card">
              <div className="project-prime-card-left">
                <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="project image" className="project-prime-thumbnail"/>
              </div>

              <div className="project-prime-card-right">
                <div className="project-prime-title">Project Title</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sit totam incidunt ipsam, iusto, aperiam facilis officiis pariatur fugiat eligendi enim architecto aliquid vitae accusamus dolor voluptatibus. Reprehenderit, error eius.</p>
                <div className="project-prime-tech-title">
                  Technologies and Tools
                </div>
                <div className="project-prime-tech">
                  <img className="tech-icon" src="./images/react.png" alt="" />
                  <img className="tech-icon" src="./images/css-3.png" alt="" />
                </div>
                <div className="project-prime-btns">

                </div>
              </div>
            </div>

            <div className="project-prime-card">
              <div className="project-prime-card-left">
                <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="project image" className="project-prime-thumbnail"/>
              </div>

              <div className="project-prime-card-right">
                <div className="project-prime-title">Project Title</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sit totam incidunt ipsam, iusto, aperiam facilis officiis pariatur fugiat eligendi enim architecto aliquid vitae accusamus dolor voluptatibus. Reprehenderit, error eius.</p>
                <div className="project-prime-tech"></div>
                <div className="project-prime-btns">

                </div>
              </div>
            </div>

            <div className="project-prime-card">
              <div className="project-prime-card-left">
                <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="project image" className="project-prime-thumbnail"/>
              </div>

              <div className="project-prime-card-right">
                <div className="project-prime-title">Project Title</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sit totam incidunt ipsam, iusto, aperiam facilis officiis pariatur fugiat eligendi enim architecto aliquid vitae accusamus dolor voluptatibus. Reprehenderit, error eius.</p>
                <div className="project-prime-tech"></div>
                <div className="project-prime-btns">

                </div>
              </div>
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