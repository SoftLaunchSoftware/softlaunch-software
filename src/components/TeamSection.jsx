import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Kavishka Janith",
      position: "Software Engineer",
      image: "https://i.postimg.cc/CK4CNBCc/kavishka.jpg",
      linkedin: "https://www.linkedin.com/in/kavishka-janith-9335b72b6/",
      github: "https://github.com/kavishkajanith29"
    },
    {
      name: "Kavindu Nisanga",
      position: "Software Engineer",
      image: "https://i.postimg.cc/wB9L7xKL/kavindu.jpg"
    },
    {
      name: "Ashan Shanuka",
      position: "AI ML Engineer",
      image: "https://i.postimg.cc/3JDgqbC4/ashan.jpg"
    },
    {
      name: "Pawan Dinendra",
      position: "Software Engineer",
      image: "https://i.postimg.cc/9f1TT3VS/pawan.jpg"
    },
    {
      name: "Sahan Walpolagedara",
      position: "Data Analyst /Full-Stack Developer",
      image: "https://i.postimg.cc/G22DxMmp/sahan.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  const carouselRef = useRef(null);
  
  // Check if screen is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const getVisibleIndices = () => {
    if (isMobile) {
      // On mobile, only show current index
      return [currentIndex];
    } else {
      // On desktop, show 3 cards
      const totalMembers = teamMembers.length;
      const prevIndex = (currentIndex - 1 + totalMembers) % totalMembers;
      const nextIndex = (currentIndex + 1) % totalMembers;
      return [prevIndex, currentIndex, nextIndex];
    }
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 100);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 100);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 1 : -1);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 100);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8
      };
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30
        }
      };
    }
  };

  const cardVariants = {
    left: { 
      scale: 0.85, 
      opacity: 0.7, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    },
    center: { 
      scale: 1.15, 
      opacity: 1, 
      y: -20,
      zIndex: 20,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 30 
      }
    },
    right: { 
      scale: 0.85, 
      opacity: 0.7, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    }
  };

  return (
    <section id="team" className="py-20 px-4 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Meet Our Team
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            The talented individuals behind our success, dedicated to turning your vision into reality.
          </p>
        </motion.div>

        <div className="relative py-12">
          {/* Mobile Carousel */}
          {isMobile && (
            <div className="overflow-hidden mx-auto max-w-sm" ref={carouselRef}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`mobile-${currentIndex}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform">
                    <div className="p-6">
                      <div className="flex flex-col items-center mb-6">
                        <motion.div 
                          className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 mb-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <img 
                            src={teamMembers[currentIndex].image} 
                            alt={teamMembers[currentIndex].name} 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{teamMembers[currentIndex].name}</h3>
                          <p className="text-blue-600 dark:text-blue-400">{teamMembers[currentIndex].position}</p>
                        </div>
                      </div>
                      <div className="mt-6 flex justify-center space-x-4">
                        {teamMembers[currentIndex].linkedin && (
                          <motion.a 
                            href={teamMembers[currentIndex].linkedin} 
                            className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: "#0077b5" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                            </svg>
                          </motion.a>
                        )}
                        {teamMembers[currentIndex].github && (
                          <motion.a 
                            href={teamMembers[currentIndex].github} 
                            className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: "#333" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* Desktop Carousel */}
          {!isMobile && (
            <div className="relative mx-auto max-w-6xl px-8">
              <div className="flex justify-center items-center gap-4 md:gap-8 h-96">
                {getVisibleIndices().map((memberIndex, i) => {
                  const position = i === 0 ? "left" : i === 1 ? "center" : "right";
                  return (
                    <motion.div
                      key={`desktop-${memberIndex}`}
                      className="w-full max-w-xs"
                      variants={cardVariants}
                      initial={position}
                      animate={position}
                      style={{ zIndex: position === "center" ? 20 : 10 }}
                    >
                      <div className={`bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-500 h-full
                        ${position === "center" ? "shadow-xl ring-4 ring-blue-500/20" : ""}
                      `}>
                        <motion.div 
                          className="p-6 h-full flex flex-col"
                          whileHover={{ y: position === "center" ? 0 : -5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                          <div className="flex flex-col items-center mb-4 flex-grow">
                            <motion.div 
                              className={`w-28 h-28 rounded-full overflow-hidden border-4 mb-4
                                ${position === "center" 
                                  ? "border-blue-300 dark:border-blue-700 w-32 h-32" 
                                  : "border-blue-100 dark:border-blue-900"
                                }
                              `}
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <img 
                                src={teamMembers[memberIndex].image} 
                                alt={teamMembers[memberIndex].name} 
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                            <div className="text-center">
                              <h3 className={`font-bold text-gray-900 dark:text-white ${position === "center" ? "text-2xl" : "text-lg"}`}>
                                {teamMembers[memberIndex].name}
                              </h3>
                              <p className="text-blue-600 dark:text-blue-400">{teamMembers[memberIndex].position}</p>
                            </div>
                          </div>
                          <div className="mt-auto flex justify-center space-x-4">
                            {teamMembers[memberIndex].linkedin && (
                              <motion.a 
                                href={teamMembers[memberIndex].linkedin} 
                                className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, color: "#0077b5" }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg className={`${position === "center" ? "h-6 w-6" : "h-5 w-5"}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                                </svg>
                              </motion.a>
                            )}
                            {teamMembers[memberIndex].github && (
                              <motion.a 
                                href={teamMembers[memberIndex].github} 
                                className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, color: "#333" }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <span className="sr-only">GitHub</span>
                                <svg className={`${position === "center" ? "h-6 w-6" : "h-5 w-5"}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                              </motion.a>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-30"
            aria-label="Previous team member"
            disabled={isAnimating}
            style={{ 
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-30"
            aria-label="Next team member"
            disabled={isAnimating}
            style={{ 
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 w-3'
                }`}
                aria-label={`Go to team member ${index + 1}`}
                disabled={isAnimating}
                style={{ 
                  boxShadow: index === currentIndex ? "0 2px 4px rgba(59, 130, 246, 0.3)" : "none"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;