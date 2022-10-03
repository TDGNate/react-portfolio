import React from 'react'
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: "url(/images/mountains.jpg)" }}>

      <img src="./svgs/flat-mountains.svg" alt="flat mountains" className="hero-smooth-mountains" />
      
      <div className="hero-trees">
        <img src="./images/forest-trees.png" alt="" className="tree hero-tree-1" /> 

        <img src="./images/forest-trees.png" alt="" className="tree hero-tree-2"/> 
      </div>
      
    </div>
  )
}

export default Hero;