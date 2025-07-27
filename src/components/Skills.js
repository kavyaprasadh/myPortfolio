import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiCpu, FiDatabase, FiSettings, FiUsers } from 'react-icons/fi';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: FiCode,
      skills: ["Python", "C++", "ALP"],
      color: "primary"
    },
    {
      title: "Tools & Software",
      icon: FiSettings,
      skills: ["MATLAB", "Arduino IDE", "Adafruit IO"],
      color: "secondary"
    },
    {
      title: "Embedded Systems",
      icon: FiCpu,
      skills: ["Arduino", "STM32", "Sensors & Actuators"],
      color: "green"
    },
    {
      title: "Domain Expertise",
      icon: FiDatabase,
      skills: ["Process Control", "PLC", "Control Systems", "Computer Networks"],
      color: "purple"
    },
    {
      title: "Soft Skills",
      icon: FiUsers,
      skills: ["Communication", "Teamwork", "Leadership", "Time Management"],
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary-100 text-primary-800 border-primary-200",
      secondary: "bg-secondary-100 text-secondary-800 border-secondary-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200"
    };
    return colorMap[color] || colorMap.primary;
  };

  const getIconColor = (color) => {
    const colorMap = {
      primary: "text-primary-600",
      secondary: "text-secondary-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Technical expertise and competencies I've developed
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <Icon className={`w-6 h-6 ${getIconColor(category.color)}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-secondary-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center mb-8">
            Technical <span className="gradient-text">Proficiency</span>
          </motion.h3>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Python", "C++", "MATLAB", "Arduino", "STM32", "PLC",
              "IoT", "Sensors", "Control Systems", "Process Control",
              "Computer Networks", "Embedded Systems"
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-secondary-200"
              >
                <span className="text-sm font-medium text-secondary-700">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-6">
            Continuous <span className="gradient-text">Learning</span>
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-center text-secondary-600 mb-6 max-w-2xl mx-auto">
            I believe in continuous learning and staying updated with the latest technologies. 
            My academic background combined with hands-on project experience has equipped me with 
            a strong foundation in electronics and instrumentation engineering.
          </motion.p>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
              <div className="text-secondary-600">Years of Study</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-secondary-600">Technologies</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-secondary-600">Workshops</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 