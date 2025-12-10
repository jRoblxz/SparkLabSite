// src/App.tsx
import { useState, useEffect } from 'react';
import '@/App.css';

// Importe os novos componentes de seção
import Navigation  from '@/pages/sections/Navigation/Navigation';
import { HeroSection } from '@/pages/sections/HeroSection/HeroSection';
import { AboutSection } from '@/pages/sections/AboutSection/AboutSection';
import { SkillsSection } from '@/pages/sections/Skills/SkillSection';
import { ProjectsSection } from '@/pages/sections/ProjectsSection/ProjectSection';
import { Footer } from '@/pages/sections/Footer/Footer';

function Portfólio() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1c1c] text-[#e4e0d7]">
      <Navigation />

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default Portfólio;