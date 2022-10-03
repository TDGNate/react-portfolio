import React from 'react'
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="wrapper">
      <div className="hero">
        <img src={process.env.PUBLIC_URL + "svgs/flat-mountains.svg"} alt="svgs" className="hero-mountains" />
        <img src={process.env.PUBLIC_URL + "images/forest-trees.png"} alt="forest trees" className="hero-trees"/>
        <img src={process.env.PUBLIC_URL + "svgs/wave-haikei.svg"} alt="wave svg" className="hero-waves"/>
      </div>
    </div>
  )
}

export default Hero;