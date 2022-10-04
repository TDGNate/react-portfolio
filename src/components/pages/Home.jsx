import React from 'react';

// Components 
import Hero from "../Hero";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";

const Home = ({ currentPage, handlePageChange }) => {
  return (
    <>
      <Hero />
      <About />
      <Projects currentPage={currentPage} handlePageChange={handlePageChange} />
      <Contact />
    </>
  )
}

export default Home