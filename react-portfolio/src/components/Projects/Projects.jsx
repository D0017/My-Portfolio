import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import AnimatedTitle from "../AnimatedTitle";
import FeaturedProjectPoster from "./FeaturedProjectPoster";
import ProjectCategoryAccordion from "./ProjectCategoryAccordion";

const MotionSection = motion.section;
const MotionDiv = motion.div;

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
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [direction, setDirection] = useState(1);

  const projectDetailsRef = useRef(null);
  const [shouldScrollToProject, setShouldScrollToProject] = useState(false);

  const filteredProjects = useMemo(() => {
    if (!activeCategory) return [];

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const selectedIndex = filteredProjects.findIndex(
    (project) => project.id === selectedProjectId
  );

  const currentProject =
    selectedIndex !== -1 ? filteredProjects[selectedIndex] : null;

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setSelectedProjectId(null);
  };

  const handleSelectProject = (projectId) => {
  setSelectedProjectId(projectId);
  setShouldScrollToProject(true);
};

  const showNext = useCallback(() => {
    if (filteredProjects.length === 0) return;

    setDirection(1);

    if (!currentProject) {
      setSelectedProjectId(filteredProjects[0].id);
      return;
    }

    const nextIndex = (selectedIndex + 1) % filteredProjects.length;
    setSelectedProjectId(filteredProjects[nextIndex].id);
  }, [filteredProjects, currentProject, selectedIndex]);

  const showPrev = useCallback(() => {
    if (filteredProjects.length === 0) return;

    setDirection(-1);

    if (!currentProject) {
      setSelectedProjectId(filteredProjects[0].id);
      return;
    }

    const prevIndex =
      selectedIndex === 0 ? filteredProjects.length - 1 : selectedIndex - 1;

    setSelectedProjectId(filteredProjects[prevIndex].id);
  }, [filteredProjects, currentProject, selectedIndex]);

  useEffect(() => {
    if (!currentProject || !shouldScrollToProject) return;

    const scrollTimer = window.setTimeout(() => {
      projectDetailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setShouldScrollToProject(false);
    }, 120);

    return () => window.clearTimeout(scrollTimer);
  }, [currentProject, shouldScrollToProject]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const tagName = event.target?.tagName?.toLowerCase();

      const isTyping =
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select" ||
        event.target?.isContentEditable;

      if (isTyping || !activeCategory) return;

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
  }, [activeCategory, showNext, showPrev]);

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

        <ProjectCategoryAccordion
          projects={projects}
          activeCategory={activeCategory}
          selectedProjectId={selectedProjectId}
          onSelectCategory={handleSelectCategory}
          onSelectProject={handleSelectProject}
        />

        {!currentProject && activeCategory && (
          <div className="project-select-hint">
            Select a project from the opened category to view the full project
            details.
          </div>
        )}

        {currentProject && (
          <>
            <div className="poster-slider-shell" ref={projectDetailsRef}>
              {filteredProjects.length > 1 && (
                <button
                  type="button"
                  className="poster-side-btn poster-side-btn--prev"
                  onClick={showPrev}
                  aria-label="Previous project"
                >
                  ←
                </button>
              )}

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

              {filteredProjects.length > 1 && (
                <button
                  type="button"
                  className="poster-side-btn poster-side-btn--next"
                  onClick={showNext}
                  aria-label="Next project"
                >
                  →
                </button>
              )}
            </div>

            <div className="poster-count">
              {selectedIndex + 1} / {filteredProjects.length}
            </div>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;