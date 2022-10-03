import React from 'react'
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-bg" style={{ backgroundImage: "url(/images/mountains.jpg)" }}></div>

      <div className="hero-side">
          <h1 className="hero-title">Hello, I'm Christian McIlvenny</h1>
        <div className="hero-side-content">
          <p className="hero-sub-title">Software Developer</p>
          <p className="hero-text">Check out some of my projects!</p>
            <a href="#projects">View Projects</a>
          </div>
      </div>
      
    </div>
  )
}

export default Hero;