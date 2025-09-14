import React from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa'

export default function Services() {
  return (
    <section id="services" className="section-spacing">
      {/* Section Heading */}
      <SectionHeading title="My Services" />

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Web Development */}
        <div className="glass p-6 rounded-xl text-center transition-shadow hover:shadow-lg">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full glass shadow text-indigo-600 mb-4">
            <FaCode className="text-xl" />
          </div>
          <h3 className="font-semibold text-lg">Web Development</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Modern web apps focusing on performance and scalability.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="glass p-6 rounded-xl text-center transition-shadow hover:shadow-lg">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full glass shadow text-pink-500 mb-4">
            <FaPaintBrush className="text-xl" />
          </div>
          <h3 className="font-semibold text-lg">UI/UX Design</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            User-centered interfaces and prototypes.
          </p>
        </div>

        {/* Mobile Development */}
        <div className="glass p-6 rounded-xl text-center transition-shadow hover:shadow-lg">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full glass shadow text-green-600 mb-4">
            <FaMobileAlt className="text-xl" />
          </div>
          <h3 className="font-semibold text-lg">Mobile Development</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Cross-platform mobile apps with great UX.
          </p>
        </div>
      </div>
    </section>
  )
}
