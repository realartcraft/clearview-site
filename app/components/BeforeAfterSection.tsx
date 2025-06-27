'use client'

import { useState, useRef, MouseEvent, TouchEvent } from 'react'

interface BeforeAfterItem {
  id: number
  title: string
  location: string
  beforeImage: string
  afterImage: string
}

const transformations: BeforeAfterItem[] = [
  {
    id: 1,
    title: "Bureau Corporate - Tour & Taxis",
    location: "Bruxelles Centre",
    beforeImage: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    afterImage: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Restaurant Gastronomique",
    location: "Ixelles",
    beforeImage: "https://images.pexels.com/photos/2034337/pexels-photo-2034337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    afterImage: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Villa Moderne",
    location: "Uccle",
    beforeImage: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    afterImage: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]

function ComparisonSlider({ beforeImage, afterImage, title }: { beforeImage: string; afterImage: string; title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX)
  const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX)

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-2xl cursor-col-resize"
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Image Après (dessous) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt={`${title} - Après`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Après
        </div>
      </div>

      {/* Image Avant (dessus avec clip) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt={`${title} - Avant`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Avant
        </div>
      </div>

      {/* Ligne de séparation */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Bouton de glissement */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Transformations Spectaculaires
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez la différence ClearView. Glissez pour voir le résultat de notre travail professionnel.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Slider principal */}
          <ComparisonSlider 
            beforeImage={transformations[activeIndex].beforeImage}
            afterImage={transformations[activeIndex].afterImage}
            title={transformations[activeIndex].title}
          />

          {/* Informations */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">{transformations[activeIndex].title}</h3>
            <p className="text-gray-600">{transformations[activeIndex].location}</p>
          </div>

          {/* Miniatures */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {transformations.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-lg transition-all ${
                  index === activeIndex ? 'ring-4 ring-blue-500 ring-offset-2' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={item.afterImage} 
                  alt={item.title}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium truncate">
                  {item.title}
                </p>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Impressionné par nos résultats ?</p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all"
            >
              Obtenir une transformation similaire
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}