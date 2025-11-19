import React, { useEffect, useRef } from 'react';
import {  BugIcon, ChevronDown, Code, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const phrases = ['Full Stack Web Developer', 'Security Enthusiast'];
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
          typeTimer = window.setTimeout(type, 1500);
          return;
        }
      }
      
      const typingSpeed = isDeleting ? 50 : 100; 
      typeTimer = window.setTimeout(type, typingSpeed);
    };

    type();
    
    return () => clearTimeout(typeTimer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <div className="flex justify-center mb-6 space-x-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
              <Code size={28} />
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
              <BugIcon size={28} />
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
              <Terminal size={28} />
            </div>
          </div>
          
          <h1 className="right text-4xl sm:text-6xl md:text-6xl font-bold mb-4">
            Hello, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Bhuma Sai</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 h-12">
            I'm a <span ref={typingRef} className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-mono"></span>
            <span className="animate-blink">|</span>
          </h2>
          
          <p className="left text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Passionate about building secure, robust web applications .
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-lg transition-colors"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="p-2 rounded-full">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;