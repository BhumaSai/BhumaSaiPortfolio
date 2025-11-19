import { Project } from "../types";
import chat_app from "../Assets/chat_app.webp";
import shop from "../Assets/shop.webp";
import malicious from "../Assets/malicious.webp";

export const projects: Project[] = [
  {
    id: "Chat app",
    title: "One-To-One Chat Application",
    description:
      "A one-on-one  chat application facilitates real-time, direct messaging between two users, enabling instant and private communication ensuring authenticated users can send and receive messages",
    technologies: [
      "Reactjs",
      "Node.js",
      "Express js",
      "Mongodb",
      "Mongoosejs",
      "websockets",
    ],
    imageUrl: chat_app,
    demoUrl: "https://feelfreetochat.netlify.app/",
    githubUrl: "https://github.com/Bhumasai/chatapp",
    category: "live",
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with secure user authentication.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "mongoose", "JWT"],
    imageUrl: shop,
    demoUrl: "https://feshopping.vercel.app/",
    githubUrl: "https://github.com/BhumaSai/e_commerce",
    category: "live",
  },
  {
    id: "url-shortner",
    title: "Url Shortner",
    description:
      "A simple Spring Boot application which generates shortened URLs and provides analytics endpoints",
    technologies: ["Java", "Spring Boot", "MySQL", "Maven"],
    imageUrl: "#",
    demoUrl: "#",
    githubUrl: "https://github.com/BhumaSai/UrlShortner",
    category: "repo",
  },
  {
    id: "todoapp",
    title: "ToDo App",
    description:
      "A lightweight and efficient To-Do application with a Go (Gin) backend and a clean React frontend for managing daily tasks.",
    technologies: ["Go", "Gin", "MySQL", "JWT"],
    imageUrl: "#",
    demoUrl: "#",
    githubUrl: "https://github.com/BhumaSai/todoapp",
    category: "repo",
  },
  {
    id: "Malicious-Url-detection",
    title: "Malicious-URL-Detection",
    description:
      "A simple Web Application to Detect Malicious Urls Using Machine Learning Algorithms",
    technologies: ["Python", "Flask", "Machine Learning", "Urls Dataset"],
    imageUrl: malicious,
    demoUrl: "#",
    githubUrl: "https://github.com/BhumaSai/Project",
    category: "repo",
  },
];
