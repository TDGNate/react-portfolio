import React from 'react';

// Styles 
import "../styles/footer.css";

// Animations 
import { RevealY } from "../utils/animation";

// Link 
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <section className="footer-section">

      <div className="footer-layer reveal"></div>

      <div className="container">

        <div className="footer-links-container">

        {/* Just myself  */}
        <div className="footer-link-section">
          <h3>
            <Link to="about" className="footer-logo">Nate</Link>
          </h3>
            
          <ul className="footer-ul">
            <li>
             <a href="mailto:email@example.com">itsnzte@gmail.com</a>
            </li>
            <li>
             <a href="tel:9515913493">Phone: <span className="footer-number">(951) 591-3493</span></a>
            </li>
            <li>
             <a href="/#contact">Send a Message</a>
            </li>
            <li>
             <a href="https://www.linkedin.com/in/christian-mcilvenny/" target="blank">LinkedIn</a>
            </li>
          </ul>
        </div>
          
        {/* Relinks on Current Page  */}
        <div className="footer-link-section">
          <h3>
            Page
          </h3>
          <ul className="footer-ul">
            <li>
              <Link to="/about" className="logo" data-value="about">About</Link>
            </li>
            <li>
              <Link to="/projects" className="logo">Projects</Link>
            </li>
            <li>
              <a href="/#skills" className="logo">Skills</a>
            </li>
            <li>
              <a href="/#contact" className="logo">Contact</a>
            </li>
          </ul>
        </div>
          
        {/* Useful Sites */}
        <div className="footer-link-section">
          <h3>
            Useful Sites
          </h3>
          <ul className="footer-ul">
            <li>
              <a href="https://iconscout.com/" className="logo" target="blank">IconScout</a>
            </li>
            <li>
              <a href="https://www.flaticon.com/" className="logo" target="blank">flaticon</a>
            </li>
            <li>
              <a href="https://www.freepik.com/" className="logo" target="blank">freepik</a>
            </li>
            <li>
              <a href="https://icons.getbootstrap.com/" className="logo" target="blank">Bootstrap Icons</a>
            </li>
          </ul>
        </div>
          
        {/* Tools to Build this Portfolio  */}
          <div className="footer-link-section">
            <h3>
              Powered By
            </h3>
          <ul className="footer-ul">
            <li>
              <a href="https://reactjs.org/" target="blank">React</a>
            </li>
            <li>
              <a href="https://getbootstrap.com/" target="blank">Bootstrap</a>
            </li>
            <li>
              <a href="https://sweetalert.js.org/" target="blank">SweetAlert</a>
            </li>
            <li>
              <a href="https://github.com/" target="blank">Git/Github</a>
            </li>
          </ul>
        </div>

        </div>

      </div>
    </section>
  )
}

// Execute Animations 
window.addEventListener("scroll", () => {

  RevealY()

});

export default Footer;