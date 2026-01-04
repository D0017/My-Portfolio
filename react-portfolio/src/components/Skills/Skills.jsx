import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import AnimatedTitle from "../AnimatedTitle";
import TopicFlowOverlay from "./TopicFlowOverlay";

const ICONS = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",

  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  rest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",

  kotlin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  android:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  mvvm: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  room: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",

  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",

  oop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  api: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  responsive:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
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

const mod = (n, m) => ((n % m) + m) % m;

const Skills = () => {
  const entries = useMemo(() => Object.entries(skills), []);
  const total = entries.length;

  const [activeIndex, setActiveIndex] = useState(() => Math.floor(total / 2));
  const move = (dir) => setActiveIndex((i) => mod(i + dir, total));

  // keyboard navigation
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "Home") setActiveIndex(0);
      if (e.key === "End") setActiveIndex(total - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [total]);

  // circular distance
  const circularOffset = (index) => {
    const raw = index - activeIndex;
    const half = Math.floor(total / 2);
    if (raw > half) return raw - total;
    if (raw < -half) return raw + total;
    return raw;
  };

  // Responsive 
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const slot = (offset) => {
    const abs = Math.abs(offset);

    let xStep = 260;
    let yStep = 130;
    let scaleDrop = 0.12;
    let rotateStep = -6;
    let maxVisible = 3; 

    if (isMobile) {
      xStep = 150;    
      yStep = 68;    
      scaleDrop = 0.10;
      rotateStep = -4;
      maxVisible = 2; 
    }

    const x = offset * xStep;
    const y = abs * yStep;
    const scale = 1 - abs * scaleDrop;
    const rotate = offset * rotateStep;

    const opacity =
      abs > maxVisible ? 0 : 1 - abs * (isMobile ? 0.22 : 0.18);

    const blur =
      abs === 0 ? 0 : Math.min(abs * (isMobile ? 0.6 : 0.8), isMobile ? 1.4 : 2.4);

    return { x, y, scale, rotate, opacity, blur, zIndex: 20 - abs };
  };

  // drag
  const handleDragEnd = (info) => {
    const threshold = isMobile ? 55 : 90;
    if (info.offset.x <= -threshold) move(1);
    if (info.offset.x >= threshold) move(-1);
  };

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

        <div className="skills-stage">
          {entries.map(([category, items], index) => {
            const offset = circularOffset(index);
            const s = slot(offset);
            const isActive = offset === 0;

            const prettyTitle =
              category.charAt(0).toUpperCase() + category.slice(1);

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
                  onDragEnd={(e, info) => handleDragEnd(info)}
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
          })}
        </div>

        <div className="skills-controls">
          <button className="skills-btn" onClick={() => move(-1)} aria-label="Previous">
            ←
          </button>
          <button className="skills-btn" onClick={() => move(1)} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
