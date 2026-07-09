import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider, useTheme } from "./theme/ThemeContext";
import Nav from "./components/Nav";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import "./styles/global.css";

// The themed page shell: full-height background (radial accent wash), base
// typography, and the sticky nav. `overflow-x: clip` contains the bleeding
// accent blobs without breaking the nav's position:sticky (unlike overflow
// hidden, which would establish a scroll container).
function Shell() {
  const { tokens: t, mode } = useTheme();
  return (
    <div
      data-theme={mode}
      style={{
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
        background: t.rootBg,
        color: t.c.text,
        transition: "background 0.4s ease, color 0.4s ease",
        overflowX: "clip",
        position: "relative",
      }}
    >
      <Nav />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Shell />
      </Router>
    </ThemeProvider>
  );
}
