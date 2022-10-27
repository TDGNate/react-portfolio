import React from 'react';

// Components 
import Hero from "../Hero";
// import About from "../About"; 
import Projects from "../Projects";
import Skills from "../Skills";
import Contact from "../Contact";

const Home = ({ currentPage, handlePageChange }) => {
  return (
    <>
      <Hero currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <About />  */}
      <Projects currentPage={currentPage} handlePageChange={handlePageChange} />
      <Skills />
      <Contact />
    </>
  )
}

export default Home;