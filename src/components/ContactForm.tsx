import React, { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (status) setStatus('')
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { name, email, message } = formData
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('Please fill all fields.')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('Please enter a valid email address.')
      return
    }
    if (message.trim().length < 10) {
      setStatus('Message should be at least 10 characters long.')
      return
    }
    setLoading(true)
    setStatus('Sending your message...')
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('✅ Thank you! Your message has been sent successfully.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('❌ Sorry, there was an error sending your message.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-spacing">
      <div className="max-w-2xl mx-auto glass p-6 rounded-2xl hover-lift min-h-[80vh] flex flex-col justify-center">

        <h2 className="text-xl font-semibold text-center mb-4">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-6 text-sm leading-relaxed">
          Have a project in mind? Let's discuss how we can work together.
        </p>
        
        <form onSubmit={onSubmit} className="space-y-4" aria-live="polite">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-lg p-2.5 bg-white/30 border border-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full rounded-lg p-2.5 bg-white/30 border border-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full rounded-lg p-2.5 bg-white/30 border border-white/40 min-h-[100px] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all resize-none"
              required
              disabled={loading}
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`btn-primary px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 hover:shadow-md'
              }`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {status && (
            <div
              id="submit-status"
              className={`text-center text-sm mt-3 p-2 rounded-lg ${
                status.includes('✅') ? 'bg-green-50 text-green-700 border border-green-200' :
                status.includes('❌') ? 'bg-red-50 text-red-700 border border-red-200' :
                'bg-blue-50 text-blue-700 border border-blue-200'
              }`}
              role="status"
              aria-live="polite"
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
