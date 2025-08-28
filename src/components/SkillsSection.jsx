const SkillsSection = () => {
  const skills = [
    "JavaScript",
    "Python",
    "React",
    "PHP",
    "C++",
    "C#",
    "Java",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "T-SQL",
    "Microsoft SQL Server",
    "AWS",
    "Git",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "APIs",
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Technologies I work with to bring ideas to life</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-gray-800 hover:bg-blue-600 text-white rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
