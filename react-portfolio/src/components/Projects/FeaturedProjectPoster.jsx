import React from "react";

const FeaturedProjectPoster = ({ project }) => {
  if (!project) return null;

  return (
    <div className="poster-wrapper">
      <div className="poster-bg-shape poster-bg-shape--left" />
      <div className="poster-bg-shape poster-bg-shape--right" />

      <div className="poster-card">
        <div className="poster-content">
          <div className="poster-eyebrow-row">
            {project.featured && <span className="poster-pill">Featured project</span>}
          </div>

          <h3 className="poster-title">{project.title}</h3>

          {project.type && <p className="poster-type">{project.type}</p>}

          {project.description && (
            <p className="poster-desc">{project.description}</p>
          )}

          {project.technologies && (
            <div className="poster-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="poster-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="poster-stats-row">
            <div className="poster-stat">
              <span className="poster-stat-label">Stack</span>
              <span className="poster-stat-value">
                {project.stackLabel || "-"}
              </span>
            </div>
            <div className="poster-stat">
              <span className="poster-stat-label">Role</span>
              <span className="poster-stat-value">
                {project.role || "End-to-end design & development"}
              </span>
            </div>
          </div>

          {(project.github || project.demo) && (
            <div className="poster-actions">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="poster-btn poster-btn--primary"
                >
                  View live demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="poster-btn poster-btn--ghost"
                >
                  View source code
                </a>
              )}
            </div>
          )}
        </div>

        {/* image frame */}
        <div className="poster-visual">
          <div className="poster-main-frame">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="poster-main-img"
              />
            ) : (
              <div className="poster-main-placeholder">
                <span>Demo preview</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectPoster;
