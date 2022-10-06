import React from 'react'
import "../styles/contact.css"

const Contact = () => {
  
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact</h2>
        <p className="contact-info">
          Christian McIlvenny
          <br />
          Perris, CA
          <br />
          <a href="mailto:email@example.com">itsnzte@gmail.com</a>
          
          <br />
          Phone: <span>951-591-3493</span>
        </p>

        <div className="contact-wrapper">

          <div className="contact-wrapper-left revealLeft">

            <h3>Send me a message!</h3>

            <form action="" className="cform">
              {/* Name */}
              <label className="cform-label" htmlFor="name">Name</label>
              <input className="cform-name" type="text" id="formName" required />
              {/* Email */}
              <label className="cform-label" htmlFor="email">Email</label>
              <input className="cform-email" type="email" id="formEmail" required />
              {/* Message */}
              <label className="cform-label" htmlFor="message">Message</label>
              <textarea className="cform-message" type="email" id="formMessage" maxLength="380" required />
              {/* Button  */}
              <button className="cform-send" type="submit">Send</button>
              </form>
            
          </div>
          
          <div className="contact-wrapper-right revealRight">

            <h3>My Socials</h3>

            <div className="contact-icons">

              <a href="https://github.com/TDGNate" target="blank"><i class="bi bi-github"></i></a>

              <a href="https://www.linkedin.com/in/christian-mcilvenny/" target="blank"><i class="bi bi-linkedin"></i></a>

              <a href="https://www.instagram.com/imnzte" target="blank"><i class="bi bi-instagram"></i></a>

              <a href="mailto:email@example.com"><i class="bi bi-envelope-fill"></i></a>

              <a href="https://discordapp.com/users/276568445796220928" target="blank"><i class="bi bi-discord"></i></a>
              
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact