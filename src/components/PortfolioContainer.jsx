import React from 'react';

// Component Pages
import Navbar from "./Navbar";
import Footer from "./Footer";

// Pages 
import Home from "./pages/Home";
import MoreProjects from "./pages/MoreProjects";
import About from "./pages/About";

// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

// Animations 
import { RevealLeft, RevealRight, RevealY } from "../utils/animation";

const PortfolioContainer = () => {

  const location = useLocation();

  return (
    <>
      <Navbar />

      {/* Page  */}
      <div className="page-wrapper">
       <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<MoreProjects />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer  />
    </>
  )
}

// Execute Animations 
window.addEventListener("scroll", () => {

  RevealLeft()
  RevealRight()
  RevealY()

});

export default PortfolioContainer;