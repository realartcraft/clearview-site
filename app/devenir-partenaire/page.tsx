'use client'

import { useState } from 'react'

export default function DevenirPartenaire() {
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    codePostal: '',
    services: [] as string[],
    experience: '',
    message: ''
  })

  const services = [
    'Nettoyage de vitres',
    'Rénovation de châssis',
    'Autres services'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Envoyer à EmailJS ou API
    console.log('Formulaire partenaire:', formData)
    alert('Merci pour votre candidature ! Nous vous contacterons sous 48h.')
  }

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Rejoignez le réseau <span className="text-blue-600">Angevo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
            Devenez partenaire et développez votre activité avec nous. 
            Plus de 500 clients attendent vos services à Bruxelles.
          </p>
          
          {/* Avantages */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="font-bold mb-2">Revenus réguliers</h3>
              <p className="text-gray-600">Augmentez votre chiffre d&apos;affaires avec des clients qualifiés</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-bold mb-2">Application simple</h3>
              <p className="text-gray-600">Gérez vos interventions facilement depuis votre téléphone</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-bold mb-2">Support dédié</h3>
              <p className="text-gray-600">Une équipe à votre écoute pour vous accompagner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Candidature Partenaire
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Infos personnelles */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.nom}
                  onChange={(e) => setFormData({...formData, nom: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Entreprise</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.entreprise}
                  onChange={(e) => setFormData({...formData, entreprise: e.target.value})}
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.telephone}
                  onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                />
              </div>
            </div>

            {/* Zone */}
            <div>
              <label className="block text-sm font-medium mb-2">Zone d&apos;intervention (Code postal) *</label>
              <input
                type="text"
                required
                placeholder="Ex: 1000, 1050, 1180..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.codePostal}
                onChange={(e) => setFormData({...formData, codePostal: e.target.value})}
              />
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm font-medium mb-4">Services proposés *</label>
              <div className="grid grid-cols-2 gap-3">
                {services.map(service => (
                  <label key={service} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                    />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Expérience */}
            <div>
              <label className="block text-sm font-medium mb-2">Années d&apos;expérience *</label>
              <select
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
              >
                <option value="">Sélectionnez</option>
                <option value="0-2">0-2 ans</option>
                <option value="2-5">2-5 ans</option>
                <option value="5-10">5-10 ans</option>
                <option value="10+">Plus de 10 ans</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message (optionnel)</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Parlez-nous de votre activité, vos disponibilités..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Envoyer ma candidature
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}