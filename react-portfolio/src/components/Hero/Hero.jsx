import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = ({ showAvatarInNav }) => {
  return (
    <section id="hero" className="hero-full">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-tagline">Hello, I'm</p>
          <h1 className="hero-title">Praveen Dinuwara</h1>
          <p className="hero-subtitle">
            IT undergraduate at SLIIT & Practical Problem Solver.
          </p>
          <p className="hero-description">
            I convert practical challenges into impactful outcomes by designing solutions that create tangible value in real use scenarios.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-Vproject">
              View Projects
            </a>
            <a href="#contact" className="btn btn-Contact">
              Contact Me
            </a>
          </div>
        </div>

        {/* Avatar*/}
        <AnimatePresence>
          {!showAvatarInNav && (
            <motion.div
              layoutId="profile-avatar"
              className="hero-avatar-wrapper"
              initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 3 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}

            >
              <img
                src="/profile.jpeg"  
                alt="Profile"
                className="hero-image"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
