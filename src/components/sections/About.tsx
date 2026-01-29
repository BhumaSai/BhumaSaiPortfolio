import React, { useEffect, useRef, useState } from 'react';
import { BookOpen } from 'lucide-react';
import Resume from "../../Assets/Bhuma_Sai_Full_Stack_Developer_Resume.pdf"

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about py-24 relative overflow-hidden bg-[#fafbff] dark:bg-[#030712] transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Get to know more about me, my journey, and what drives my passion for technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`space-y-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold dark:text-white leading-tight text-center">
              Full Stack Web Developer <span className="text-purple-600 dark:text-purple-300">(Fresher)</span> <br />
              & Security Enthusiast
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I am a <strong>Full Stack Web Developer (Fresher)</strong> with hands-on experience in the
                  <strong> MERN stack</strong> and a passionate <strong>Security Enthusiast</strong>.
                  I focus on building modern web applications that are fast, reliable, and secure.
                </p>

                <p>
                  I enjoy transforming complex ideas into real-world products using <strong>clean code</strong>,
                  <strong> scalable architectures</strong>, and <strong>secure development practices</strong>.
                  My passion lies in creating applications that not only look visually stunning but also
                  robustly protect user data and maintain strong system integrity.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-8 bg-white/70 dark:bg-gray-800/40 backdrop-blur-xl rounded-[2rem] border border-white/40 dark:border-gray-700/50 shadow-2xl shadow-purple-500/5 transition-all hover:scale-[1.02] duration-500 group">
                  <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 scale-110">
                    <BookOpen size={28} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-bold mb-1">Master Of Computer Applications (MCA)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Specializing in Web Technologies & Systems</p>
                </div>

                <div className="pt-4 flex justify-center md:justify-start">
                  <a
                    href={Resume}
                    className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-300/10 hover:scale-110 active:scale-95 transition-all w-full justify-center md:w-auto"
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