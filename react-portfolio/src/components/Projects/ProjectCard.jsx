import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      className="project-card-modern"
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {project.image && (
        <div className="project-card-media">
          <img
            src={project.image}
            alt={project.title}
            className="project-card-media-img"
          />
          <div className="project-card-media-overlay" />
        </div>
      )}

      <div className="project-card-body">
        <div className="project-card-meta-row">
          {project.type && (
            <span className="project-card-type-pill">{project.type}</span>
          )}

          {project.year && (
            <span className="project-card-year-pill">{project.year}</span>
          )}
        </div>

        <h3 className="project-card-title">{project.title}</h3>

        {project.description && (
          <p className="project-card-desc">
            {project.description.length > 110
              ? project.description.slice(0, 110) + "…"
              : project.description}
          </p>
        )}

        {project.technologies && (
          <div className="project-card-tags">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="project-card-tag">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="project-card-tag project-card-tag-more">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        {(project.github || project.demo) && (
          <div className="project-card-links">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="project-card-link project-card-link--primary"
              >
                Live demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-card-link"
              >
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
