import React from "react";
import { motion } from "framer-motion";

const AnimatedTitle = ({ text }) => {
  const letters = text.split("");

  const letterVariants = {
    hidden: (i) => ({
      y: i % 2 === 0 ? -70 : 70,  
      opacity: 0,
    }),
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.10, 
      },
    }),
  };

  return (
    <motion.h2
      className="big-section-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedTitle;
