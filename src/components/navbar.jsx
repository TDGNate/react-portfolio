import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
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
    </nav>
  )
}

export default Navbar;