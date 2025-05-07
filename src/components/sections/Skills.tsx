import React, { useState } from 'react';
import { skills } from '../../data/skills';
import { Skill } from '../../types';
import { 
  Code, Server, Database, Shield, Box, 
  GitBranch, RefreshCcw, Cloud, Network, Bug,GithubIcon,Monitor
} from 'lucide-react';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
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
      case 'GitHub':return <GithubIcon size={24}/>;
      case 'Monitor':return <Monitor size={24} />
      default: return <Code size={24} />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-3">
        <div className="mr-3 text-blue-600 dark:text-blue-400">
          {getIcon()}
        </div>
        <h4 className="font-medium">{skill.name}</h4>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500"
          style={{ width: `${(skill.proficiency / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'security', label: 'Security' },
    { id: 'other', label: 'Other' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block mb-3">
            My Skills
            <div className="absolute top-11 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise in various technologies.
          </p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;