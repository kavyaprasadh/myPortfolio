import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiTarget, FiAward, FiHeart } from 'react-icons/fi';

const About = () => {
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

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Get to know me better
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <FiUser className="w-32 h-32 text-primary-600" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">9.20</div>
                <div className="text-secondary-600">CGPA</div>
              </div>
              <div className="text-center p-6 bg-secondary-50 rounded-xl">
                <div className="text-3xl font-bold text-secondary-600 mb-2">3+</div>
                <div className="text-secondary-600">Projects</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold text-secondary-800 mb-6">
              Electronics & Instrumentation Engineer
            </motion.h3>

            <motion.p variants={itemVariants} className="text-lg text-secondary-600 leading-relaxed">
              An Electronics and Instrumentation undergraduate with a passion for innovation, research, and solving real-world challenges through technology. I aim to develop sustainable and meaningful solutions by blending theoretical understanding with hands-on implementation.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-secondary-600 leading-relaxed">
              My journey in engineering has been driven by curiosity and a desire to create impactful solutions. From embedded systems to IoT applications, I've worked on projects that bridge the gap between theory and practical implementation.
            </motion.p>

            {/* Key Points */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FiTarget className="w-3 h-3 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800 mb-1">Innovation Focus</h4>
                  <p className="text-secondary-600">Developing cutting-edge solutions for real-world problems</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FiAward className="w-3 h-3 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800 mb-1">Academic Excellence</h4>
                  <p className="text-secondary-600">Maintaining high academic standards with a CGPA of 9.20</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FiHeart className="w-3 h-3 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800 mb-1">Passion for Technology</h4>
                  <p className="text-secondary-600">Deep interest in embedded systems, IoT, and control systems</p>
                </div>
              </div>
            </motion.div>

            {/* Personal Info */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-secondary-800">Branch:</span>
                <span className="text-secondary-600">Electronics and Instrumentation Engineering</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-secondary-800">Languages:</span>
                <span className="text-secondary-600">Kannada, English</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-secondary-800">Interests:</span>
                <span className="text-secondary-600">Acting, Dance, Writing, Editing</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-secondary-800">Location:</span>
                <span className="text-secondary-600">India</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 