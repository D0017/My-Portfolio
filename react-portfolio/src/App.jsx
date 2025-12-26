import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Intro from "./components/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const TRIGGER_POINT = 220;

const App = () => {
  const [showAvatarInNav, setShowAvatarInNav] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY || 0;
      setShowAvatarInNav(y > TRIGGER_POINT);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true }); 
    return () => window.removeEventListener("scroll", onScroll);
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
      <Footer />
    </>
  );
};

export default App;
