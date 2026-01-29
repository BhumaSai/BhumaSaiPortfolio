import React, { useState, useRef, useEffect } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import { ExternalLink, Github, Code } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project; delay: number; isVisible: boolean }> = ({ project, delay, isVisible }) => {
  return (
    <div
      className={`group relative bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/40 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-700 h-full flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="relative h-64 overflow-hidden">
        {project.imageUrl !== "#" ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
            <Code size={64} className="text-gray-700 animate-pulse" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center space-x-6">
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                className="p-5 bg-blue-600 text-white rounded-2xl hover:bg-blue-500 hover:scale-110 transition-all shadow-2xl scale-90 group-hover:scale-100 duration-500 border border-blue-400/30"
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <ExternalLink size={28} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="p-5 bg-white/20 backdrop-blur-xl text-white rounded-2xl hover:bg-white/30 hover:scale-110 transition-all shadow-2xl scale-90 group-hover:scale-100 duration-500 border border-white/20"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github size={28} />
              </a>
            )}
          </div>
        </div>

        <div className="absolute top-6 left-6">
          <span className="px-5 py-2 glass rounded-full text-xs font-black text-blue-600 dark:text-blue-400 border border-white/40 dark:border-blue-500/30 uppercase tracking-[0.2em] shadow-2xl backdrop-blur-2xl">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-3xl font-black mb-4 text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 transition-colors duration-500">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 text-lg leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 text-[11px] font-black rounded-xl border border-gray-200/50 dark:border-gray-700/50 uppercase tracking-widest"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs font-black text-blue-600 dark:text-blue-400 self-center ml-1">
                +{project.technologies.length - 5} MORE
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'live', label: 'Live' },
    { id: 'repo', label: 'GitHub' },
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
    const activeRef = categoryRefs.current[filter];
    if (activeRef) {
      setIndicatorStyle({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
      });
    }
  }, [filter]);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden bg-white dark:bg-[#030712] transition-colors duration-300">
      {/* Permanent Artistic Background for Projects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Diagonal Stripe Pattern */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] bg-[repeating-linear-gradient(45deg,#3b82f6_0,#3b82f6_1px,transparent_0,transparent_50%)] bg-[size:30px_30px] animate-grid" />

        {/* Artistic Blobs with Custom Positions */}
        <div className="absolute top-[-5%] right-[10%] w-[600px] h-[600px] bg-cyan-600/10 dark:bg-cyan-600/20 blur-[60px] rounded-full animate-blob" />
        <div className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/20 blur-[60px] rounded-full animate-blob" style={{ animationDelay: '-6s' }} />

        {/* Center Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#030712_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent mb-6 tracking-tight">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Explore a curated selection of advanced full-stack applications and experimental projects.
          </p>
        </div>

        <div className={`flex justify-center mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative flex bg-gray-100/50 dark:bg-gray-800/40 p-2 rounded-[1.5rem] backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50">
            <div
              className="absolute h-[calc(100%-16px)] bg-blue-600 rounded-[1.1rem] shadow-xl shadow-blue-500/30 transition-all duration-500 ease-out"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            />
            {categories.map(category => (
              <button
                key={category.id}
                ref={(el) => (categoryRefs.current[category.id] = el)}
                onClick={() => setFilter(category.id)}
                className={`relative z-10 px-8 py-3.5 rounded-xl text-sm font-black whitespace-nowrap transition-all duration-500 ${filter === category.id
                  ? 'text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 0.15} isVisible={isVisible} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 animate-fadeIn text-gray-400">
            <div className="inline-flex p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] mb-6 shadow-inner">
              <Code size={56} />
            </div>
            <p className="text-2xl font-black tracking-tight uppercase">No matching works found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;