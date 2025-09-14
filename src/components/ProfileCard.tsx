// src/components/ProfileCard.tsx
import React from 'react'

export default function ProfileCard() {
  return (
    <aside className="glass p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
      {/* Profile Image with hover overlay */}
      <div className="relative w-full h-64 mx-auto rounded-xl overflow-hidden border-4 border-white/40 shadow-md group">
        <img
        src="/projects/profile.webp"
//       ^^^^^^^^^ Yeh add karo // 👈 place profile.webp in /public
          alt="Marriam Tahir Profile"
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />

        {/* Hover Overlay with Name & Role */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300">
          <h3 className="text-xl font-semibold">Marriam Tahir</h3>
          <p className="text-sm mt-1">Full-Stack Developer &amp; UI/UX Designer</p>
        </div>
      </div>
    </aside>
  )
}
