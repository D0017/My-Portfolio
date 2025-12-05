import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import AnimatedTitle from "../AnimatedTitle";

const Skills = () => {
  const entries = Object.entries(skills); 
  const [activeIndex, setActiveIndex] = useState(0); 

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
          const labelNumber = `00-${index + 1}`;   // <-- added

          return (
            <motion.div
              key={category}
              className={`skills-column ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              layout
            >
              <div className="skills-column-header">
                <span className="skills-index">{labelNumber}</span>
                <h3 className="skills-title">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
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
