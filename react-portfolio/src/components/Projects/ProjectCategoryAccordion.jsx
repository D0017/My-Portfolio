import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectCategories } from "../../data/projects";

const MotionSection = motion.section;
const MotionDiv = motion.div;

const ProjectCategoryAccordion = ({
  projects,
  activeCategory,
  selectedProjectId,
  onSelectCategory,
  onSelectProject,
}) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = projectCategories.map((category) => ({
    ...category,
    projects: projects.filter((project) => project.category === category.id),
  }));

  const openedCategory = hoveredCategory || activeCategory;

  const handleKeyboardSelect = (event, categoryId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelectCategory(categoryId);
    }
  };

  return (
    <div className="project-category-stage">

      <div
        className="project-category-accordion-v2"
        onMouseLeave={() => setHoveredCategory(null)}
      >
        {categories.map((category, index) => {
          const isOpen = openedCategory === category.id;
          const isClicked = activeCategory === category.id;
          const hasProjects = category.projects.length > 0;

          const previewProject =
            category.projects.find(
              (project) => project.id === selectedProjectId
            ) || category.projects[0];

          return (
            <motion.article
              key={category.id}
              tabIndex={0}
              role="button" 
              aria-expanded={isOpen}
              className={`category-panel-v2 ${isOpen ? "is-open" : ""} ${
                isClicked ? "is-clicked" : ""
              } ${!hasProjects ? "is-empty" : ""}`}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onFocus={() => setHoveredCategory(category.id)}
              onClick={() => onSelectCategory(category.id)}
              onKeyDown={(event) => handleKeyboardSelect(event, category.id)}             
            >
              <div className="category-minimal-head">
                <span className="category-index">
                  00-{index + 1}
                </span>

                <h4 className="category-minimal-title">
                  {category.title}
                </h4>

                <span className="category-count">
                  {category.projects.length} project
                  {category.projects.length === 1 ? "" : "s"}
                </span>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="category-expanded-content"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="category-expanded-left">
                      <div className="category-expanded-title">
                        <span>00-{index + 1}</span>
                        <strong>// {category.title}</strong>
                      </div>

                      <p className="category-expanded-desc">
                        {category.subtitle}
                      </p>

                      {hasProjects ? (
                        <div className="category-project-list-v2">
                          {category.projects.map((project) => {
                            const isSelected =
                              selectedProjectId === project.id;

                            return (
                              <button
                                key={project.id}
                                type="button"
                                className={`category-project-card-v2 ${
                                  isSelected ? "is-selected" : ""
                                }`}
                                onClick={() => {
                                  onSelectCategory(category.id);
                                  onSelectProject(project.id);
                                }}
                              >
                                <span>{project.title}</span>
                                <small>{project.stackLabel}</small>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="category-coming-soon">
                          Projects will be added here soon.
                        </div>
                      )}
                    </div>

                    <div className="category-expanded-preview">
                      {previewProject?.image ? (
                        <img
                          src={previewProject.image}
                          alt={previewProject.title}
                        />
                      ) : (
                        <div className="category-preview-empty">
                          No preview yet
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCategoryAccordion;