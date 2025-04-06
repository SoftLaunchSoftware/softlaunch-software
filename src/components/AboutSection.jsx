import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and progressive web applications built with the latest technologies.",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design processes focused on creating intuitive and engaging digital experiences.",
      icon: "🎨"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: "📱"
    },
    {
      title: "DevOps & Cloud",
      description: "Scalable infrastructure, CI/CD pipelines, and cloud deployment strategies.",
      icon: "☁️"
    }
  ];
  
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
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
              About Us
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            NexaTech is a forward-thinking software development company dedicated to creating innovative solutions 
            that drive digital transformation and empower businesses to thrive in today's competitive landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
