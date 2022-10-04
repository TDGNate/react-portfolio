import React, { useState } from 'react';

// Component Pages
import Navbar from "./Navbar"
import Home from "./pages/Home";

const PortfolioContainer = () => {

  const [currentPage, setCurrentPage] = useState('Home');

  // check which page the user is currently on 
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />; 
    }
    // if (currentPage === 'About') {
    //   return <About />;
    // }
    // if (currentPage === 'Blog') {
    //   return <Blog />;
    // }
    // return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
    </>
  )
}

export default PortfolioContainer