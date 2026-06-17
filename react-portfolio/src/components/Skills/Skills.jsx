import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import AnimatedTitle from "../AnimatedTitle";
import TopicFlowOverlay from "./TopicFlowOverlay";

const MotionSection = motion.section;
const MotionDiv = motion.div;

const ICONS = {
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  kotlin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",

  html5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  tailwindcss:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  expressjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  springboot:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  mongoose:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",

  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

  figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  mockflow:
    "https://www.svgrepo.com/show/354080/mockflow.svg",

  vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  androidstudio:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  mysqlworkbench:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  playwright:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
  pytest:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
};

const ICON_ALIASES = {
  "javascript": "javascript",
  "java": "java",
  "python": "python",
  "c": "c",
  "c++": "cpp",
  "kotlin": "kotlin",

  "html5": "html5",
  "html": "html5",
  "css3": "css3",
  "css": "css3",

  "react.js": "react",
  "react": "react",
  "tailwind css": "tailwindcss",
  "tailwind": "tailwindcss",
  "node.js": "nodejs",
  "node": "nodejs",
  "express.js": "expressjs",
  "express": "expressjs",
  "spring boot": "springboot",
  "spring": "springboot",
  "mongoose": "mongoose",

  "mysql": "mysql",
  "mongodb": "mongodb",

  "figma": "figma",
  "mockflow": "mockflow",

  "vite": "vite",
  "git": "git",
  "github": "github",
  "visual studio code": "vscode",
  "vs code": "vscode",
  "android studio": "androidstudio",
  "mysql workbench": "mysqlworkbench",

  "postman": "postman",
  "playwright": "playwright",
  "pytest": "pytest",
};

const iconsFor = (category, items) => {
  const picked = [];

  for (const skill of items) {
    const normalizedSkill = skill.toLowerCase().trim();
    const iconKey = ICON_ALIASES[normalizedSkill];

    if (iconKey && ICONS[iconKey]) {
      picked.push(ICONS[iconKey]);
    }

    if (picked.length >= 8) break;
  }

  return [...new Set(picked)];
};

const mod = (n, m) => ((n % m) + m) % m;

const formatTitle = (category) => category;
const Skills = () => {
  const entries = useMemo(() => Object.entries(skills), []);
  const total = entries.length;

  const [activeIndex, setActiveIndex] = useState(() => Math.floor(total / 2));
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false
  );

  const move = useCallback(
    (dir) => {
      setActiveIndex((index) => mod(index + dir, total));
    },
    [total]
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "Home") setActiveIndex(0);
      if (event.key === "End") setActiveIndex(total - 1);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [move, total]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 768px)");

    const handleChange = () => {
      setIsMobile(mq.matches);
    };

    handleChange();

    mq.addEventListener?.("change", handleChange);

    return () => {
      mq.removeEventListener?.("change", handleChange);
    };
  }, []);

  const circularOffset = (index) => {
    const raw = index - activeIndex;
    const half = Math.floor(total / 2);

    if (raw > half) return raw - total;
    if (raw < -half) return raw + total;

    return raw;
  };

  const slot = (offset) => {
    const abs = Math.abs(offset);

    const xStep = 260;
    const yStep = 130;
    const scaleDrop = 0.12;
    const rotateStep = -6;
    const maxVisible = 3;

    const x = offset * xStep;
    const y = abs * yStep;
    const scale = 1 - abs * scaleDrop;
    const rotate = offset * rotateStep;

    const opacity = abs > maxVisible ? 0 : 1 - abs * 0.18;
    const blur = abs === 0 ? 0 : Math.min(abs * 0.8, 2.4);

    return { x, y, scale, rotate, opacity, blur, zIndex: 20 - abs };
  };

  const handleDragEnd = (info) => {
    const threshold = isMobile ? 55 : 90;

    if (info.offset.x <= -threshold) move(1);
    if (info.offset.x >= threshold) move(-1);
  };

  const activeEntry = entries[activeIndex];

  if (!activeEntry) return null;

  const [activeCategory, activeItems] = activeEntry;
  const activeTitle = formatTitle(activeCategory);

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

      <div className="skills-stage-wrap">
        <div className="skills-hint">
          <span>Adaptability</span>
          <span className="dot" />
          <span>Creativity</span>
          <span className="dot" />
          <span>Collaboration</span>
        </div>

        {/* Mobile category buttons */}
        <div className="skills-mobile-tabs" aria-label="Skill categories">
          {entries.map(([category], index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={category}
                type="button"
                className={`skills-mobile-tab ${
                  isActive ? "is-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {formatTitle(category)}
              </button>
            );
          })}
        </div>

        <motion.div
          className={`skills-stage ${isMobile ? "skills-stage--mobile" : ""}`}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          whileHover={!isMobile ? { y: -5, scale: 1.01 } : undefined}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
        >
          {isMobile ? (
            <motion.article
              key={activeCategory}
              className="skills-card skills-mobile-active-card is-active"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 24,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(event, info) => handleDragEnd(info)}
            >
              <div className="skills-card-header">
                <TopicFlowOverlay
                  title={activeTitle}
                  icons={iconsFor(activeCategory, activeItems)}
                  active
                />
                <h3 className="skills-title">{activeTitle}</h3>
              </div>

              <ul className="skills-list">
                {activeItems.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.article>
          ) : (
            entries.map(([category, items], index) => {
              const offset = circularOffset(index);
              const s = slot(offset);
              const isActive = offset === 0;
              const prettyTitle = formatTitle(category);

              return (
                <div
                  key={category}
                  className="skills-card-anchor"
                  style={{ zIndex: s.zIndex }}
                  aria-hidden={s.opacity === 0}
                >
                  <motion.article
                    className={`skills-card ${isActive ? "is-active" : ""}`}
                    animate={{
                      x: s.x,
                      y: s.y,
                      scale: s.scale,
                      rotate: s.rotate,
                      opacity: s.opacity,
                      filter: `blur(${s.blur}px)`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 26,
                      mass: 0.9,
                    }}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    tabIndex={0}
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragEnd={(event, info) => handleDragEnd(info)}
                  >
                    <div className="skills-card-header">
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
                  </motion.article>
                </div>
              );
            })
          )}
        </motion.div>

        <div className="skills-controls">
          <button
            type="button"
            className="skills-btn"
            onClick={() => move(-1)}
            aria-label="Previous skill category"
          >
            ←
          </button>
          <button
            type="button"
            className="skills-btn"
            onClick={() => move(1)}
            aria-label="Next skill category"
          >
            →
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;