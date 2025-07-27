import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBookOpen, FiTool, FiUsers, FiStar } from 'react-icons/fi';

const Certificates = () => {
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

  const certificates = [
    {
      title: "MATLAB Workshop",
      description: "Comprehensive training in MATLAB programming and simulation",
      icon: FiBookOpen,
      color: "blue",
      category: "Technical Training"
    },
    {
      title: "Robotics Workshop",
      description: "Hands-on experience with robotics and automation systems",
      icon: FiTool,
      color: "green",
      category: "Technical Training"
    },
    {
      title: "Soldering and Etching Workshop",
      description: "Practical skills in PCB design and electronic component assembly",
      icon: FiTool,
      color: "orange",
      category: "Technical Training"
    },
    {
      title: "Soft Skills Training by CoachEd",
      description: "Professional development in communication and leadership",
      icon: FiUsers,
      color: "purple",
      category: "Professional Development"
    },
    {
      title: "National Youth Fest – YUVA BIMBA",
      description: "Recognition for outstanding participation in youth festival",
      icon: FiStar,
      color: "red",
      category: "Recognition"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      red: "bg-red-100 text-red-800 border-red-200"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getIconColor = (color) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      orange: "text-orange-600",
      purple: "text-purple-600",
      red: "text-red-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  const categories = ["All", "Technical Training", "Professional Development", "Recognition"];

  return (
    <section id="certificates" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certificates</span> & Achievements
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Professional certifications and recognition for my skills and contributions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((certificate, index) => {
            const Icon = certificate.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-200"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(certificate.color)}`}>
                    <Icon className={`w-6 h-6 ${getIconColor(certificate.color)}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary-800 mb-1">
                      {certificate.title}
                    </h3>
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {certificate.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                  {certificate.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-secondary-500">Completed</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    View Certificate
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certificate Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-8">
            Certification <span className="gradient-text">Overview</span>
          </motion.h3>
          
          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">5</div>
              <div className="text-secondary-600">Total Certificates</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-secondary-600">Technical Workshops</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
              <div className="text-secondary-600">Soft Skills Training</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
              <div className="text-secondary-600">National Recognition</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6">
            Continuous <span className="gradient-text">Learning</span> Journey
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed mb-8">
            I believe in the importance of continuous learning and professional development. 
            These certificates represent my commitment to expanding my knowledge and skills 
            in both technical and soft skills areas. Each workshop and training has contributed 
            to my growth as an engineer and professional.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.slice(1).map((category, index) => (
              <span
                key={index}
                className="skill-badge cursor-pointer hover:bg-primary-200 transition-colors"
              >
                {category}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates; 