import React, { useState } from 'react';

// Component Pages
import Navbar from "./Navbar";
import Footer from "./Footer";

// Pages 
import Home from "./pages/Home";
import MoreProjects from "./pages/MoreProjects";
import About from "./pages/About";

const PortfolioContainer = () => {

  const [currentPage, setCurrentPage] = useState('Home');

  // check which page the user is currently on 
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home currentPage={currentPage} handlePageChange={handlePageChange} />; 
    }

    if (currentPage === 'MoreProjects') {
      return <MoreProjects />;
    }

    if (currentPage === 'About') {
      return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  )
}

export default PortfolioContainer;