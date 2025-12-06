import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import AnimatedTitle from "../AnimatedTitle";
import ProjectGrid from "./ProjectGrid"; 

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="section projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-header">
          <AnimatedTitle text="PROJECTS" />
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </motion.section>
  );
};

export default Projects;
