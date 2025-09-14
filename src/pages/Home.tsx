import React from 'react'
import Hero from '../components/Hero'
import ProjectsGrid from '../components/ProjectsGrid'
import Services from './Services'
import Experience from './Experience'
import Testimonials from './Testimonials'
import Contact from './Contact'

export default function Home() {
  return (
    <main id="main-content" className="px-4">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <ProjectsGrid />

      {/* Services Section */}
      <section className="mt-16">
        <Services />
      </section>

      {/* Experience Section */}
      <section className="mt-16">
        <Experience />
      </section>

      {/* Testimonials Section */}
      <section className="mt-16">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section className="mt-16">
        <Contact />
      </section>
    </main>
  )
}
