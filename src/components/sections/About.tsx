import React from 'react';
import { BookOpen } from 'lucide-react';
import Resume from "../../Assets/Bhuma_Sai_Full_Stack_Developer_Resume.pdf"

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives my passion for web development and cybersecurity.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="lg:w-1/2 text-justify">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              A Passionate Full Stack Web Developer & Security Enthusiast
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a recent Post Graduate with a strong foundation in full stack web development and a deep interest in cybersecurity. 
              My journey began with HTML, CSS, and JavaScript, and has evolved to include modern frameworks and security practices.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              What sets me apart is my unique combination of development skills and security knowledge. I believe in building 
              applications that are not only functional and beautiful but also secure and robust against potential threats.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
              <div className="col-span-full bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md w-full">
              <div className="text-blue-600 dark:text-blue-400 mb-3">
                <BookOpen size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-1">Education</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Master Of Computer Applications (MCA)</p>
              </div>
            </div>

            <a 
              href={Resume}
              className="lg:inline-flex max-md:flex items-center justify-center content-center max-sm:min-w-full  px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg shadow-md hover:scale-95 transition-shadow "
            download="Bhuma_Sai_Full_Stack_Developer_Resume.pdf">
              Download Resume
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;