"use client"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "/modern-ecommerce-interface.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "Full-Stack",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-ecommerce-demo.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Firebase", "Material-UI"],
      type: "Frontend",
      github: "https://github.com/yourusername/task-manager",
      demo: "https://your-task-manager.com",
    },
    {
      title: "Weather API Service",
      description: "RESTful API service providing weather data with caching and rate limiting",
      image: "/weather-api-dashboard.png",
      technologies: ["Node.js", "Express", "Redis", "PostgreSQL"],
      type: "Backend",
      github: "https://github.com/yourusername/weather-api",
      demo: "https://your-weather-api.com",
    },
    {
      title: "Mobile Fitness Tracker",
      description: "React Native app for tracking workouts and fitness goals",
      image: "/fitness-mobile-app-interface.png",
      technologies: ["React Native", "Expo", "SQLite"],
      type: "Mobile",
      github: "https://github.com/yourusername/fitness-tracker",
      demo: "https://expo.dev/@yourusername/fitness-tracker",
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot using OpenAI API with context awareness",
      image: "/ai-chatbot-interface.png",
      technologies: ["Python", "OpenAI API", "Flask", "React"],
      type: "AI/ML",
      github: "https://github.com/yourusername/ai-chat",
      demo: "https://your-ai-chat.com",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website built with modern web technologies",
      image: "/portfolio-website-showcase.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      type: "Frontend",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourname.github.io",
    },
  ]

  const filterTypes = ["All", "Full-Stack", "Frontend", "Backend", "Mobile", "AI/ML"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.type === activeFilter)

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            A showcase of my recent work and personal projects
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === type ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">{project.type}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
