import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import CodeBackground from './components/animation/ParticlesBackground';

function App() {
  return (
    <>
      <GlobalStyles />
      <CodeBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
