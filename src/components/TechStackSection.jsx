import React from 'react';
import { motion } from 'framer-motion';

const TechStackSection = () => {
  const technologies = [
    { name: "React-vite", logo: "https://cdn.worldvectorlogo.com/logos/vitejs.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
    { name: "Laravel", logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Kotlin", logo: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg" },
    // { name: ".NET", logo: "https://www.vectorlogo.zone/logos/dotnet/dotnet-ar21.svg" },
    // { name: "SQL Server", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg" },
    // { name: ".NET", logo: "https://www.vectorlogo.zone/logos/dotnet/dotnet-ar21.svg" },
    // { name: ".NET", logo: "https://www.vectorlogo.zone/logos/dotnet/dotnet-ar21.svg" },
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
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
              Our Technology Stack
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We leverage cutting-edge technologies to build robust, scalable, and performant solutions that meet the demands of modern businesses.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 mb-4">
                <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-center font-medium">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
