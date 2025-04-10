import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center pt-20 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                Innovate. Create. Transform.
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              We build cutting-edge software solutions that drive digital transformation and empower businesses to reach their full potential.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center md:justify-start">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Image and Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                alt="Digital transformation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30" />
            </div>

            {/* Floating Circles */}
            <motion.div
            className="hidden sm:block absolute -bottom-12 -right-12 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              }}
              />
            <motion.div
              className="absolute sm:block -top-12 -left-12 w-24 h-24 bg-purple-500/10 dark:bg-purple-500/20 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
