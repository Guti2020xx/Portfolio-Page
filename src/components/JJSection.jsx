import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const JJSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 px-4 bg-background"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src="/professional-headshot-of-a-developer.png"
              alt="Profile"
              className="profile-pic"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="section-title">
          Hi, I'm Juan Jose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Full Stack Developer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Crafting digital experiences with modern technologies.
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I build scalable web applications and love turning complex problems into simple, beautiful solutions.
          Currently focused on React, Node.js, and cloud technologies.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/Guti2020xx"
            className="btn-social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/juanjgutierrezr"
            className="btn-social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:jjguti2023@gmail.com" className="btn-social">
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default JJSection;
