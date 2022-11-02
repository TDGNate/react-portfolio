import React from 'react';

// Styles 
import "../../styles/about.css";

// Svg 
import Rocket from "../../svgs/rocket.svg"

// Resume and Images
import { Resume, NateSixFlags } from "../../imgs";

const About = () => {
  return (
    <div id="aboutPage">
      <div className="container">
        <h2>Christian McIlvenny</h2>

        <div className="about-content-1">
          <div className="about-left">
            <p className="about-text">Hello, I'm Christian but peers call me Nate! My journey began when my CyberSecurity teacher made us write our first line of code and revealed the fundamentals of computers and technology. <br />  <br /> This led to me taking a JavaScript Web Development class in college, but later I enrolled in a software engineer bootcamp at University of California, Riverside where I became a Full-Stack software engineer!</p>
            <p>You can view my resume or download it below. <i class="bi bi-arrow-down"></i></p>

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
            <img src={NateSixFlags} alt="Nate" className="about-pic" />
          </div>

        </div>

        {/* About Section Two  */}
        <div className="about-content-2">
            <img src={Rocket} alt="" className="about-2-img" />

            <p className="about-2-text">
            Very passionate full-stack developer with a Software Engineering Certificate from the University of California, Riverside. Experienced with web designing, code structuring, team collaboration, problem-solving, and having a stable Git workflow.
            <br />
            <br />
            Great capability to take other designs and convert them to code, maintains full-stack websites for clients, and have the tasks ready for production. Always eager to learn more and grow with others, and can work in fast-paced environments while still completing expectations.
              </p>
        </div>
      </div>
    </div>
  )
}

export default About;