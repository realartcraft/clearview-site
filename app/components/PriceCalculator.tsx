'use client'

import { useState } from 'react'

interface CalculatorData {
  propertyType: 'apartment' | 'house' | 'office' | ''
  windows: number
  frequency: 'once' | 'monthly' | 'quarterly' | ''
  postalCode: string
}

const basePrice = {
  apartment: 3.5,
  house: 4,
  office: 3
}

const frequencyDiscount = {
  once: 0,
  monthly: 20,
  quarterly: 10
}

export default function PriceCalculator() {
  const [data, setData] = useState<CalculatorData>({
    propertyType: '',
    windows: 10,
    frequency: '',
    postalCode: ''
  })
  
  const [showResult, setShowResult] = useState(false)

  const calculatePrice = () => {
    if (!data.propertyType || !data.frequency) return 0
    
    const base = basePrice[data.propertyType] * data.windows
    const discount = frequencyDiscount[data.frequency]
    const finalPrice = base * (1 - discount / 100)
    
    return Math.round(finalPrice)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (data.propertyType && data.frequency && data.windows > 0) {
      setShowResult(true)
    }
  }

  const price = calculatePrice()

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Calculez votre devis en 30 secondes
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Obtenez une estimation instantanée et transparente. Prix garantis, sans surprises.
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Type de propriété */}
            <div>
              <label className="block text-sm font-medium mb-3">Type de propriété</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'apartment', label: 'Appartement', icon: '🏢' },
                  { value: 'house', label: 'Maison', icon: '🏠' },
                  { value: 'office', label: 'Bureau', icon: '🏛️' }
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setData({ ...data, propertyType: type.value as 'apartment' | 'house' | 'office' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      data.propertyType === type.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{type.icon}</div>
                    <div className="text-sm font-medium">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Nombre de fenêtres */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Nombre de fenêtres : <span className="text-blue-600 font-bold">{data.windows}</span>
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={data.windows}
                onChange={(e) => setData({ ...data, windows: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>50+</span>
              </div>
            </div>

            {/* Fréquence */}
            <div>
              <label className="block text-sm font-medium mb-3">Fréquence de nettoyage</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'once', label: 'Ponctuel', desc: 'Une fois' },
                  { value: 'monthly', label: 'Mensuel', desc: '-20%', highlight: true },
                  { value: 'quarterly', label: 'Trimestriel', desc: '-10%' }
                ].map((freq) => (
                  <button
                    key={freq.value}
                    type="button"
                    onClick={() => setData({ ...data, frequency: freq.value as 'once' | 'monthly' | 'quarterly' })}
                    className={`p-4 rounded-lg border-2 transition-all relative ${
                      data.frequency === freq.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {freq.highlight && (
                      <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        Populaire
                      </span>
                    )}
                    <div className="font-medium">{freq.label}</div>
                    <div className="text-xs text-gray-500">{freq.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Code postal */}
            <div>
              <label className="block text-sm font-medium mb-2">Code postal (Bruxelles)</label>
              <input
                type="text"
                placeholder="1000"
                value={data.postalCode}
                onChange={(e) => setData({ ...data, postalCode: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={4}
              />
            </div>

            {/* Bouton calculer */}
            <button
              type="submit"
              disabled={!data.propertyType || !data.frequency}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all"
            >
              Calculer mon devis
            </button>
          </form>

          {/* Résultat */}
          {showResult && price > 0 && (
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
              <div className="text-center">
                <p className="text-sm opacity-90">Estimation pour votre {data.propertyType === 'apartment' ? 'appartement' : data.propertyType === 'house' ? 'maison' : 'bureau'}</p>
                <div className="text-5xl font-bold my-4">€{price}</div>
                <p className="text-sm opacity-90 mb-6">
                  {data.frequency === 'monthly' ? 'par mois' : data.frequency === 'quarterly' ? 'par trimestre' : 'service unique'}
                </p>
                
                <div className="space-y-3 text-sm text-left max-w-xs mx-auto">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Produits écologiques inclus
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Satisfaction garantie
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sans engagement
                  </div>
                </div>

                <a 
                  href="/contact"
                  className="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all"
                >
                  Réserver maintenant
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Badges de confiance */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-600">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Devis sans engagement
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Prix transparents
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Réponse en 24h
          </div>
        </div>
      </div>
    </section>
  )
}