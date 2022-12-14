import React, { useRef } from 'react';

// Emailjs 
import emailjs from '@emailjs/browser';

// Components 
import ContactIcons from "./ContactIcons"

// Sweet Alert 
import swal from 'sweetalert';

// Styles 
import "../styles/sweetAlert.css";
import "../styles/contact.css";

// Pull ENV Variables 
const REACT_APP_SERV_KEY = process.env.REACT_APP_SERV_KEY;
const REACT_APP_FORM_TEMPLATE = process.env.REACT_APP_FORM_TEMPLATE;
const REACT_APP_FORM_PUB_KEY = process.env.REACT_APP_FORM_PUB_KEY;

const Contact = () => {

  const form = useRef();
  
  const [formStatus, setFormStatus] = React.useState('SEND')

  const [disabled, setDisabled] = React.useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    setDisabled(true)

    const { formName, formEmail, formMessage } = e.target.elements
    
    // Check if name is empty 
    if (formName.value === "") {
      swal("Please add your name!");

      removeDisableBtn()
      return;
    }
    
    // check if it's only one character 
    if (formName.value.length <= 1) {
      swal("Name isn't valid!");

      removeDisableBtn()
      return;
    }
    
    // Check if email is empty 
    if (formEmail.value === "") {
      swal("Please add your email!");

      removeDisableBtn()
      return;
    }

    emailjs.sendForm(REACT_APP_SERV_KEY, REACT_APP_FORM_TEMPLATE, form.current, REACT_APP_FORM_PUB_KEY)
      .then((result) => {

        let isOk = result.text === "OK"
      
        setFormStatus('Sending...')

        if (isOk) {

          swal({
            title: "Thank You!",
            text: "I will get back to you asap!",
            icon: "success",
            button: false
          });
    
        } else {

          swal({
            title: "uh oh...",
            text: "An error occurred...",
            button: false
          });

        }

        borderGlow()
    
        setTimeout(() => {
    
          // send confirmation 
          setFormStatus('SEND')
          swal.close()
          
          // reset form 
          formName.value = ""
          formEmail.value = ""
          formMessage.value = ""

          // set disable off on form button 
          removeDisableBtn()
    
        }, 2000)
    }, (error) => {

        console.log(error.text);
        
    });
    
  }

  // Function to make the border of the form glow when sent! 
  function borderGlow() {

    document.querySelector(".cform").classList.add("border-glow") 
    
    setTimeout(() => {
      document.querySelector(".cform").classList.remove("border-glow") 
    }, 7800)

  }

  // Removes the disable attribute on send button 
  function removeDisableBtn() {

    setTimeout(() => {
    setDisabled(false)
    }, 1250);

  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">Get in <span>touch...</span></h2>
        <p className="contact-info">
          Christian "<span>Nate</span>" McIlvenny
          <br />
          Perris, CA
          <br />
          <a href="tel:9515913493">(951) 591-3493</a>
          <br />
          <a href="mailto:email@example.com">itsnzte@gmail.com</a>
        </p>

        <div className="contact-wrapper">

          <div className="contact-wrapper-left revealLeft">

            <h3>Send me a message!</h3>

            <form  ref={form} onSubmit={onSubmit} className="cform">
              {/* Name */}
              <label className="cform-label" htmlFor="name">Name</label>
              <input className="cform-name" type="text" name="user_name" id="formName" placeholder="John Doe" />
              {/* Email */}
              <label className="cform-label" htmlFor="email">Email</label>
              <input className="cform-email" type="email" name="user_email" id="formEmail" placeholder="example@domain.com" />
              {/* Message */}
              <label className="cform-label" htmlFor="message">Message</label>
              <textarea className="cform-message" name="message" id="formMessage" maxLength="380" placeholder="Add your message here!"  required />
              {/* Button  */}
              <button className="cform-send" type="submit" disabled={disabled}>{formStatus}</button>
              </form>
            
          </div>
          
          <div className="contact-wrapper-right revealRight">

            <h3>My Socials</h3>

            {/* Contact Icons  */}
            <ContactIcons />

          </div>

        </div>

        <div className="contact-bottom">
          <a href="#hero">
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact;