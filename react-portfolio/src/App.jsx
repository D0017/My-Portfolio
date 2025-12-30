import React, { useEffect, useState, lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import RenderOnView from "./components/RenderOnView";

const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));

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

        <RenderOnView rootMargin="900px" minHeight={600}>
          <Suspense fallback={<SectionLoader label="About" />}>
            <About />
          </Suspense>
        </RenderOnView>

        <Intro />
        <Skills />

        <RenderOnView rootMargin="900px" minHeight={700}>
          <Suspense fallback={<SectionLoader label="Projects" />}>
            <Projects />
          </Suspense>
        </RenderOnView>

        <RenderOnView rootMargin="900px" minHeight={600}>
          <Suspense fallback={<SectionLoader label="Contact" />}>
            <Contact />
          </Suspense>
        </RenderOnView>
      </main>
      <Footer />
    </>
  );
};

export default App;
