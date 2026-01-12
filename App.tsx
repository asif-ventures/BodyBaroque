
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Story from './components/Story';
import Concept from './components/Concept';
import StyleMapping from './components/StyleMapping';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <section id="vision">
          <Vision />
        </section>
        <section id="story">
          <Story />
        </section>
        <section id="concept">
          <Concept />
        </section>
        <section id="mapping" className="bg-white py-20">
          <StyleMapping />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
