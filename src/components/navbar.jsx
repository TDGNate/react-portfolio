import React from 'react';
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="container">
        <a href="#about-me" className="logo">Nate</a>
        <ul className="navbar-ul">
          <li className="navbar-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#about-me">About Me</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;