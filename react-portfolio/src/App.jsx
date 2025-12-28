import React, { useEffect, useState, lazy, Suspense } from "react";

const Header = lazy(() => import("./components/Header/Header"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const About = lazy(() => import("./components/About/About"));
const Intro = lazy(() => import("./components/Intro"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

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
    <Suspense fallback={null}>
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
    </Suspense>
  );
};

export default App;
