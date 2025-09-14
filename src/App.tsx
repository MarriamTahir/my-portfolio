import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/ui/Nav'
import Footer from './components/ui/Footer'
import SkipToContent from './components/ui/SkipToContent'
import Home from './pages/Home'
import ProjectsPage from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'
import Experience from './pages/Experience'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import ScrollToTopBtn from './components/ui/ScrollToTopBtn'

export default function App() {
  return (
    <>
      <SkipToContent />
      <div className="min-h-screen flex flex-col">
        {/* Header - sticky, no background box */}
        <header className="sticky top-0 z-50">
          <div className="max-w-7xl mx-auto w-full px-4">
            <Nav />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">
          <Suspense fallback={<div className="p-8">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <footer className="mt-8">
          <Footer />
        </footer>
      </div>

      {/* Scroll-to-top button */}
      <ScrollToTopBtn />
    </>
  )
}
