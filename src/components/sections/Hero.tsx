import React, { useEffect, useRef } from 'react';
import { BugIcon, ChevronDown, Code, Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const phrases = ['Full Stack Web Developer', 'Security Enthusiast', 'MERN Specialist'];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeTimer: number;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }

        if (currentCharIndex === currentPhrase.length) {
          isDeleting = true;
          typeTimer = window.setTimeout(type, 2000);
          return;
        }
      }

      const typingSpeed = isDeleting ? 40 : 80;
      typeTimer = window.setTimeout(type, typingSpeed);
    };

    type();

    return () => clearTimeout(typeTimer);
  }, []);

  return (
    <section id="home" className="hero box relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 mb-8 animate-fadeIn">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-bold tracking-wide uppercase">Open for Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-8 tracking-tight animate-slideInUp leading-[1.1]">
            Passionate Full-Stack Developer <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">Ready to Innovate</span>
          </h1>

          <div className="flex flex-col items-center mb-12 space-y-6 animate-slideInUp" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
              Hi, I'm <span className="text-gray-900 dark:text-white font-bold">Bhuma Sai</span> —
              <span ref={typingRef} className="ml-2 text-blue-600 dark:text-blue-400 font-mono"></span>
              <span className="animate-blink text-blue-600">|</span>
            </h2>
            <p className="max-w-xl text-md md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              A motivated <span className="text-blue-600 dark:text-blue-400">Fresher</span> actively seeking an entry-level opportunity to
              deliver high-quality code and secure web solutions. Ready to roll up my sleeves and
              contribute to meaningful real-world projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            <a
              href="#projects"
              className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/15 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-gray-900/50 backdrop-blur-md text-gray-900 dark:text-white font-bold rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center space-x-8 animate-slideInUp" style={{ animationDelay: '0.3s' }}>
            <a href="https://github.com/BhumaSai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bhuma-sai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:saibhuma.reddy@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce opacity-50">
          <a href="#about" className="p-2 rounded-full border border-gray-200 dark:border-gray-800">
            <ChevronDown size={20} className="text-gray-400" />
          </a>
        </div>
      </div>

      {/* Modern Floating Icons */}
      <div className="hidden lg:block absolute top-[20%] left-[10%] p-4 glass rounded-2xl shadow-2xl animate-float -rotate-6">
        <Code size={32} className="text-blue-600" />
      </div>
      <div className="hidden lg:block absolute bottom-[20%] right-[10%] p-4 glass rounded-2xl shadow-2xl animate-float rotate-12" style={{ animationDelay: '1.5s' }}>
        <Terminal size={32} className="text-cyan-500" />
      </div>
      <div className="hidden lg:block absolute top-[30%] right-[15%] p-4 glass rounded-2xl shadow-2xl animate-float -rotate-12" style={{ animationDelay: '0.8s' }}>
        <BugIcon size={32} className="text-purple-500" />
      </div>
    </section>
  );
};

export default Hero;