import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="section about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
        </div>

        <div className="about-layout">
          <p className="about-text">
            I’m an IT undergraduate at SLIIT with a strong interest in building real-world
            applications that solve practical problems. I enjoy turning ideas into real,
            functional systems, and I’m continuously learning new technologies,
            improving my problem-solving skills, and exploring innovative solutions.
            My long-term goal is to become a Software Engineer who builds reliable systems
            with clean code, strong UX, and real impact.
          </p>

          <div className="about-highlights">
            <div className="about-card">
              <h3>Tech Focus</h3>
              <p>React, Node.js, Kotlin, and full-stack web & mobile development.</p>
            </div>
            <div className="about-card">
              <h3>Projects</h3>
              <p>Delivering clean, purposeful solutions tailored to user and business needs.</p>
            </div>
            <div className="about-card">
              <h3>Goal</h3>
              <p>Translate complex real-world challenges into simple, intuitive, and accessible software experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
