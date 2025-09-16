import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onEsc, true)
    return () => document.removeEventListener('keydown', onEsc, true)
  }, [])

  function toggleMenu() {
    setIsOpen(prev => !prev)
    document.body.style.overflow = isOpen ? '' : 'hidden'
  }
  
  function closeMenu() {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg transition-all duration-200 ${
      isActive 
        ? 'text-indigo-600 font-medium bg-white/20 shadow-sm' 
        : 'text-gray-700 hover:text-indigo-500 hover:bg-white/10'
    }`

  return (
    <>
      <nav
        className="nav glass flex items-center justify-between px-6 py-3"
        role="navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-lg bg-clip-text text-transparent hover:scale-105 transition-transform"
          style={{ backgroundImage: 'linear-gradient(135deg,#4f46e5,#7c3aed)' }}
          aria-label="Homepage"
        >
          Marriam Tahir
        </Link>

        {/* Hamburger button */}
        <button
          type="button"
          ref={btnRef}
          aria-label="Toggle navigation"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen ? "true" : "false"}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={toggleMenu}
        >
          <span className={`block w-7 h-[3px] bg-current mb-1 rounded transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-[3px] bg-current mb-1 rounded transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-[3px] bg-current rounded transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop menu */}
        <ul id="desktop-navigation" className="hidden md:flex gap-2 items-center">
          <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
          <li><NavLink to="/projects" className={getLinkClass}>Projects</NavLink></li>
          <li><NavLink to="/services" className={getLinkClass}>Services</NavLink></li>
          <li><NavLink to="/experience" className={getLinkClass}>Experience</NavLink></li>
          <li><NavLink to="/testimonials" className={getLinkClass}>Testimonials</NavLink></li>
          <li><NavLink to="/contact" className={getLinkClass}>Contact</NavLink></li>
        </ul>
      </nav>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile menu */}
      <ul
  id="mobile-navigation"
  className={`fixed top-0 right-0 h-full w-4/5 max-w-[420px] 
    bg-white/95 text-gray-800 
    dark:bg-[#1a1a2e]/95 dark:text-white
    backdrop-blur-lg p-8 transform transition-transform 
    flex flex-col gap-6 z-50 shadow-2xl ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  aria-hidden={isOpen ? "false" : "true"}
>
        <li className="flex justify-end mb-4">
          <button
            type="button"
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <span className="block w-6 h-0.5 bg-gray-600 rotate-45"></span>
            <span className="block w-6 h-0.5 bg-gray-600 -rotate-45 -mt-0.5"></span>
          </button>
        </li>
        
        <li><NavLink to="/" className={getLinkClass} onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/projects" className={getLinkClass} onClick={closeMenu}>Projects</NavLink></li>
        <li><NavLink to="/services" className={getLinkClass} onClick={closeMenu}>Services</NavLink></li>
        <li><NavLink to="/experience" className={getLinkClass} onClick={closeMenu}>Experience</NavLink></li>
        <li><NavLink to="/testimonials" className={getLinkClass} onClick={closeMenu}>Testimonials</NavLink></li>
        <li><NavLink to="/contact" className={getLinkClass} onClick={closeMenu}>Contact</NavLink></li>
      </ul>
    </>
  )
}
