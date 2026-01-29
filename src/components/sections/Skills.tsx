import React, { useState, useRef, useEffect } from 'react';
import { skills } from '../../data/skills';
import { Skill } from '../../types';
import {
  Code, Server, Database, Shield, Box,
  GitBranch, RefreshCcw, Cloud, Network, Bug, GithubIcon, Monitor
} from 'lucide-react';

const SkillCard: React.FC<{ skill: Skill; delay: number; isVisible: boolean }> = ({ skill, delay, isVisible }) => {
  const getIcon = () => {
    switch (skill.icon) {
      case 'CodeIcon': return <Code size={24} />;
      case 'ServerIcon': return <Server size={24} />;
      case 'DatabaseIcon': return <Database size={24} />;
      case 'ShieldIcon': return <Shield size={24} />;
      case 'BoxIcon': return <Box size={24} />;
      case 'GitBranchIcon': return <GitBranch size={24} />;
      case 'RefreshCcwIcon': return <RefreshCcw size={24} />;
      case 'CloudIcon': return <Cloud size={24} />;
      case 'NetworkIcon': return <Network size={24} />;
      case 'BugIcon': return <Bug size={24} />;
      case 'GitHub': return <GithubIcon size={24} />;
      case 'Monitor': return <Monitor size={24} />;
      default: return <Code size={24} />;
    }
  };

  return (
    <div
      className={`group bg-white/70 dark:bg-gray-900/40 backdrop-blur-md p-4 rounded-2xl border border-white/40 dark:border-gray-800/50 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-3">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
          {getIcon()}
        </div>
        <h4 className="ml-3 text-base font-bold text-gray-900 dark:text-white">{skill.name}</h4>
      </div>
      <div className="flex items-center gap-1.5 mt-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${index < skill.proficiency
              ? 'bg-blue-600 dark:bg-blue-400 scale-100'
              : 'bg-gray-300 dark:bg-gray-700 scale-75'
              }`}
          />
        ))}
        <span className="ml-1.5 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {skill.proficiency}/5
        </span>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'other', label: 'Dev Tools' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeRef = categoryRefs.current[activeCategory];
    if (activeRef) {
      setIndicatorStyle({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
      });
    }
  }, [activeCategory]);

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden bg-[#fafbff] dark:bg-[#030712] transition-colors duration-300">
      {/* Permanent Strategic Technical Background for Skills */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f612_1px,transparent_1px),linear-gradient(to_bottom,#3b82f612_1px,transparent_1px)] bg-[size:48px_48px] animate-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

        {/* Glowing Data Centers / Blobs */}
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/10 blur-[60px] rounded-full animate-blob" />
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[60px] rounded-full animate-blob" style={{ animationDelay: '-4s' }} />

        {/* Subtle Horizontal Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-20 dark:opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent mb-4 tracking-tight">
            My Skills
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className={`w-full mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center px-1 md:px-0">
            <div className="overflow-x-hidden  max-w-full">
              <div className="relative overflow-x-auto scrollbar-hide flex bg-white/50 dark:bg-gray-800/40 p-2 rounded-[1.5rem] backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <div
                  className="absolute h-[calc(100%-16px)] bg-blue-600 rounded-[1.1rem] shadow-lg shadow-blue-500/30 transition-all duration-500 ease-out"
                  style={{
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`,
                  }}
                />
                {categories.map(category => (
                  <button
                    key={category.id}
                    ref={(el) => (categoryRefs.current[category.id] = el)}
                    onClick={() => setActiveCategory(category.id)}
                    className={`relative z-10 px-6 md:px-8 py-3.5 rounded-xl text-sm font-black whitespace-nowrap transition-all duration-500 ${activeCategory === category.id
                      ? 'text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} delay={index * 0.05} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;