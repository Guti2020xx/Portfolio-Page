import { useState } from 'react'
import './App.css'
import './index.css'
import Navigation from "./components/Navigation"
import JJSection from "./components/JJSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
       <main>
        <JJSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <footer className="bg-gray-900 py-8 px-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Juan Gutierrez</p>
      </footer>
    </div>
  )
  
}

export default App
