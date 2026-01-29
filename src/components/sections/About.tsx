import React from 'react';
import { BookOpen } from 'lucide-react';
import Resume from "../../Assets/Bhuma_Sai_Full_Stack_Developer_Resume.pdf"

const About: React.FC = () => {



  return (
    <section id="about" className="about py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Get to know more about me, my journey, and what drives my passion for technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-12">
            <h3 className="text-2xl sm:text-3xl font-bold dark:text-white leading-tight text-center">
              Full Stack Web Developer <span className="text-purple-600 dark:text-purple-300">(Fresher)</span> <br />
              & Security Enthusiast
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify sm:text-left">
                <p>
                  I am a <strong>Full Stack Web Developer (Fresher)</strong> with hands-on experience in the
                  <strong> MERN stack</strong> and a passionate <strong>Security Enthusiast</strong>.
                  I focus on building modern web applications that are fast, reliable, and secure.
                </p>

                <p>
                  I enjoy transforming complex ideas into real-world products using <strong>clean code</strong>,
                  <strong> scalable architectures</strong>, and <strong>secure development practices</strong>.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-8 bg-white/70 dark:bg-gray-800/40 backdrop-blur-xl rounded-[2rem] border border-white/40 dark:border-gray-700/50 shadow-2xl shadow-purple-500/5 group">
                  <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white">
                    <BookOpen size={28} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-bold mb-1">Master Of Computer Applications (MCA)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Specializing in Web Technologies & Systems</p>
                </div>

                <div className="pt-4 flex justify-center md:justify-start">
                  <a
                    href={Resume}
                    className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-300/10 w-full justify-center md:w-auto"
                    download="Bhuma_Sai_Resume.pdf">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;