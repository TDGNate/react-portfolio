import React, { useState } from 'react';

// Component Pages
import Navbar from "./Navbar"
import Home from "./pages/Home";
import MoreProjects from "./pages/MoreProjects";

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