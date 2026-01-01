import React, { useEffect, useState, lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Intro from "./components/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import RenderOnView from "./components/RenderOnView";

const TRIGGER_POINT = 220;

const SectionLoader = ({ label }) => (
  <div style={{ padding: "3rem 0", textAlign: "center", opacity: 0.65 }}>
    Loading {label}…
  </div>
);

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

        <RenderOnView id="intro" rootMargin="900px" minHeight={600}>
          <Suspense fallback={<SectionLoader label="Intro" />}>
            <Intro />
          </Suspense>
        </RenderOnView>

        <Skills />
        <Projects />
        <Contact />
        
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
