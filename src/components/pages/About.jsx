import React from 'react';

// Styles 
import "../../styles/about.css";

// Svg 
import Rocket from "../../svgs/rocket.svg"

// Resume and Images
import { Resume, NateSixFlags } from "../../imgs";

// Motion | smooth animations when transitioning pages 
import { motion } from "framer-motion";

const About = ({ currentPage, handlePageChange }) => {

  function changePage() {
    handlePageChange("Home")
    console.log('hello')
  }

  return (
    <motion.div
      initial={{ opacity: .5 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.00 }}
      exit={{ opacity: 0 }}
      id="aboutPage"
    >
      <div className="container">
        <h2>Who am I?</h2>

        <div className="about-content-1">
          <div className="about-left">
            <p className="about-text">
            I'm Christian but my peers call me <span className="highlight">Nate</span>! My journey began when my CyberSecurity teacher made us write our first line of code in Python and revealed the fundamentals of <span className="highlight">computers and technology</span>.
              <br />
              <br />
              I love learning new things and finding ways to utilize them for personal projects. I was also self-taught for 4-6 months and built multiple <span className="highlight"> responsive websites</span> before enrolling in a Bootcamp.
            </p>
            <p><i>You can view my resume or download it below.</i> <i class="bi bi-arrow-down"></i></p>

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
            Now I'm a full-stack developer with a Software Engineering Certificate from the <span className="highlight">University of California, Riverside</span>. I'm experienced with <span className="highlight">web designing</span>, <span className="highlight">code structuring</span>, <span className="highlight"> team collaboration</span>, <span className="highlight">and problem-solving</span> while following Git Practice.
            <br />
            <br />
            I can take other designs and convert them to code, maintain <span className="highlight"> full-stack websites</span> for clients, and have the tasks <span className="highlight"> ready for production</span>. I&#39;m always eager to learn more and grow with others and can work in <span className="highlight"> fast-paced environments</span> while still <span className="highlight"> completing expectations</span>.
              </p>
        </div>
        
        <div className="about-content-3">
          <p><i>If you would like to contact me, you can message me  <a href="#contact" onClick={changePage}>here</a>!</i></p>
        </div>

      </div>
    </motion.div>
  )
}

export default About;