import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 - À propos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ClearView</h3>
            <p className="text-gray-300">
              Service professionnel de nettoyage de vitres et entretien de châssis à Bruxelles.
            </p>
          </div>
          
          {/* Colonne 2 - Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services" className="hover:text-white">Nos services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
            </ul>
          </div>
          
          {/* Colonne 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: contact@clearview.be<br />
              Tél: +32 123 45 67 89<br />
              Bruxelles, Belgique
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 ClearView. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}