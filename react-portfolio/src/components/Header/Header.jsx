import React from "react";
import "./Header.css";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ showAvatarInNav }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <div className="logo">PRAVEEN DINUWARA</div>

          {/* Circular slot */}
          <div className="nav-avatar-slot">
            <AnimatePresence>
              {showAvatarInNav && (
                <motion.img
                  layoutId="profile-avatar"
                  src="/profile.jpeg"
                  alt="Profile"
                  className="nav-avatar-img"
                  initial={{ opacity: 0, scale: 0.4, rotate: 4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.6, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 520, damping: 20 }}

                />
              )}
            </AnimatePresence>
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
