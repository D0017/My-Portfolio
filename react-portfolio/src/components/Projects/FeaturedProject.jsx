import React from "react";
import { motion } from "framer-motion";

const FeaturedProject = ({ project }) => {
  if (!project) return null;

  return (
    <motion.section
      className="projects-featured"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-featured-label-row">
        <span className="projects-featured-pill">Featured Project</span>
        {project.year && (
          <span className="projects-featured-year">{project.year}</span>
        )}
      </div>

      <div className="projects-featured-layout">

        {project.image && (
          <motion.div
            className="projects-featured-media"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="projects-featured-img"
            />
            <div className="projects-featured-media-overlay" />
          </motion.div>
        )}

        <div className="projects-featured-content">
          <h3 className="projects-featured-title">{project.title}</h3>

          {project.type && (
            <p className="projects-featured-type">{project.type}</p>
          )}

          {project.description && (
            <p className="projects-featured-desc">{project.description}</p>
          )}

          {project.technologies && (
            <div className="projects-featured-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="projects-featured-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {(project.github || project.demo) && (
            <div className="projects-featured-links">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="projects-featured-btn projects-featured-btn--primary"
                >
                  Live demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="projects-featured-btn"
                >
                  View code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProject;
