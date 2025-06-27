'use client'

import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import BeforeAfterSection from './components/BeforeAfterSection'
import PriceCalculator from './components/PriceCalculator'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <PriceCalculator />
      
      {/* Section Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-blue-600">🏢</div>
              <h3 className="text-xl font-semibold mb-3">Professionnels</h3>
              <p className="text-gray-600">Bureaux, commerces et espaces professionnels. Service régulier ou ponctuel.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-blue-600">🏠</div>
              <h3 className="text-xl font-semibold mb-3">Particuliers</h3>
              <p className="text-gray-600">Maisons, appartements et résidences privées. Devis gratuit sous 24h.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-blue-600">✨</div>
              <h3 className="text-xl font-semibold mb-3">Qualité garantie</h3>
              <p className="text-gray-600">Satisfaction client et résultats impeccables. Produits écologiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt pour des vitres éclatantes ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 500 clients satisfaits à Bruxelles. 
            Devis gratuit et sans engagement.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all"
          >
            Demander un devis gratuit
          </a>
        </div>
      </section>
    </main>
  )
}