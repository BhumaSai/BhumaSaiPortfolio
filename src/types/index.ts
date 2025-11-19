export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "live" | "repo";
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "security" | "other";
  proficiency: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
