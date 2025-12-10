import React from "react";
import { motion } from "framer-motion";

const AnimatedFooterTitle = ({ text }) => {
  const letters = text.split("");

  const letterVariants = {
    hidden: {
      y: 80,        
      opacity: 0,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.08, 
      },
    }),
  };

  return (
    <motion.h2
      className="footer-big-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} 
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

export default AnimatedFooterTitle;
