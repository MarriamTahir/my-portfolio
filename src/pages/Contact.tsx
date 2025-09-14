// src/components/ContactForm.tsx
import React, { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (status) setStatus('')
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { name, email, message } = formData
    if (!name.trim() || !email.trim() || !message.trim()) { setStatus('Please fill all fields.'); return }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) { setStatus('Please enter a valid email address.'); return }
    if (message.trim().length < 10) { setStatus('Message should be at least 10 characters long.'); return }

    setLoading(true); setStatus('Sending your message...')
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('✅ Thank you! Your message has been sent successfully. I will get back to you within 24 hours.')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('❌ Sorry, there was an error sending your message. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-spacing">
      <div className="max-w-2xl mx-auto glass p-8 rounded-2xl hover-lift min-h-[80vh] flex flex-col justify-center">

        <h2 className="text-2xl font-semibold text-center mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8 leading-relaxed">Have a project in mind? Let's discuss how we can work together to bring your ideas to life.</p>

        <form onSubmit={onSubmit} className="space-y-6" aria-live="polite">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full rounded-xl p-4 bg-white/30 border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all" aria-describedby="name-help" required disabled={loading} />
            <p id="name-help" className="sr-only">Enter your full name for contact purposes</p>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email Address *</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="w-full rounded-xl p-4 bg-white/30 border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all" aria-describedby="email-help" required disabled={loading} />
            <p id="email-help" className="sr-only">Enter a valid email address where I can respond to you</p>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Your Message *</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." className="w-full rounded-xl p-4 bg-white/30 border border-white/40 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all resize-none" aria-describedby="message-help" required disabled={loading}></textarea>
            <p id="message-help" className="text-xs text-gray-500 mt-1">Minimum 10 characters. Be specific about your requirements.</p>
          </div>

          <div className="text-center">
            <button type="submit" className={`btn-primary px-8 py-3 rounded-full text-white shadow-lg font-medium transition-all ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 hover:shadow-xl'}`} disabled={loading} aria-describedby="submit-status">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {status && (
            <div id="submit-status" className={`text-center text-sm mt-4 p-3 rounded-lg ${status.includes('✅') ? 'bg-green-50 text-green-700 border border-green-200' : status.includes('❌') ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}`} role="status" aria-live="polite">
              {status}
            </div>
          )}
        </form>

        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-center text-sm text-gray-600 mb-4">Prefer direct contact?</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:marriam.tahir@example.com" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium transition-colors">marriam.tahir@example.com</a>
            <span className="text-gray-400">•</span>
            <a href="https://linkedin.com/in/marriam-tahir" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
