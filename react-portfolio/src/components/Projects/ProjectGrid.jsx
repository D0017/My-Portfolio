import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectGrid = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!projects || projects.length === 0) return null;

  const activeProject = projects[activeIndex];
  const itemCount = projects.length;

  return (
    <div className="projects-arc-layout">
      <div className="projects-arc-row">
        {projects.map((project, index) => {
          const offset = index - activeIndex; 
          const clampedOffset = Math.max(-4, Math.min(4, offset));
          const abs = Math.abs(clampedOffset);

          const translateX = clampedOffset * 200;     
          const translateZ = 500 - abs * 500;           
          const rotateY = clampedOffset * -15;         

          const isActive = index === activeIndex;

          return (
            <motion.button
              key={project.id}
              type="button"
              className={`projects-arc-card-wrapper ${
                isActive ? "projects-arc-card-wrapper--active" : ""
              }`}
              initial={false}
              animate={{
                x: translateX,
                y: -50,
                z: translateZ,
                rotateY,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              onClick={() => setActiveIndex(index)}
              style={{
                "--card-hue": (index * 360) / itemCount,
              }}
            >
              <div className="projects-arc-card">
                {project.image && (
                  <div className="projects-arc-card-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="projects-arc-card-image"
                    />
                  </div>
                )}

                <div className="projects-arc-card-body">
                  <h3 className="projects-arc-card-title">{project.title}</h3>
                  {project.type && (
                    <p className="projects-arc-card-type">{project.type}</p>
                  )}

                  {project.description && (
                    <p className="projects-arc-card-desc">
                      {project.description.length > 70
                        ? project.description.slice(0, 70) + "…"
                        : project.description}
                    </p>
                  )}

                  {project.technologies && (
                    <div className="projects-arc-card-tags">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="projects-arc-tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="projects-arc-tag projects-arc-tag-more">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <motion.div
        key={activeProject.id}
        className="projects-arc-details"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h3 className="projects-arc-details-title">{activeProject.title}</h3>
        {activeProject.type && (
          <p className="projects-arc-details-type">{activeProject.type}</p>
        )}

        {activeProject.description && (
          <p className="projects-arc-details-desc">
            {activeProject.description}
          </p>
        )}

        {activeProject.technologies && (
          <div className="projects-arc-details-tags">
            {activeProject.technologies.map((tech) => (
              <span key={tech} className="projects-arc-details-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {activeProject.highlights && (
          <ul className="projects-arc-details-highlights">
            {activeProject.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        {(activeProject.github || activeProject.demo) && (
          <div className="projects-arc-details-links">
            {activeProject.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
                className="projects-arc-link-btn"
              >
                View Code
              </a>
            )}
            {activeProject.demo && (
              <a
                href={activeProject.demo}
                target="_blank"
                rel="noreferrer"
                className="projects-arc-link-btn projects-arc-link-btn--secondary"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectGrid;
