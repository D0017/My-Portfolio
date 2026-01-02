import { motion } from "framer-motion";

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.35,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const CinematicHeading = ({ text }) => {
  const lines = text.split("\n");

  return (
    <div className="intro-heading">
      {lines.map((line, index) => (
        <motion.p
          key={index}
          className="intro-line"
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          variants={lineVariants}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

export default CinematicHeading;
