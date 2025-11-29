import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {project.image && (
        <div className="project-image-wrapper">
          <img src={project.image} alt={project.title} className="project-image" />
        </div>
      )}

      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-type">{project.type}</p>
        <p className="project-desc">{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {project.highlights && (
          <ul className="project-highlights">
            {project.highlights.map((h, index) => (
              <li key={index}>{h}</li>
            ))}
          </ul>
        )}

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              View Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
