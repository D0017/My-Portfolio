import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import AnimatedTitle from "../AnimatedTitle";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="section skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-header">
          <AnimatedTitle text="SKILLS" />
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="skills-card"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            >
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <ul>
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
