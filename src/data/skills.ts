import { Skill } from "../types";

export const skills: Skill[] = [
  // Frontend
  {
    name: "HTML/CSS",
    icon: "CodeIcon",
    category: "frontend",
    proficiency: 5,
  },
  {
    name: "JavaScript",
    icon: "CodeIcon",
    category: "frontend",
    proficiency: 5,
  },
  { name: "React", icon: "CodeIcon", category: "frontend", proficiency: 4 },
  {
    name: "TypeScript",
    icon: "CodeIcon",
    category: "frontend",
    proficiency: 5,
  },
  {
    name: "Tailwind CSS",
    icon: "CodeIcon",
    category: "frontend",
    proficiency: 4,
  },
  // Backend
  { name: "Node.js", icon: "ServerIcon", category: "backend", proficiency: 5 },
  { name: "Express", icon: "ServerIcon", category: "backend", proficiency: 5 },
  { name: "Python", icon: "CodeIcon", category: "backend", proficiency: 4 },
  { name: "DJANGO", icon: "CodeIcon", category: "backend", proficiency: 3 },
  {
    name: "RESTful APIs",
    icon: "ServerIcon",
    category: "backend",
    proficiency: 5,
  },

  // Database
  {
    name: "MongoDB",
    icon: "DatabaseIcon",
    category: "database",
    proficiency: 5,
  },
  {
    name: "MySql",
    icon: "DatabaseIcon",
    category: "database",
    proficiency: 4,
  },
  // Security
  {
    name: "Ethical Hacking",
    icon: "ShieldIcon",
    category: "security",
    proficiency: 3,
  },
  {
    name: "Web App Penetration Testing",
    icon: "ShieldIcon",
    category: "security",
    proficiency: 3,
  },
  {
    name: "Networking",
    icon: "NetworkIcon",
    category: "security",
    proficiency: 4,
  },
  { name: "Burp Suite", icon: "BugIcon", category: "security", proficiency: 3 },

  // Other
  { name: "Git", icon: "GitBranchIcon", category: "other", proficiency: 5 },
  { name: "GitHub", icon: "GitHub", category: "other", proficiency: 5 },
  {
    name: "LinuxOs",
    icon: "Monitor",
    category: "other",
    proficiency: 3,
  },
  { name: "CI/CD", icon: "RefreshCcwIcon", category: "other", proficiency: 3 },
];
