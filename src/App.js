import React from 'react';

import PortfolioContainer from "./components/PortfolioContainer";

// Router 
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/main.css";

function App() {
  return (

    <Router>

      <PortfolioContainer />

    </Router>

  );
}

export default App;