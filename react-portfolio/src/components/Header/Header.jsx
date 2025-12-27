import React, { useEffect, useId, useRef, useState } from "react";
import "./Header.css";
import { motion, AnimatePresence } from "framer-motion";

const MOBILE_BREAKPOINT = 720;

const Header = ({ showAvatarInNav }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const drawerRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  const goTop = () => {
  closeMenu(); 
  const hero = document.getElementById("hero");
  if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
};


  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const body = document.body;
    const root = document.documentElement;

    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - root.clientWidth;
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (e) => {
      const drawer = drawerRef.current;
      const toggle = toggleBtnRef.current;

      if (drawer?.contains(e.target)) return;
      if (toggle?.contains(e.target)) return;

      closeMenu();
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen]);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <button
            type="button"
            className="logo logo-btn"
            title="PRAVEEN DINUWARA"
            onClick={goTop}
          >
            PRAVEEN DINUWARA
          </button>
          <div className="nav-avatar-slot">
            <AnimatePresence>
              {showAvatarInNav && (
                <motion.img
                  layoutId="profile-avatar"
                  src={`${import.meta.env.BASE_URL}profile2.jpg`}
                  alt="Profile"
                  className="nav-avatar-img"
                  initial={false}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: window.innerWidth <= MOBILE_BREAKPOINT ? 0.25 : 0.45,
                    ease: "easeOut",
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          ref={toggleBtnRef}
          type="button"
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={toggleMenu}
        >
          <span />
          <span />
        </button>

        <ul
          id={menuId}
          ref={drawerRef}
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          aria-hidden={!menuOpen && window.innerWidth <= MOBILE_BREAKPOINT}
        >
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
