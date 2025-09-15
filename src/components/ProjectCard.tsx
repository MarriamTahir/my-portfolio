// src/components/ProjectCard.tsx
import React from 'react'
import type { Project } from '../types/project'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass overflow-hidden rounded-xl shadow-md hover:shadow-glass-hover transition-shadow duration-300 flex flex-col h-full">
      {/* Image (top-cropped for visual consistency) */}
      <div className="relative group flex-shrink-0" data-project={project.id}>
        <img
          src={project.images[0] ?? '/profile-placeholder.jpg'}
          alt={project.title}
          className="w-full h-52 object-cover object-top" // object-top ensures top of image shows
          loading="lazy"
        />

        {/* Overlay (no heavy blur for performance) */}
        <div className="project-overlay absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 bg-black/40">
          <Link
            to={`/projects/${project.id}`}
            className="px-5 py-2 rounded-md bg-white/20 border border-white/30 text-white font-medium hover:bg-white/30 transition"
          >
            View Project
          </Link>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-700 mt-2 leading-relaxed flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.tags.map((t, i) => (
            <span
              key={`${project.id}-${i}-${t}`}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200 tag text-xs px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
