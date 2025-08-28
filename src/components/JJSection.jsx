import { Github, Linkedin, Mail, Check, Clipboard, ChevronDown } from "lucide-react";
import { useState } from "react";
import jj from "../assets/jj.jpg";

const JJSection = () => {

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("jjguti2023@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 5000); // reset after 5s
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden bg-transparent"
    >
      <div className="backgroundJJSection" style={{ backgroundColor: 'red' }}></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src={jj}
              alt="Test"
              className="profile-pic"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
          </div>
        </div>

        {/* Rest of your content remains the same */}
        <h1 className="section-title">
          Hi, I'm Juan Jose {" "} <br></br>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Full Stack Developer <br></br>
            Data Engineer <br></br>
            Aspiring AI/ML Engineer
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Crafting digital experiences with modern technologies.
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Recent Computer Science Grad from San Antonio, Texas. I like learning about web-development, data-engineering, and AI/ML to build systems that solve real world problems.

        </p>

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

          <button onClick={handleCopy} 
             className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md transition-colors duration-300 
                           ${copied ? "bg-green-600 text-white" : "bg-gray-800 text-gray-200 hover:bg-blue-600"}
                      `}>

              {copied ? 
              //if copied
              (<> <span>Copied</span> <Check size={20} className="group-hover animate-cartoon-bounce" /> </> ) 
              : // else
              (<><Mail size={20} /> 
                 <span>jjguti2023@gmail.com</span> 
                 <Clipboard size ={20} className="group-hover: animate-wiggle"/> </>)}
          </button>

        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default JJSection;