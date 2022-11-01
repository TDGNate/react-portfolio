import React from 'react';

// Styles 
import "../../styles/about.css";

// Resume and Images
import { Nate, Resume } from "../../imgs";

const About = () => {
  return (
    <div id="aboutPage">
      <div className="container">
        <h2>About Me</h2>

        <div className="about-content">
          <div className="about-left">
            <p className="about-text">Hello, I'm Christian McIlvenny but you can call me Nate! My journey began when my CyberSecurity teacher made us write our first line of code and revealed the fundamentals of computers and technology. <br />  <br /> This led to me taking a JavaScript Web Development class in college, but later I enrolled in a software engineer bootcamp at University of California, Riverside where I became a Full-Stack software engineer!</p>

            <div className="about-btns">
            <a href={Resume} className="resume-btn" target="blank">
              View Resume
              </a>
            <a href={Resume} className="resume-btn download-resume" target="blank" download>
              <i class="bi bi-download"></i>
            </a>
            </div>
          </div>

          <div className="about-img-box">
            <img src={Nate} alt="Nate" className="about-pic" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default About;