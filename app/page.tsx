export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-5xl font-bold text-center mb-4 animate-fadeInUp">
        Bienvenue chez ClearView
      </h1>
      
      <p className="text-xl text-center mb-8 max-w-2xl animate-fadeInUp animation-delay-200">
        Service professionnel de nettoyage de vitres et entretien de châssis à Bruxelles.
        Nous redonnons de l&apos;éclat à vos espaces !
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
        <a 
          href="/contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover-lift pulse-animation transition-smooth"
        >
          Demander un devis
        </a>
        
        <a 
          href="/services" 
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover-lift hover:bg-blue-50 transition-smooth"
        >
          Nos services
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl animate-fadeIn animation-delay-600">
        <div className="text-center p-6 rounded-lg bg-gray-50 card-hover">
          <div className="text-5xl mb-4 text-blue-600">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Professionnels</h3>
          <p className="text-gray-600">Bureaux, commerces et espaces professionnels</p>
        </div>
        
        <div className="text-center p-6 rounded-lg bg-gray-50 card-hover">
          <div className="text-5xl mb-4 text-blue-600">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Particuliers</h3>
          <p className="text-gray-600">Maisons, appartements et résidences privées</p>
        </div>
        
        <div className="text-center p-6 rounded-lg bg-gray-50 card-hover">
          <div className="text-5xl mb-4 text-blue-600">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Qualité garantie</h3>
          <p className="text-gray-600">Satisfaction client et résultats impeccables</p>
        </div>
      </div>
    </div>
  )
}