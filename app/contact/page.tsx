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
          <div className="text-4xl mb-4">🏢</div>
          <h3 className="text-xl font-semibold mb-2">Professionnels</h3>
          <p className="text-gray-600">Bureaux, commerces et espaces professionnels</p>
        </div>
        
        <div className="text-center p-6 rounded-lg bg-gray-50 card-hover">
          <div className="text-4xl mb-4">🏠</div>
          <h3 className="text-xl font-semibold mb-2">Particuliers</h3>
          <p className="text-gray-600">Maisons, appartements et résidences privées</p>
        </div>
        
        <div className="text-center p-6 rounded-lg bg-gray-50 card-hover">
          <div className="text-4xl mb-4">✨</div>
          <h3 className="text-xl font-semibold mb-2">Qualité garantie</h3>
          <p className="text-gray-600">Satisfaction client et résultats impeccables</p>
        </div>
      </div>
    </div>
  )
}