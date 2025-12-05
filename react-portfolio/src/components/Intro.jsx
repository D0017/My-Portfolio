import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CinematicHeading from "./CinematicHeading";

const Intro = () => {

const sectionRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start center", "end start"], 
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const fallY = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, 120]);

  return (
    <motion.section
      ref={sectionRef}
      className="introduction"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      
    >
      <motion.div 
      className="intro-banner"
      style={{
          opacity,
          y: fallY,
        }}
      >
        <CinematicHeading 
          text={`TO ME, PROBLEM-SOLVING IS A CRAFT.\n IT'S THE PATIENCE OF A DESIGNER,\n THE PRECISION OF A DEVELOPER, \nAND THE CURIOSITY OF A DETECTIVE, \nALL FOCUSED ON CREATING A BETTER DIGITAL WORLD.`}
        />
      </motion.div>

    </motion.section>
    
  );
};

export default Intro;
