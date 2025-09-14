import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import projects from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === Number(id))

  if (!project) {
    return <div className="p-8 text-center">Project not found</div>
  }

  return (
    <section className="section-spacing max-w-7xl mx-auto px-4">
      {/* Hero Image (always 700px height for consistency) */}
      {project.images[0] && (
        <div className="relative mb-12">
          <img
            src={project.images[0]}
            alt={`${project.title} hero`}
            className="w-full h-[500px] object-cover object-top rounded-xl glass"
          />
          <button
            onClick={() => window.open(project.images[0], '_blank')}
            className="absolute bottom-6 right-6 btn-secondary"
          >
            View Full Image
          </button>
        </div>
      )}

      {/* Title */}
      <h1
        className="text-3xl font-bold mb-6 text-center"
        style={{
          background: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {project.title}
      </h1>

      {/* Description */}
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
        {project.description}
      </p>

      {/* Grid Layout: Images (left) | Videos (right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Screenshots Grid (left) */}
        {project.images.length > 1 && (
          <div className="space-y-6">
            {project.images.slice(1).map((img, idx) => (
              <div key={idx} className="relative glass rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 2}`}
                  className="w-full h-[350px] object-cover"
                />
                <button
                  onClick={() => window.open(img, '_blank')}
                  className="absolute bottom-4 right-4 btn-secondary text-xs"
                >
                  View Full Image
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid (right) */}
        {project.type === 'development' && project.videos && project.videos.length > 0 && (
          <div className="space-y-6">
            {project.videos.map((video, idx) => (
              <div key={idx} className="aspect-w-16 aspect-h-9 glass rounded-xl overflow-hidden">
                <iframe
                  src={video}
                  title={`${project.title} video demo ${idx + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center gap-4">
        {project.type === 'development' && project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            🌐 View Live Preview
          </a>
        )}

        {project.type === 'figma' && project.figmaLink && (
          <a
            href={project.figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            🎨 View Figma Prototype
          </a>
        )}

        {/* Go Back */}
        <button onClick={() => navigate(-1)} className="btn-secondary mt-4">
          ← Go Back
        </button>
      </div>
    </section>
  )
}
