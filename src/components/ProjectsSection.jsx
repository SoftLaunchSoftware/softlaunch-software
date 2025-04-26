import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with inventory management, payment processing, and customer analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Health & Fitness App",
      description: "Mobile application for tracking workouts, nutrition, and overall health metrics with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      tags: ["React Native", "Firebase", "TensorFlow"]
    },
    {
      title: "Real Estate Portal",
      description: "Property listing and management platform with virtual tours, map integration, and agent scheduling.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS"]
    },
    {
      title: "Financial Dashboard",
      description: "Interactive financial analytics dashboard with real-time data visualization and predictive insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      tags: ["Vue.js", "D3.js", "Express", "Redis"]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
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
              Recent Projects
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Explore our portfolio of innovative solutions that have helped our clients achieve their business objectives and drive growth.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row items-center gap-8 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-lg p-6 md:p-8"
              >
                <div className="w-full lg:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden">
                  <img 
                    src={projects[activeIndex].image} 
                    alt={projects[activeIndex].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{projects[activeIndex].title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                    {projects[activeIndex].description}
                  </p>
                  <div className="mt-auto">
                    <h4 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-200">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeIndex].tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* <div className="mt-6">
                    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors mr-4">
                      View Details
                    </button>
                    <button className="px-5 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                      Live Demo
                    </button>
                  </div> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevProject}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-5 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextProject}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-5 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;