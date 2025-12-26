import React, { useEffect, useState } from "react";
import "./Header.css";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ showAvatarInNav }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <div className="logo">PRAVEEN DINUWARA</div>

          <div className="nav-avatar-slot">
            <AnimatePresence>
              {showAvatarInNav && (
                <motion.img
                  layoutId="profile-avatar"
                  src={`${import.meta.env.BASE_URL}profile2.jpg`}
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

        <button
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
