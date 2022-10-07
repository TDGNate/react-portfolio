import React, { useState } from "react";

import "../styles/hamburger.css";
import "../styles/navbar.css";

const Navbar = ({ currentPage, handlePageChange }) => {
  
  const [isActive, setActive] = useState("false");

    const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className={`navbar-container ${isActive ? "" : "active"}`}>
      <div className="container">
        <a href="#hero" className="logo" onClick={() => handlePageChange('Home')}>Nate</a>
        <ul className={`navbar-ul ${isActive ? "" : "active"}`}>

          <li className="navbar-item">
            <a href="#about-me"
              onClick={() => handlePageChange('Home')}
            >About Me</a>
          </li>

          <li className={currentPage === "MoreProjects" ? "navbar-item nav-active-link" : "navbar-item"}>
            <a href="#projects"
             onClick={() => handlePageChange('Home')}>Projects</a>
          </li>

          <li className="navbar-item">
            <a href="#skills"
              onClick={() => handlePageChange('Home')}
            >Skills</a>
          </li>

          <li className="navbar-item">
            <a href="#contact"
              onClick={() => handlePageChange('Home')}
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