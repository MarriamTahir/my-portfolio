import React from 'react'
import SectionHeading from '../components/ui/SectionHeading'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing">
      {/* Section Heading */}
      <SectionHeading title="Client Testimonials" />

      {/* Testimonials Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="glass p-6 rounded-xl text-center transition-shadow hover:shadow-lg">
          <p className="italic text-gray-700 leading-relaxed">
            "Transformed our website and increased conversions."
          </p>
          <strong className="block mt-4 text-lg">Sarah Johnson</strong>
          <span className="text-gray-500 text-sm">Marketing Director</span>
        </div>

        <div className="glass p-6 rounded-xl text-center transition-shadow hover:shadow-lg">
          <p className="italic text-gray-700 leading-relaxed">
            "Delivered a beautiful mobile app and improved UX."
          </p>
          <strong className="block mt-4 text-lg">Michael Chen</strong>
          <span className="text-gray-500 text-sm">Product Manager</span>
        </div>

        <div className="glass p-6 rounded-xl text-center transition-shadow hover:shadow-lg">
          <p className="italic text-gray-700 leading-relaxed">
            "Exceptional technical expertise and design."
          </p>
          <strong className="block mt-4 text-lg">Emily Rodriguez</strong>
          <span className="text-gray-500 text-sm">CTO</span>
        </div>
      </div>
    </section>
  )
}
