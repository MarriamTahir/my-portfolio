// src/components/Hero.tsx
import React from 'react'
import ProfileCard from './ProfileCard'
import { Linkedin, Github, Dribbble, Twitter, Mail, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="section-spacing">
      <div className="max-w-5xl mx-auto flex flex-wrap gap-8 items-start">
        {/* Left side text */}
        <div className="flex-1 min-w-[260px]">
          <h1
            className="text-4xl font-bold leading-tight"
            style={{
              background: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Creative Developer & UI/UX Designer
          </h1>
          <h2 className="mt-2 text-lg font-medium text-gray-700">
            Transforming ideas into exceptional digital experiences
          </h2>
          <p className="mt-4 text-gray-700 max-w-prose">
            I specialize in creating beautiful, functional, and user-centered
            digital experiences that help businesses stand out and achieve their
            goals.
          </p>

          {/* Functional Buttons */}
          <div className="mt-6 flex gap-4">
            {/* Hire Me */}
            <a
              href="mailto:marriam.tahir@example.com"
              className="w-44 h-12 flex items-center justify-center gap-2 rounded-full glass shadow-md font-medium text-gray-800 transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:text-white"
              aria-label="Contact Marriam for work opportunities"
            >
              <Mail size={18} />
              Hire Me
            </a>

            {/* Download CV */}
            <a
              href="/marriam-tahir-cv.pdf"
              download
              className="w-44 h-12 flex items-center justify-center gap-2 rounded-full glass shadow-md font-medium text-gray-800 transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:text-white"
              aria-label="Download Marriam's CV"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          {/* Social icons */}
          <div className="mt-6 flex gap-4">
            {/* LinkedIn */}
            <a
              aria-label="LinkedIn"
              className="w-12 h-12 grid place-items-center rounded-full glass shadow-md transition-all transform hover:scale-110 hover:shadow-2xl hover:bg-[#0077b5] hover:text-white"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} />
            </a>
            {/* GitHub */}
            <a
              aria-label="GitHub"
              className="w-12 h-12 grid place-items-center rounded-full glass shadow-md transition-all transform hover:scale-110 hover:shadow-2xl hover:bg-[#333] hover:text-white"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={22} />
            </a>
            {/* Dribbble */}
            <a
              aria-label="Dribbble"
              className="w-12 h-12 grid place-items-center rounded-full glass shadow-md transition-all transform hover:scale-110 hover:shadow-2xl hover:bg-[#ea4c89] hover:text-white"
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Dribbble size={22} />
            </a>
            {/* Twitter */}
            <a
              aria-label="Twitter"
              className="w-12 h-12 grid place-items-center rounded-full glass shadow-md transition-all transform hover:scale-110 hover:shadow-2xl hover:bg-[#1da1f2] hover:text-white"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>

        {/* Right side profile card */}
        <div className="w-[320px]">
          <ProfileCard />
        </div>
      </div>
    </section>
  )
}
