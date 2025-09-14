import React from 'react'
import SectionHeading from '../components/ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-spacing">
      {/* Section Heading */}
      <SectionHeading title="Work Experience" />

      {/* Experience Cards */}
      <div className="grid gap-6 max-w-3xl mx-auto">
        <div className="glass p-6 rounded-xl transition-shadow hover:shadow-lg">
          <h3 className="font-semibold text-lg">
            Senior Frontend Developer — <span className="text-indigo-600">Tech Innovations Inc.</span>
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Led development of responsive apps and design systems, collaborating closely with designers and backend teams.
          </p>
        </div>

        <div className="glass p-6 rounded-xl transition-shadow hover:shadow-lg">
          <h3 className="font-semibold text-lg">
            UI/UX Designer — <span className="text-pink-500">Creative Solutions Ltd.</span>
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Designed user-centered interfaces and prototypes driven by usability testing and research insights.
          </p>
        </div>
      </div>
    </section>
  )
}
