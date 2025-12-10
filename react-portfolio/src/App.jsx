import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Intro from "./components/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [showAvatarInNav, setShowAvatarInNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 220; 
      setShowAvatarInNav(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header showAvatarInNav={showAvatarInNav} />
      <main>
        <Hero showAvatarInNav={showAvatarInNav} />
        <About />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
