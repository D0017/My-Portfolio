import React, { useCallback, useEffect, useState } from "react";
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

const MotionSection = motion.section;
const MotionDiv = motion.div;

const Projects = () => {
  const totalProjects = projects.length;
  const featuredIndex = projects.findIndex((project) => project.featured);

  const [index, setIndex] = useState(featuredIndex !== -1 ? featuredIndex : 0);
  const [direction, setDirection] = useState(1);

  const showNext = useCallback(() => {
    if (totalProjects === 0) return;

    setDirection(1);
    setIndex((prev) => (prev + 1) % totalProjects);
  }, [totalProjects]);

  const showPrev = useCallback(() => {
    if (totalProjects === 0) return;

    setDirection(-1);
    setIndex((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
  }, [totalProjects]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      const tagName = target?.tagName?.toLowerCase();

      const isTyping =
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select" ||
        target?.isContentEditable;

      if (isTyping) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showNext, showPrev]);

  if (totalProjects === 0) return null;

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

        <div className="poster-slider-shell">
          <button
            type="button"
            className="poster-side-btn poster-side-btn--prev"
            onClick={showPrev}
            aria-label="Previous project"
          >
            ←
          </button>

          <div className="poster-slide-area">
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

          <button
            type="button"
            className="poster-side-btn poster-side-btn--next"
            onClick={showNext}
            aria-label="Next project"
          >
            →
          </button>
        </div>

        <div className="poster-count">
          {index + 1} / {totalProjects}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;