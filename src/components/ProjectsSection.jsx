import { useState, useEffect } from "react";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = [
    {
      title: "UshopiTrack",
      description: "Full-stack e-commerce order solution with React, Node.js, and Python integration.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["React", "Materials UI", "Node.js", "MongoDB", "Gmail Oauth","FastAPI","OpenAI"],
      type: "Full-Stack",
      github: "https://github.com/Guti2020xx/UshopITrack",
    },
    {
      title: "Maestro Inventory Management App",
      description: "Simulative Inventory Order Management System!",
      image: "/task-management-dashboard.png",
      technologies: ["C#", "Microsoft SQL Server","T-SQL", "Windows Forms"],
      type: "Backend",
      github: "https://github.com/Guti2020xx/C-Maestro-Application",
    },
    {
      title: "S&P 500 Market Prediction",
      description: "Machine Learning Model to predict Stock Market Prices that Achieved a 57% prediction Accuracy on Stock Movement Prediction. ",
      image: "/weather-api-dashboard.png",
      technologies: ["Python", "SciKit Learn", "APIs"],
      type: "AI/ML",
      github: "https://github.com/Guti2020xx/S-P-500-Stock-Prediction-Machine-Learning-Project",
    },
    {
      title: "Fix it Rattler",
      description: "PHP to enhance St. Mary’s University’s handling and automation of their facility’s maintenance issues.",
      image: "/fitness-mobile-app-interface.png",
      technologies: ["PHP", "XAMPP", "Microsoft SQL Server", "T-SQL"],
      type: "FullStack",
      github: "https://github.com/Guti2020xx/FixItRattler-BackUP",
    },
    {
      title: "SmartHome Agentic AI Assistant",
      description: "Intelligent chatbot using OpenAI API with context awareness",
      image: "/ai-chatbot-interface.png",
      technologies: ["Python","PyTorch","ONNX"],
      type: "AI/ML",
      github: "https://github.com/Guti2020xx/Smart-Home-Ai-Agent",
    },
  ];

  const filterTypes = ["All", "Full-Stack", "Backend", "AI/ML"];

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((p) => p.type === activeFilter);

  useEffect(() => {
    setVisibleProjects([]);
    filteredProjects.forEach((project, i) => {
      setTimeout(() => {
        setVisibleProjects((prev) => [...prev, project]);
      }, i * 150); // stagger each card by 150ms
    });
  }, [activeFilter]);

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
                  activeFilter === type
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-xl overflow-hidden transform animate-slide-in-left group"
              style={{ animationDelay: `${index * 150}ms` }} // stagger animations
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
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
