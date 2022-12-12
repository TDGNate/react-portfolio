import React, { useState } from "react";

// Styles 
import "../styles/hamburger.css";
import "../styles/navbar.css";

// Resume 
import { Resume } from "../imgs";

// Link 
import { Link } from "react-router-dom";

// Change Navbar if user isn't at the top 
function isNavTop() {
  const navbarEl = document.querySelector(".navbar-container");

// Check if window screen is at the top 
  if (navbarEl) {
    if (window.scrollY !== 0) {
      navbarEl.classList.add("navbar-full-dark")
    } else {
      navbarEl.classList.remove("navbar-full-dark")
    }
  }

}

const Navbar = () => {
  
  const [isActive, setActive] = useState("true");


  const handleToggle = (e) => {

    // if the screen size is mobile, then apply the active class 
    if (window.innerWidth < 830) {
      setActive(!isActive);
    }
  };

  return (
    <nav className={`navbar-container ${isActive ? "" : "active"}`}>
      <div className="container">
        <a href="/#hero" className="logo">Nate</a>
        <ul className={`navbar-ul ${isActive ? "" : "active"}`}>

          <li className="navbar-item">
            <Link to="/about"
              onClick={handleToggle}>About Me</Link>
          </li>

          <li className="navbar-item">
            <Link to="/projects"
             onClick={handleToggle}>Projects</Link>
          </li>

          <li className="navbar-item">
            <a href="/#skills"
              onClick={handleToggle}
            >Skills</a>
          </li>

          <li className="navbar-item">
            <a href={Resume} target="blank"
              onClick={handleToggle}
            >Resume</a>
          </li>

          <li className="navbar-item">
            <a href="#contact"
              onClick={handleToggle}
            >Contact</a>
          </li>
          
        </ul>

        {/* Hamburger  */}
        <div className={`hamburger ${isActive ? "" : "active"}`} onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      </div>
    </nav>
  )
}

// Listen for scroll to check if user is at the top of the page 
window.addEventListener("scroll", isNavTop)

export default Navbar;