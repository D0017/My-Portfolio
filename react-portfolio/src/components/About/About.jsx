import React from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "../AnimatedTitle";

const About = () => {
  return (
    <section id="about" className="section about2">
      <div className="container">
        <motion.div
          className="about2-title"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <AnimatedTitle text="ABOUT ME" />
        </motion.div>

        <motion.div
          className="about2-surface popup-title"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -6, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
        >
          <div className="about2-bg" aria-hidden="true" />

          <div className="about2-layout">
            <div className="about2-main">

              <h3 className="about2-headline">
                Driven by <span>curiosity</span>,{" "}shaped through{" "}
                <span>continuous learning</span>.
              </h3>

              <p className="about2-text">
                I’m an IT undergraduate at SLIIT with a strong interest in building
                practical applications that solve real problems. I enjoy turning ideas
                into functional systems, continuously learning modern technologies, and
                improving my problem-solving skills. My long-term goal is to become a
                Software Engineer who delivers reliable systems with strong UX and real impact.
              </p>

              <div className="about2-chips">
                <span className="about2-chip">Designer</span>
                <span className="about2-chip">Developer</span>
                <span className="about2-chip">Problem Solver</span>

              </div>
            </div>

            <div className="about2-panel">
              <div className="about2-card">
                <h4>What I do</h4>
                <p>Delivering clean, purposeful solutions tailored to user needs.</p>
              </div>

              <div className="about2-card">
                <h4>Tech Focus</h4>
                <p>React, Node.js, Kotlin, and full-stack web & mobile development</p>
              </div>

              <div className="about2-card">
                <h4>How I work</h4>
                <p>Break down problems → design flow → build iteratively → refine UX.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
