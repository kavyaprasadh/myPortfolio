import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGraduationCap, FiAward, FiBookOpen } from 'react-icons/fi';

const Education = () => {
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

  const educationData = [
    {
      degree: "B.E. Electronics and Instrumentation Engineering",
      institution: "SJCE (Sri Jayachamarajendra College of Engineering)",
      duration: "2020 - 2024",
      score: "CGPA: 9.20",
      icon: FiGraduationCap,
      color: "primary",
      achievements: [
        "Specialized in Electronics and Instrumentation Engineering",
        "Maintained excellent academic performance",
        "Active participation in technical projects and workshops"
      ]
    },
    {
      degree: "PUC (Pre-University Course)",
      institution: "Viveka PU College",
      duration: "2018 - 2020",
      score: "95.17%",
      icon: FiBookOpen,
      color: "secondary",
      achievements: [
        "Completed higher secondary education with distinction",
        "Strong foundation in science and mathematics",
        "Prepared for engineering entrance examinations"
      ]
    },
    {
      degree: "10th Standard",
      institution: "Govt. Girls Residential High School",
      duration: "2017 - 2018",
      score: "95.54%",
      icon: FiAward,
      color: "green",
      achievements: [
        "Completed secondary education with outstanding performance",
        "Demonstrated strong academic capabilities",
        "Foundation for higher education journey"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary-100 text-primary-800 border-primary-200",
      secondary: "bg-secondary-100 text-secondary-800 border-secondary-200",
      green: "bg-green-100 text-green-800 border-green-200"
    };
    return colorMap[color] || colorMap.primary;
  };

  const getIconColor = (color) => {
    const colorMap = {
      primary: "text-primary-600",
      secondary: "text-secondary-600",
      green: "text-green-600"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-xl text-secondary-600 max-w-3xl mx-auto">
            My academic journey and achievements
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {educationData.map((education, index) => {
            const Icon = education.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Icon and Score */}
                  <div className="flex flex-col items-center lg:items-start space-y-4 lg:w-1/4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(education.color)}`}>
                      <Icon className={`w-8 h-8 ${getIconColor(education.color)}`} />
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        {education.score}
                      </div>
                      <div className="text-sm text-secondary-500">
                        {education.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/4 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-800 mb-2">
                        {education.degree}
                      </h3>
                      <p className="text-lg text-primary-600 font-medium mb-4">
                        {education.institution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-800 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {education.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-secondary-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Academic Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-8">
            Academic <span className="gradient-text">Highlights</span>
          </motion.h3>
          
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-primary-50 rounded-xl">
              <div className="text-4xl font-bold text-primary-600 mb-2">9.20</div>
              <div className="text-secondary-600 font-medium">Current CGPA</div>
              <div className="text-sm text-secondary-500 mt-1">B.E. Engineering</div>
            </div>
            <div className="p-6 bg-secondary-50 rounded-xl">
              <div className="text-4xl font-bold text-secondary-600 mb-2">95.17%</div>
              <div className="text-secondary-600 font-medium">PUC Score</div>
              <div className="text-sm text-secondary-500 mt-1">Higher Secondary</div>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">95.54%</div>
              <div className="text-secondary-600 font-medium">10th Standard</div>
              <div className="text-sm text-secondary-500 mt-1">Secondary Education</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Academic Philosophy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6">
            My Academic <span className="gradient-text">Philosophy</span>
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            I believe in the power of continuous learning and practical application of knowledge. 
            My academic journey has been driven by curiosity, dedication, and a desire to understand 
            the fundamental principles of electronics and instrumentation engineering. I strive to 
            maintain excellence in both theoretical understanding and hands-on implementation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 