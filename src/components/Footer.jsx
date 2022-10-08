import React from 'react';

import "../styles/footer.css";

const Footer = () => {
  return (
    <section className="footer-section">

      <div className="footer-layer reveal"></div>

      <div className="container">

        <div className="footer-links-container">

        {/* Just myself  */}
        <div className="footer-link-section">
          <h3>
            <a href="#about-me" className="footer-logo">Nate</a>
          </h3>
            
          <ul className="footer-ul">
            <li>
             <a href="mailto:email@example.com">itsnzte@gmail.com</a>
            </li>
            <li>
             <a href="#//">Phone: <span className="footer-number">951-591-3493</span></a>
            </li>
            <li>
             <a href="#contact">Send a Message</a>
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
              <a href="#about-me" className="logo">About</a>
            </li>
            <li>
              <a href="#projects" className="logo">Projects</a>
            </li>
            <li>
              <a href="#skills" className="logo">Skills</a>
            </li>
            <li>
              <a href="#contact" className="logo">Contact</a>
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

export default Footer;