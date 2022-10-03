import React from 'react'
import '../styles/about.css'

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2>About Me</h2>

        <div className="about-content">
          <p className="about-text">Hello, I'm Christian McIlvenny but you can call me Nate! My journey began when my CyberSecurity teacher made us write our first line of code and revealed the fundamentals of computers and technology. This led to me taking a JavaScript Web Development class in college, but later I enrolled in a software engineer bootcamp at University of California, Riverside where I became a Full-Stack software engineer!</p>

          <div className="about-img-box">
            <img src="./images/Nate-six-flags.jpg" alt="Nate at six flags" className="about-pic" />
          </div>

        </div>

        
      </div>
    </section>
  )
}

export default About