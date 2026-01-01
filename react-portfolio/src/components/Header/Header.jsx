import React, { useEffect, useId, useRef, useState } from "react";
import "./Header.css";
import { motion, AnimatePresence } from "framer-motion";

const MOBILE_BREAKPOINT = 720;

const Header = ({ showAvatarInNav }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const menuId = useId();
  const drawerRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const year = new Date().getFullYear();
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  const goTop = () => {
    closeMenu();
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -65% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // resize effect
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Body scroll lock
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

  const navItems = [
    { label: "About", href: "#about", sectionId: "about" },
    { label: "Skills", href: "#skills", sectionId: "skills" },
    { label: "Projects", href: "#projects", sectionId: "projects" },
    { label: "Contact", href: "#contact", sectionId: "contact" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <nav className="pill-nav">
          {/* Logo */}
          <div className="pill-nav-left">
            <button
              type="button"
              className="pill-logo-btn"
              title="PRAVEEN DINUWARA"
              onClick={goTop}
            >
              <span className="pill-logo-initial">P</span>
              <span className="pill-logo-text">Praveen Dinuwara</span>
            </button>
          </div>

          {/*  Navigation Links  */}
          <div className="pill-nav-center">
            <ul className="pill-nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={`pill-nav-link ${activeSection === item.sectionId ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    <span className="pill-link-text">{item.label}</span>
                    <span className="pill-link-indicator" />
                    <span className="active-indicator-dot" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Avatar + Mobile Toggle */}
          <div className="pill-nav-right">
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

            {/* Mobile Menu Toggle */}
            <button
              ref={toggleBtnRef}
              type="button"
              className={`pill-menu-toggle ${menuOpen ? "is-open" : ""}`}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={toggleMenu}
            >
              <span className="pill-toggle-bar" />
              <span className="pill-toggle-bar" />
              <span className="pill-toggle-bar" />
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div
          id={menuId}
          ref={drawerRef}
          className={`pill-mobile-drawer ${menuOpen ? "is-open" : ""}`}
          aria-hidden={!menuOpen && window.innerWidth <= MOBILE_BREAKPOINT}
        >
          <div className="pill-drawer-content">
            {/* Drawer Header */}
            <div className="pill-drawer-header">
              <button
                type="button"
                className="pill-drawer-logo"
                onClick={goTop}
              >
                <span className="pill-drawer-logo-initial">HOME</span>
              </button>
              <span className="pill-drawer-title">Jump To</span>
              
              {/* Close Button */}
              <button
                type="button"
                className="pill-drawer-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <ul className="pill-drawer-menu">
              {navItems.map((item, index) => (
                <li key={item.label} className="pill-drawer-item">
                  <a 
                    href={item.href} 
                    className={`pill-drawer-link ${activeSection === item.sectionId ? "active" : ""}`}
                    onClick={closeMenu}
                    style={{ '--delay': `${index * 0.05}s` }}
                  >
                    <span className="pill-drawer-link-number">0{index + 1}</span>
                    <span className="pill-drawer-link-text">{item.label}</span>
                    <span className="pill-drawer-link-indicator" />
                    <span className="pill-drawer-link-arrow">→</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="pill-drawer-footer">
              <div className="pill-drawer-avatar">
                <img 
                  src={`${import.meta.env.BASE_URL}profile2.jpg`}
                  alt="Profile"
                  className="pill-drawer-avatar-img"
                />
              </div>
              <p className="pill-drawer-footer-text">© {year} Praveen Dinuwara. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;