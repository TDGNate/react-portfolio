import React, { Component, useState } from 'react';

// Components 
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./about"
import Projects from "./Projects"
import Contact from "./Contact"

const PortfolioContainer = () => {

  const [currentPage, setCurrentPage] = useState('Home');

  // check which page the user is currently on 
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  return (
    <>
      <Navbar />
      {}
    </>
  )
}

export default PortfolioContainer