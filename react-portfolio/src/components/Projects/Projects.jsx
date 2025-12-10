import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import AnimatedTitle from "../AnimatedTitle";
import FeaturedProjectPoster from "./FeaturedProjectPoster";

const cardVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    scale: 0.98,
    transition: { duration: 0.35, ease: "easeIn" },
  }),
};

const Projects = () => {
  const featuredIndex = projects.findIndex((p) => p.featured);
  const [index, setIndex] = useState(
    featuredIndex !== -1 ? featuredIndex : 0
  );
  const [direction, setDirection] = useState(1);

  const showNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const showPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const currentProject = projects[index];

  return (
    <motion.section
      id="projects"
      className="section projects projects-section-poster"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container projects-poster-container">
        <div className="projects-header">
          <AnimatedTitle text="PROJECTS" />
        </div>

        {/* Navigation buttons */}
        <div className="poster-nav">
          <button className="poster-nav-btn" onClick={showPrev}>
            ← Previous
          </button>
          <span className="poster-nav-indicator">
            {index + 1} / {projects.length}
          </span>
          <button className="poster-nav-btn" onClick={showNext}>
            Next →
          </button>
        </div>

        {/* Animated project swap */}
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentProject.id}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <FeaturedProjectPoster project={currentProject} />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;
