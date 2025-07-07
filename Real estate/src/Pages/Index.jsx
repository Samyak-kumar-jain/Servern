import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '../Components/Heros';
import Properties from '../Components/Properties';
import About from '../Components/AboutPage';
import Contact from '../Components/Contact';

const Index = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
    <div className="min-h-screen px-5  bg-gray-50">
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Properties />
      <About />
      <Contact />

      
    </div>
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 DreamHome Real Estate. All rights reserved.
          </p>
        </div>
      </footer>
      </>
  );
};

export default Index;
