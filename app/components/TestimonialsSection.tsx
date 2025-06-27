'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  image: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Laurent",
    location: "Ixelles",
    rating: 5,
    text: "Service impeccable ! Équipe ponctuelle, professionnelle et mes vitres jamais été aussi propres. Je recommande vivement !",
    image: "https://i.pravatar.cc/150?img=1",
    date: "Il y a 2 semaines"
  },
  {
    id: 2,
    name: "Marc Dubois",
    location: "Uccle",
    rating: 5,
    text: "Après plusieurs déceptions avec autres services, enfin trouvé LE bon ! Rapport qualité-prix excellent et résultats parfaits.",
    image: "https://i.pravatar.cc/150?img=3",
    date: "Il y a 1 mois"
  },
  {
    id: 3,
    name: "Emma Van Berg",
    location: "Woluwe-Saint-Lambert",
    rating: 5,
    text: "Je fais appel à ClearView tous les mois pour mon commerce. Toujours satisfaite, équipe sympathique et travail soigné.",
    image: "https://i.pravatar.cc/150?img=5",
    date: "Il y a 3 semaines"
  },
  {
    id: 4,
    name: "Jean-Pierre Martin",
    location: "Saint-Gilles",
    rating: 5,
    text: "Excellent service ! Ils ont nettoyé les vitres de mon restaurant en un temps record. Clients et staff ravis du résultat.",
    image: "https://i.pravatar.cc/150?img=8",
    date: "Il y a 1 semaine"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change toutes les 5 secondes

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ce que disent nos clients
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Plus de 500 clients satisfaits à Bruxelles nous font confiance pour leurs vitres
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Témoignage principal */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                <div className="flex items-center mt-1">
                  {renderStars(testimonials[currentIndex].rating)}
                  <span className="ml-2 text-sm text-gray-500">{testimonials[currentIndex].date}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg italic">
  {testimonials[currentIndex].text}
</p>

            {/* Boutons de navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Témoignage précédent"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Indicateurs */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Témoignage suivant"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Badge de confiance */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-800 px-4 py-2 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">100% avis vérifiés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}