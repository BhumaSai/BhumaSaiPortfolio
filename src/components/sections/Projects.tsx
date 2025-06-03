import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import { ExternalLink, Github, Code } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-end space-x-3">
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={18} className="text-white" />
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                >
                  <Github size={18} className="text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-3 left-3 px-3 py-1 bg-blue-600/90 text-white text-xs font-medium rounded-full flex items-center space-x-1">
          <Code size={16} />
          <span>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'live', label: 'Active Projects' },
    {id:'in-active',label:"In Active Projects"}

  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block mb-3">
            My Projects
            <div className="absolute  top-10 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest web development  projects
          </p>
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="flex overflow-auto space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;