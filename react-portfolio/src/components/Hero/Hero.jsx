import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RingLettersLoader from "./RingLettersLoader";

const LOADING_DURATION = 3500;
const TypingText = ({ text, speed = 30, className = "" }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let frame;

    const type = () => {
      setDisplayed(text.slice(0, i + 1));
      i += 1;
      if (i < text.length) {
        frame = setTimeout(type, speed);
      }
    };

    type();

    return () => {
      clearTimeout(frame);
    };
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
};

const Hero = ({ showAvatarInNav }) => {
  const [introDone, setIntroDone] = useState(false);

  //flip control 
  const [isFlipping, setIsFlipping] = useState(false);
  const [showProfileImage, setShowProfileImage] = useState(false); 

  useEffect(() => {
    if (!introDone) {
      document.documentElement.classList.add("intro-active");

      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const flipStart = setTimeout(() => {
        setIsFlipping(true);
      }, 3500); 

      const swapImage = setTimeout(() => {
        setShowProfileImage(true);
      }, 3800); 

      const timer = setTimeout(() => {
        setIntroDone(true);
        document.body.style.overflow = previousOverflow || "";
        document.documentElement.classList.add("intro-done");
      }, 4300);

      return () => {
        clearTimeout(timer);
        clearTimeout(flipStart);
        clearTimeout(swapImage);
        document.body.style.overflow = previousOverflow || "";
      };
    }
  }, [introDone]);

  return (
    <>
      {/* Intro overlay */}
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
              initial={{ scale: 0.8, y: -25, opacity: 0, rotateY: 0 }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                rotateY: isFlipping ? [0, 90, 0] : 0,
              }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{
                scale: { type: "spring", stiffness: 450, damping: 24 },
                y: { type: "spring", stiffness: 450, damping: 24 },
                opacity: { duration: 0.4 },
                rotateY: isFlipping
                  ? { duration: 0.6, ease: "easeInOut" }
                  : { duration: 0 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {showProfileImage ? (
                <img src="/profile2.jpg" alt="Profile" className="hero-image" />
              ) : (
                <div className="hero-loading-avatar">
                  <RingLettersLoader
                    size={260}
                    text="Builder  Developer  Designer  Analyst  Innovator"
                    durationMs={LOADING_DURATION}
                    cloudSpread={1500}
                    wordsOuter="Problem-Solver Developer Analyst Architect"
                    wordsMid="PORTFOLIO UI UX"
                    wordsInner="CODE BUILD CREATE"
                    rings={[
                      { count: 48, radius: 112, speed: 0.75, fontSize: 14, opacity: 0.95 },
                      { count: 36, radius: 86,  speed: -0.52, fontSize: 12, opacity: 0.80 },
                      { count: 24, radius: 60,  speed: 0.40, fontSize: 10, opacity: 0.65 },
                    ]}
                  />
                </div>
              )}

            </motion.div>

            <div className="hero-loader-wrapper">
              <div className="hero-loader-bar">
                <motion.div
                  className="hero-loader-bar-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: LOADING_DURATION / 1000,
                    ease: "linear",
                  }}
                />
              </div>
              <p className="hero-loader-text">
                Crafting the details...
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
                />
              )}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 10 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.4 }}
            >
              <a href="#projects" className="btn btn-Vproject">
                View Projects
              </a>
              <a href="#contact" className="btn btn-Contact">
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Avatar in final position */}
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
                  src="/profile2.jpg"
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
