import React from 'react';
import "../styles/navbar.css";

const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <nav className="navbar-container">
      <div className="container">
        <a href="#about-me" className="logo">Nate</a>
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