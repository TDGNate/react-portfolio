import React from 'react'
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-bg" style={{ backgroundImage: "url(/images/mountains.jpg)" }}></div>

      {/* Hero Side  */}
      <div className="hero-side">

        {/* Hero Side Titles  */}
        <div className="hero-top-titles">
            <h1 className="hero-title">Hello, I'm Christian McIlvenny</h1>
            <p className="hero-sub-title">Software Developer</p>
        </div>

        {/* Hero Side Content  */}
        <div className="hero-side-content">
          <p className="hero-text">Thanks for visiting! <br />
          Check out some of my work!  <a href="#projects" className="hero-view-projects">Projects</a>
          </p>
            <a href="#contact" className="hero-hire-me">Hire Me</a>
          </div>
      </div>
      
    </div>
  )
}

export default Hero;