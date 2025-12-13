import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TypingText = ({ text, speed = 30, className = "", onComplete }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let timer;

    const type = () => {
      setDisplayed(text.slice(0, i + 1));
      i += 1;
      if (i < text.length) {
        timer = setTimeout(type, speed);
      } else if (onComplete) {
        onComplete();
      }
    };

    type();

    return () => {
      clearTimeout(timer);
    };
  }, [text, speed, onComplete]);

  return <span className={className}>{displayed}</span>;
};

const Hero = ({ showAvatarInNav }) => {
  const [introDone, setIntroDone] = useState(false);
  const [showActions, setShowActions] = useState(false);

  // Lock scroll during intro
  useEffect(() => {
    if (!introDone) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        setIntroDone(true);
        document.body.style.overflow = previousOverflow || "";
      }, 2300); 

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = previousOverflow || "";
      };
    }
  }, [introDone]);

  return (
    <>
      {/* Intro  */}
      <AnimatePresence>
        {!introDone && !showAvatarInNav && (
          <motion.div
            className="hero-intro-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              layoutId="profile-avatar"
              className="hero-intro-avatar"
              initial={{ scale: 0.8, y: -25, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 450, damping: 24 }}
            >
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="hero-image"
              />
            </motion.div>

            <div className="hero-loader-wrapper">
              <div className="hero-loader-bar">
                <motion.div
                  className="hero-loader-bar-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.7, ease: "easeInOut" }}
                />
              </div>
              <p className="hero-loader-text">
                Preparing your experience...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main hero */}
      <section id="hero" className="hero-full">
        <div className="container hero-inner">
          <div className="hero-content">
            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 12 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 16 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              Praveen Dinuwara
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 12 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.35 }}
            >
              {introDone && (
                <TypingText
                  text="IT undergraduate at SLIIT & Practical Problem Solver."
                  speed={25}
                />
              )}
            </motion.p>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 12 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.7 }}
            >
              {introDone && (
                <TypingText
                  text="I convert practical challenges into impactful outcomes by designing solutions that create tangible value in real use scenarios."
                  speed={12}
                  onComplete={() => setShowActions(true)}
                />
              )}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 16 }}
              animate={
                showActions
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              transition={{ duration: 0.45 }}
              style={{
                pointerEvents: showActions ? "auto" : "none",
              }}
            >
              <a href="#projects" className="btn btn-Vproject">
                View Projects
              </a>
              <a href="#contact" className="btn btn-Contact">
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Avatar in final position  */}
          <AnimatePresence>
            {!showAvatarInNav && introDone && (
              <motion.div
                layoutId="profile-avatar"
                className="hero-avatar-wrapper"
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
              >
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="hero-image"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Hero;
