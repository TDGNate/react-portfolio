import React from 'react'
import "../../styles/moreProjects.css"

const MoreProjects = () => {
  return (
    <>
      <div id="moreProjects" className="more-projects-page">
        <div className="container">
          <div className="more-projects-empty-space"></div>
          <h1>My Projects</h1>
          <p>Here are all my backend, frontend, and full stack projects :)</p>

          <div className="more-projects-project-container">

            <div className="one-project">
              <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt="" className="one-project-img" />
              <div className="one-project-bottom">
                <h3 className="one-project-title">hello</h3>
                <p className="one-project-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet nostrum illo est, porro dolore ipsa. Officiis rerum voluptatem ratione ea. Vel ipsam velit quis quod! Recusandae nam excepturi velit!
                </p>
                  <h4>Stack</h4>
                <div className="one-project-techs">
                  <div className="one-project-tech">

                  </div>
                </div>
                <hr className="one-project-hr"/>
                <div className="one-project-btns">
                  <a href="#/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                  <a href="#/" target="blank" className="project-prime-btn github-btn">GITHUB</a>
                </div>
              </div>
            </div>


            

          </div>
        </div>
      </div>
    </>
  )
}

export default MoreProjects