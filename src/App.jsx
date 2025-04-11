import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import LoadingScreen from './components/LoadingScreen.jsx';
import Navbar from './components/Navbar.jsx';
import IntroSection from './components/IntroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import TechStackSection from './components/TechStackSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import TeamSection from './components/TeamSection.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <AnimatePresence>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />
            <main>
              <IntroSection/>
              <AboutSection/>
              <TechStackSection/>
              <ProjectsSection/>
              <TestimonialsSection/>
              <TeamSection/>
              <ContactSection/>
            </main>
            <Footer/>
            <WhatsAppButton phoneNumber="+94763362873" />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;