import React from 'react'

export default function SectionHeading({ title }: { title: string }) {
  return (
    <h2
      className="text-3xl md:text-4xl font-bold text-center mb-10"
      style={{
        background: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {title}
    </h2>
  )
}
