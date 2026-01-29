import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 pt-16 pb-8 border-t border-gray-100 dark:border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              B
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Bhuma Sai Portfolio
            </span>
          </div>

          <p className="text-gray-500 dark:text-gray-400 max-w-md text-center mb-8 leading-relaxed">
            Building robust, secure, and user-centric digital experiences with modern web technologies.
          </p>

          <div className="flex space-x-6 mb-12">
            {[
              { icon: <Github size={22} />, href: "https://github.com/BhumaSai", label: "GitHub" },
              { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/bhuma-sai", label: "LinkedIn" },
              { icon: <Mail size={22} />, href: "mailto:saibhuma.reddy@gmail.com", label: "Email" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 dark:bg-gray-900 rounded-2xl text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-800 shadow-sm transition-all duration-300 transform hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-8" />

          <div className="flex flex-col md:flex-row justify-center items-center w-full text-sm text-gray-500 dark:text-gray-400">
            <p className="mb-4 md:mb-0">
              © {currentYear} Bhuma Sai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;