import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import AnimatedTitle from "../AnimatedTitle";
import FeaturedProjectPoster from "./FeaturedProjectPoster";

const Projects = () => {
  const featuredProject =
    projects.find((p) => p.featured) || projects[0] || null;

  return (
    <motion.section
      id="projects"
      className="section projects projects-section-poster"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container projects-poster-container">
        <div className="projects-header">
          <AnimatedTitle text="PROJECTS" />
        </div>

        <FeaturedProjectPoster project={featuredProject} />
      </div>
    </motion.section>
  );
};

export default Projects;
