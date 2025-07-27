import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiLinkedin, FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KP</span>
                </div>
                <span className="font-bold text-xl">Kavyaprasad P</span>
              </div>
              <p className="text-secondary-300 leading-relaxed">
                Electronics and Instrumentation Engineer passionate about innovation, 
                research, and solving real-world challenges through technology.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/kavyaprasad-p-52090b286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:kavyalakshmiprasad@gmail.com"
                  className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center hover:bg-secondary-700 transition-colors"
                >
                  <FiMail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:6360579370"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <FiPhone className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#about" 
                    className="text-secondary-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className="text-secondary-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-secondary-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#education" 
                    className="text-secondary-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-secondary-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-primary-400" />
                  <span className="text-secondary-300">kavyalakshmiprasad@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-primary-400" />
                  <span className="text-secondary-300">+91 6360579370</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-primary-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  </div>
                  <span className="text-secondary-300">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-secondary-300">
              <span>&copy; {currentYear} Kavyaprasad P. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <FiHeart className="w-4 h-4 text-red-500 hidden sm:inline" />
              <span className="hidden sm:inline">in India</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
              title="Scroll to top"
            >
              <FiArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 