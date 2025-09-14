import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 glass py-6 px-4 text-center text-sm text-gray-600 rounded-t-xl">
      <div className="max-w-4xl mx-auto">
        <p>&copy; {new Date().getFullYear()} <span className="font-medium">Marriam Tahir</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}
