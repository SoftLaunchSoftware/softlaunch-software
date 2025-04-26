import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const IntroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Array of words for the animated heading
  const animatedWords = ["Explore.", "Evolve.", "Elevate."];

  return (
    <section
      id="intro"
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            className="text-center md:text-left mt-8 md:mt-0"
          >
            {/* Animated Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative h-24 md:h-32 flex flex-col items-center md:items-start justify-center"
            >
              {animatedWords.map((word, index) => (
                <motion.span
                  key={word}
                  className="absolute text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [20, 0, 0, -20],
                  }}
                  transition={{
                    times: [0, 0.1, 0.9, 1],
                    duration: 3,
                    delay: index * 3,
                    repeat: Infinity,
                    repeatDelay: animatedWords.length * 3 - 3,
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span 
                className="absolute bottom-0 left-0 right-0 md:left-auto md:right-auto h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2"
                initial={{ width: 0, opacity: 0 }}
                animate={{ 
                  width: [0, 64, 64, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  times: [0, 0.1, 0.9, 1],
                  duration: 9,
                  repeat: Infinity,
                }}
              />
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
            >
              We build cutting-edge software solutions that drive digital transformation and empower businesses to reach their full potential.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center md:justify-start"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
            
            {/* Added floating badges for mobile and desktop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="hidden md:flex gap-4 mt-12"
            >
              {['Innovative', 'Reliable', 'Scalable'].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.3 + index * 0.2 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 shadow-md"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image and Animation */}
          <motion.div
            variants={imageVariants}
            className="relative w-full max-w-md mx-auto md:max-w-none"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="w-full h-64 sm:h-72 md:h-96 rounded-xl overflow-hidden relative shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-10" />
              
              <motion.img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                alt="Digital transformation"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              
              {/* Floating elements for visual interest */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full backdrop-blur-sm z-20 hidden"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-12 h-12 bg-purple-500/20 rounded-full backdrop-blur-sm z-20 hidden"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut", 
                  delay: 0.5
                }}
              />
            </motion.div>
            
            {/* Tags for mobile view */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex md:hidden justify-center gap-3 mt-6"
            >
              {['Innovative', 'Reliable', 'Scalable'].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.3 + index * 0.2 }}
                  className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs font-medium text-blue-600 dark:text-blue-400 shadow-md"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroSection;