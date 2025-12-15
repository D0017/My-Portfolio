import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import AnimatedTitle from "../AnimatedTitle";
import TopicFlowOverlay from "./TopicFlowOverlay";

const Skills = () => {
  const entries = Object.entries(skills);
  const [activeIndex, setActiveIndex] = useState(0);
  const imgForCategory = (category) =>
    `https://picsum.photos/seed/${encodeURIComponent(category)}/600/400`;

  return (
    <motion.section
      id="skills"
      className="section skills-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-header-wrapper">
        <AnimatedTitle text="SKILLS" />
      </div>

      <div className="skills-strip">
        {entries.map(([category, items], index) => {
          const isActive = index === activeIndex;
          const labelNumber = `00-${index + 1}`;
          const prettyTitle = category.charAt(0).toUpperCase() + category.slice(1);

          return (
            <motion.div
              key={category}
              className={`skills-column ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              layout
            >
              <div className="skills-column-header">
                <span className="skills-index">{labelNumber}</span>
                <h3 className="skills-title">{prettyTitle}</h3>
                <TopicFlowOverlay
                  text={prettyTitle}
                  image={imgForCategory(category)}
                  active={isActive}
                />
              </div>

              <ul className="skills-list">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;
