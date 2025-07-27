import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiCpu, FiWifi, FiEye } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const projects = [
    {
      title: "Braille Clock for the Visually Impaired",
      description: "Built with STM32, RTC, AccelStepper. Used precise motor control to allow visually impaired users to read time through touch.",
      technologies: ["STM32", "RTC", "AccelStepper", "Motor Control", "Accessibility"],
      icon: FiEye,
      color: "blue",
      features: [
        "Precise motor control for tactile feedback",
        "Real-time clock integration",
        "Accessibility-focused design",
        "Battery-powered operation"
      ]
    },
    {
      title: "IoT-Based Agriculture Monitoring System",
      description: "Used Raspberry Pi Pico W, Python, Adafruit IO. Real-time soil/moisture/temp monitoring via sensors and cloud dashboard.",
      technologies: ["Raspberry Pi Pico W", "Python", "Adafruit IO", "IoT", "Sensors"],
      icon: FiWifi,
      color: "green",
      features: [
        "Real-time sensor data collection",
        "Cloud-based dashboard",
        "Automated monitoring system",
        "Mobile app integration"
      ]
    },
    {
      title: "Pain Level Classification Using Facial Expressions",
      description: "Used MATLAB, CNNs, and Image Processing. GUI developed to detect and classify pain levels from facial images.",
      technologies: ["MATLAB", "CNNs", "Image Processing", "Machine Learning", "GUI"],
      icon: FiCpu,
      color: "purple",
      features: [
        "Facial expression analysis",
        "CNN-based classification",
        "User-friendly GUI interface",
        "Real-time processing capabilities"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getIconColor = (color) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Innovative solutions I've developed to solve real-world problems
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`project-card ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row gap-8 items-center`}
              >
                {/* Project Image/Icon */}
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className={`w-full h-64 rounded-xl ${getColorClasses(project.color)} flex items-center justify-center`}>
                      <Icon className={`w-24 h-24 ${getIconColor(project.color)}`} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-800 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="skill-badge"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-secondary-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex items-center space-x-2"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>Source Code</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-8">
            Project <span className="gradient-text">Impact</span>
          </motion.h3>
          
          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-secondary-600">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-secondary-600">Technologies Used</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-secondary-600">Success Rate</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
              <div className="text-secondary-600">Awards Won</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 