import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50 transition-colors duration-300"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-t-4 border-b-4 border-blue-500 dark:border-blue-400"></div>
        </motion.div>
        
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40"
          animate={{ rotate: -360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full rounded-full border-l-4 border-r-4 border-purple-500 dark:border-purple-400"></div>
        </motion.div>
        
        {/* Static container for the logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 flex items-center justify-center overflow-hidden shadow-lg"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src="https://i.postimg.cc/RhxHxvTW/softlaunch.png"
              alt="SoftLaunch Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </motion.div>
        </div>
      </div>
      
      <motion.h1
        className="mt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        SoftLaunch Software
      </motion.h1>
      
      <motion.p
        className="mt-4 text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Building the future, one line at a time
      </motion.p>
      
      {/* Loading indicator */}
      <motion.div 
        className="mt-8 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot * 0.3,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;