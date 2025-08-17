import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ModernHero from './components/ModernHero';
import { GlobalStyle, Section, lightTheme, darkTheme, Button } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const controls = useAnimation();
  const isAnimating = useRef(false);

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const handler = async (e) => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      await controls.start({
        rotateY: 18,
        scale: 0.96,
        transition: { duration: 0.22, ease: [0.4, 0.1, 0.2, 1] }
      });
      await controls.start({
        rotateY: 0,
        scale: 1,
        transition: { duration: 0.38, ease: [0.4, 0.1, 0.2, 1] }
      });
      isAnimating.current = false;
    };
    window.addEventListener('trigger3DScroll', handler);
    return () => window.removeEventListener('trigger3DScroll', handler);
  }, [controls]);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar />
      <div style={{ position: 'fixed', top: 18, right: 24, zIndex: 200 }}>
        <Button onClick={() => setDark(d => !d)}>
          {dark ? '🌙 Dark' : '☀️ Light'}
        </Button>
      </div>
      <motion.div animate={controls} style={{ willChange: 'transform' }}>
        <Section id="about">
          <About />
        </Section>
        <Section id="work-experience">
          <Experiences />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </motion.div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
