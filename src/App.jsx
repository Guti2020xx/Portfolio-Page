import { useState } from 'react'
import './App.css'
import Navigation from "./components/Navigation"
import JJSection from "./components/JJSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <JJSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="bg-gray-900 py-8 px-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
  
}

export default App
