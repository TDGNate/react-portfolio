import React, { useState } from "react";

// Styles 
import "../styles/hamburger.css";
import "../styles/navbar.css";

// Resume 
import { Resume } from "../imgs";

const Navbar = ({ currentPage, handlePageChange }) => {
  
  const [isActive, setActive] = useState("true");

  const handleToggle = (e) => {

    // if the screen size is mobile, then apply the active class 
    if (window.innerWidth < 830) {

      setActive(!isActive);

      if (currentPage === "MoreProjects") {
        if (e.currentTarget.classList.contains('hamburger')) {
          return;
        }
      }

      if (currentPage === "About") {
        if (e.currentTarget.classList.contains('hamburger')) {
          return;
        }
      }

      handlePageChange('Home')
    }

    console.log(typeof e.currentTarget.getAttribute("data-value"))

    if (e.currentTarget.getAttribute("data-value") === "about") {
      handlePageChange('About')
    }

    if (currentPage === "MoreProjects") { 
      if (e.currentTarget.getAttribute("data-value") === "about") {
        handlePageChange('About')
        return;
      }
      handlePageChange('Home')
    }

    if (currentPage === "About") { 
      handlePageChange('Home')
    }

  };

  return (
    <nav className={`navbar-container ${isActive ? "" : "active"}`}>
      <div className="container">
        <a href="#hero" className="logo" onClick={() => handlePageChange('Home')}>Nate</a>
        <ul className={`navbar-ul ${isActive ? "" : "active"}`}>

          <li className={currentPage === "About" ? "navbar-item nav-active-link" : "navbar-item"}>
            <a href="#aboutPage" data-value="about"
              onClick={handleToggle}>About Me</a>
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

export default Navbar;