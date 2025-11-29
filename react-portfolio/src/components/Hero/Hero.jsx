import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="hero-tagline">Hello, I'm</p>
          <h1 className="hero-title">Praveen Dinuwara</h1>
          <p className="hero-subtitle">
            IT undergraduate at SLIIT & Practical Problem Solver.
          </p>
          <p className="hero-description">
            I convert practical challenges into impactful outcomes by designing solutions that create tangible value in real use scenarios.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src="/assets/images/profile.jpg"
            alt="Profile"
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
