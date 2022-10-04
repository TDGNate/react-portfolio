import React from 'react';
import "../styles/navbar.css";

const Navbar = ({ currentPage, handlePageChange }) => {

  function toggleNav() {

    let navbar = document.querySelector(".navbar-container")
    let navContainer = document.querySelector(".navbar-container .container");
    let logo = document.querySelector(".logo");
    let navMobileContainer = document.querySelector(".navbar-mobile-container")
    let menuBtn = document.querySelector(".menu-btn")
    let closeMenuBtn = document.querySelector(".close-btn")
    let bodyEl = document.body

    if (menuBtn.style.display !== "none") {
      navbar.style.height = "100vh"
      navbar.style.background = "rgba(69, 69, 69, 0.932)"
  
      navContainer.style.flexDirection = "column";
      navContainer.style.height = "100%";
  
      logo.style.textAlign = "center";
      logo.style.fontSize = "4rem";
      logo.style.color = "var(--blue-clr)";
  
      navMobileContainer.style.display = "flex"
  
      menuBtn.style.display = "none"
      closeMenuBtn.style.display = "block"
  
      bodyEl.style.height = "100vh" 
      bodyEl.style.overflow = "hidden" 
    } else {

      navbar.style.height = "auto"
      navbar.style.background = "linear-gradient(to bottom, #010101, transparent)"
  
      navContainer.style.flexDirection = "row";
      navContainer.style.height = "auto";
  
      logo.style.width = "25%";
      logo.style.textAlign = "start";
      logo.style.fontSize = "1.5rem";
      logo.style.color = "var(--light-sub-clr)";
  
      navMobileContainer.style.display = "none"
  
      menuBtn.style.display = "block"
      closeMenuBtn.style.display = "none"
  
      bodyEl.style.height = "auto"
      bodyEl.style.overflow = "auto" 
    }





  }

  return (
    <nav className="navbar-container">
      <div className="container">
        <a href="#about-me" className="logo">Nate</a>

        {/* Mobile Version  */}

          <button className="menu-btn" onClick={toggleNav}><img src="/images/menu.png" alt="menu" className="menu-logo" /></button>
        <div className="navbar-mobile-container">


          <button className="close-btn"  onClick={toggleNav}>
            <img src="/images/close.png" alt="close menu button" className="menu-close-logo" />
          </button>

          <ul className="navbar-ul-mobile">
            <li className="navbar-item">
            <a href="#projects"
              onClick={() => handlePageChange('Home')}>Projects</a>
            </li>
            <li className="navbar-item">
            <a href="#projects"
              onClick={() => handlePageChange('Home')}>Projects</a>
            </li>
            <li className="navbar-item">
            <a href="#projects"
              onClick={() => handlePageChange('Home')}>Projects</a>
            </li>
            <li className="navbar-item">
            <a href="#projects"
              onClick={() => handlePageChange('Home')}>Projects</a>
            </li>
          </ul>
        </div>

        {/* Desktop Version  */}

        <ul className="navbar-ul">

          <li className={currentPage === "MoreProjects" ? "navbar-item nav-active-link" : "navbar-item"}>
            <a href="#projects"
             onClick={() => handlePageChange('Home')}>Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#about-me"
              onClick={() => handlePageChange('Home')}
            >About Me</a>
          </li>
          <li className="navbar-item">
            <a href="#contact"
              onClick={() => handlePageChange('Home')}
            >Contact</a>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;