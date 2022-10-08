import React, { useState } from "react";

import "../styles/hamburger.css";
import "../styles/navbar.css";

const Navbar = ({ currentPage, handlePageChange }) => {
  
  const [isActive, setActive] = useState("true");

  const handleToggle = (e) => {

        // if the screen size is mobile, then apply the active class 
    if (window.innerWidth < 830) {

      setActive(!isActive);

      if (currentPage === "MoreProjects") {
        if (e.currentTarget.classList.contains('hamburger')) {
          return
        }
      }

      handlePageChange('Home')
    }

  };

  return (
    <nav className={`navbar-container ${isActive ? "" : "active"}`}>
      <div className="container">
        <a href="#hero" className="logo" onClick={() => handlePageChange('Home')}>Nate</a>
        <ul className={`navbar-ul ${isActive ? "" : "active"}`}>

          <li className="navbar-item">
            <a href="#about-me"
              onClick={handleToggle}
            >About Me</a>
          </li>

          <li className={currentPage === "MoreProjects" ? "navbar-item nav-active-link" : "navbar-item"}>
            <a href="#projects"
             onClick={handleToggle}>Projects</a>
          </li>

          <li className="navbar-item">
            <a href="#skills"
              onClick={handleToggle}
            >Skills</a>
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

export default Navbar;