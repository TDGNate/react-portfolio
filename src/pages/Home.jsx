import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import ProjectsPreview from "../components/sections/ProjectsPreview";
import Faith from "../components/sections/Faith";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <Faith />
      <Contact />
    </>
  );
}
