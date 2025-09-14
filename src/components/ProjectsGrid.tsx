import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsGrid() {
  return (
    <section 
      id="projects" 
      className="section-spacing min-h-[80vh] flex flex-col justify-center"
    >
      {/* Gradient Heading */}
      <h2
        className="text-3xl font-bold text-center mb-10"
        style={{
          background: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Featured Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
