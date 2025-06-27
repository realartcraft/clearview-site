'use client'

import { useState } from 'react'

export default function HeroSection() {
  const [codePostal, setCodePostal] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Rediriger vers la page de contact avec le code postal
    window.location.href = `/contact?cp=${codePostal}`
  }

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=1600')`,

          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Badge de confiance */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fadeIn">
          <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Plus de 500 clients satisfaits à Bruxelles</span>
        </div>

        {/* Titre principal avec animation */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
          Des vitres <span className="text-blue-400">impeccables</span>
          <br />
          en 24 heures
        </h1>

        {/* Sous-titre */}
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
          Service professionnel de nettoyage de vitres et entretien de châssis. 
          Devis gratuit en 2 minutes.
        </p>

        {/* Formulaire de réservation rapide */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-fadeInUp animation-delay-400">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Entrez votre code postal"
              value={codePostal}
              onChange={(e) => setCodePostal(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg font-medium placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Obtenir un devis
            </button>
          </div>
        </form>

        {/* Points de confiance */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto animate-fadeIn animation-delay-600">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-1">24h</div>
            <div className="text-sm text-gray-300">Intervention rapide</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-sm text-gray-300">Satisfaction garantie</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-1">⭐⭐⭐⭐⭐</div>
            <div className="text-sm text-gray-300">Avis clients 5/5</div>
          </div>
        </div>

        {/* Flèche qui indique qu'il y a plus en bas */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}