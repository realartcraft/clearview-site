'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-blue-600 transition-smooth">
            ClearView
          </Link>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="nav-link hover:text-blue-600">
              Accueil
            </Link>
            <Link href="/services" className="nav-link hover:text-blue-600">
              Nos services
            </Link>
            <Link href="/contact" className="nav-link hover:text-blue-600">
              Contact
            </Link>
          </div>
          
          {/* Bouton Menu Mobile avec animation */}
          <button 
            className="md:hidden transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Menu Mobile avec animation */}
        <div 
          className={`md:hidden mt-4 space-y-2 menu-transition ${
            isMenuOpen 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform -translate-y-2 pointer-events-none'
          }`}
        >
          <Link 
            href="/" 
            className="block py-2 px-4 hover:bg-gray-100 rounded transition-smooth"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            href="/services" 
            className="block py-2 px-4 hover:bg-gray-100 rounded transition-smooth"
            onClick={() => setIsMenuOpen(false)}
          >
            Nos services
          </Link>
          <Link 
            href="/contact" 
            className="block py-2 px-4 hover:bg-gray-100 rounded transition-smooth"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}