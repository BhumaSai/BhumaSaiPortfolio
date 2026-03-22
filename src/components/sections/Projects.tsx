import React, { useState, useRef, useEffect } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import { ExternalLink, Github, Code } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div
      className="group relative bg-white/60 dark:bg-gray-800/40 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden border border-white/60 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 h-full flex flex-col hover:-translate-y-2"
    >
      {/* Animated gradient border simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
      
      <div className="relative h-64 overflow-hidden">
        {project.imageUrl !== "#" ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out">
            <Code size={64} className="text-gray-700" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 flex items-center justify-center space-x-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-500 hover:scale-110 shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <ExternalLink size={24} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="p-4 bg-white text-gray-900 rounded-full hover:bg-gray-200 hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github size={24} />
              </a>
            )}
          </div>
        </div>

        <div className="absolute top-6 left-6 z-10">
          <span className="px-5 py-2 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-black text-white border border-white/20 uppercase tracking-[0.2em] shadow-2xl">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col relative z-20">
        <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 text-base leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[11px] font-black rounded-xl border border-blue-100 dark:border-blue-800/50 uppercase tracking-widest shadow-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs font-black text-gray-500 dark:text-gray-500 self-center ml-1">
                +{project.technologies.length - 5}
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
  const categoryRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'live', label: 'Live' },
    { id: 'repo', label: 'GitHub' },
  ];



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
    <section id="projects" className="project py-24 relative overflow-hidden bg-transparent">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent mb-6 tracking-tight">
            Projects
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Explore a curated selection of advanced full-stack applications and experimental projects.
          </p>
        </div>

        <div className="flex justify-center mb-20">
          <div className="relative flex bg-gray-100 dark:bg-gray-800 p-2 rounded-[1.5rem] border border-gray-200/50 dark:border-gray-700/50">
            <div
              className="absolute h-[calc(100%-16px)] bg-blue-600 rounded-[1.1rem] shadow-xl shadow-blue-500/30"
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
                className={`relative z-10 px-4 py-2 sm:px-8 sm:py-3.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap ${filter === category.id
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
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-gray-400">
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