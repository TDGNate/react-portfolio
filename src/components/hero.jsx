import React from "react";
import "../styles/hero.css";
import Parallax from "../utils/parallax" 

const Hero = () => {

  return (
    <div className="hero" id="hero">

      {/* Hero Background  */}
      <div className="hero-bg"></div>

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
            <h1 className="hero-title">Hello, I'm <span className="hero-name"> Christian McIlvenny</span></h1>
            <p className="hero-sub-title">Software Developer</p>
        </div>

        {/* Hero Side Content  */}
        <div className="hero-side-content">
          <p className="hero-text">Thanks for visiting! <br />
          Check out some of my work!  <a href="#projects" className="hero-view-projects">Projects</a>
          </p>
            <a href="#contact" className="hero-hire-me">Hire Me!</a>
          </div>
      </div>
      
    </div>
  )
}

// Listen for mouse movements 
document.addEventListener("mousemove", Parallax);

export default Hero;