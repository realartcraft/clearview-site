export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Éditeur du site</h2>
        <p>
          ClearView<br />
          Service professionnel de nettoyage de vitres<br />
          Adresse : Rue de l&apos;Exemple 123, 1000 Bruxelles<br />
          Email : contact@clearview.be<br />
          Téléphone : +32 123 45 67 89
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Hébergement</h2>
        <p>
          Ce site est hébergé par Vercel Inc.<br />
          340 S Lemon Ave #4133<br />
          Walnut, CA 91789<br />
          États-Unis
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble de ce site relève de la législation belge et internationale 
          sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits 
          de reproduction sont réservés, y compris pour les documents téléchargeables 
          et les représentations iconographiques et photographiques.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Protection des données</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de modification, 
          de rectification et de suppression des données vous concernant. Pour exercer 
          ce droit, contactez-nous à contact@clearview.be.
        </p>
      </div>
    </div>
  )
}