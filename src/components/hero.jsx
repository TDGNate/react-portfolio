import React from "react";

// Styles 
import "../styles/hero.css";

// Images 
import { mountainBg } from "../imgs";
import { Nate } from "../imgs";

// Resume 
import { Resume } from '../imgs';

import Parallax from "../utils/parallax";

const Hero = () => {

  return (
    <div className="hero" id="hero">

      {/* Hero Background  */}
      <div className="hero-bg" style={{ backgroundImage: `url(${mountainBg})` }}></div>

      {/* Stars  */}
      <div className="star star-1" data-value="-2"></div>
      <div className="star star-2" data-value="5"></div>
      <div className="star star-3" data-value="3"></div>
      <div className="star star-4" data-value="-5"></div>
      <div className="star star-5" data-value="7"></div>
      <div className="star star-6" data-value="-4"></div>
      <div className="star star-7" data-value="5"></div>
      <div className="star star-8" data-value="-7"></div>
      <div className="star star-9" data-value="-4"></div>
      <div className="star star-10" data-value="2"></div>

      {/* Hero Side  */}
      <div className="hero-side">

        {/* Hero Side Titles  */}
        <div className="hero-top-titles">
            <h1 className="hero-title">Hello, I'm <br className="hero-title-break"/><span className="hero-name"> Christian McIlvenny</span></h1>
            <p className="hero-sub-title">Software Developer</p>
        </div>

        {/* Small About Me  */}
        <div className="hero-about">
          <p className="hero-about-text">
          You can just call me Nate! My passion is building applications for clients, team collaboration, problem-solving, and designing.
            <div className="hero-about-space"></div>
            <a href="/#" className="more-about-me">More About Me</a> | <a href={Resume} target="blank" className="more-about-me">Resume</a>
          </p>
          <img src={Nate} alt="Nate" className="hero-about-img" title="Hey it's me, Nate!" />
        </div>

        {/* Hero Side Content  */}
        <div className="hero-side-content">
          <p className="hero-text">
          Check out some of my work below! <a href="#projects" className="hero-view-projects"><i class="bi bi-arrow-down"></i></a>
          </p>
            <a href="#contact" className="hero-contact-me">Contact Me!</a>
          </div>
      </div>
      
    </div>
  )
}

// Listen for mouse movements 
document.addEventListener("mousemove", Parallax);

export default Hero;