export default function Services() {
  const services = [
    {
      title: "Nettoyage de vitres",
      description: "Vitres impeccables pour bureaux et commerces",
      price: "À partir de 3€/fenêtre",
      features: ["Nettoyage écologique", "Résultat sans traces", "Service rapide"]
    },
    {
      title: "Entretien de châssis",
      description: "Protection et nettoyage complet de vos châssis",
      price: "À partir de 5€/fenêtre",
      features: ["Nettoyage en profondeur", "Protection UV", "Prolonge la durée de vie"]
    },
    {
      title: "Forfait complet",
      description: "Vitres + châssis pour un résultat optimal",
      price: "À partir de 7€/fenêtre",
      features: ["Service tout inclus", "Économie garantie", "Satisfaction 100%"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Nos Services</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-blue-600 font-bold text-xl mb-4">{service.price}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}