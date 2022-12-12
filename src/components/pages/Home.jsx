import React from 'react';

// Components 
import Hero from "../Hero";
import Projects from "../Projects";
import Skills from "../Skills";
import Contact from "../Contact";

// Motion | smooth animations when transitioning pages 
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: .6 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.00 }}
      exit={{ opacity: 0 }}
    >

      <Hero />
      <Projects />
      <Skills />
      <Contact />

    </motion.div>
  )
}


export default Home;