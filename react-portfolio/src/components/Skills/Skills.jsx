import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import AnimatedTitle from "../AnimatedTitle";
import TopicFlowOverlay from "./TopicFlowOverlay";

const ICONS = {
  // Frontend
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",

  // Backend
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  rest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",

  // Mobile
  kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  android: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  mvvm: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  room: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",

  // Databases
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  // Tools
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",

  // Concepts
  oop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  api: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  responsive: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  agile: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
};

const iconsFor = (category, items) => {
  const picked = [];
  for (const raw of items) {
    const key = raw.toLowerCase().replace(/[^a-z]/g, "");

    const foundKey = Object.keys(ICONS).find((k) => key.includes(k));
    if (foundKey) picked.push(ICONS[foundKey]);

    if (picked.length >= 8) break; 
  }

  return [...new Set(picked)];
};

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
          const prettyTitle =
            category.charAt(0).toUpperCase() + category.slice(1);

          return (
            <motion.div
              key={category}
              className={`skills-column ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              layout
            >
              <div className="skills-column-header">
                <TopicFlowOverlay
                  title={prettyTitle}
                  icons={iconsFor(category, items)}
                  active={isActive}
                />
                 <h3 className="skills-title">{prettyTitle}</h3>
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
