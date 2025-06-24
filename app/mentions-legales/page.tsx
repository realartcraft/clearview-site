export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
      
      <div className="prose prose-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
          <p>
            ClearView<br />
            [Votre adresse]<br />
            Bruxelles, Belgique<br />
            Email: contact@clearview.be<br />
            Tél: +32 123 45 67 89
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Protection des données</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification
            et de suppression des données vous concernant. Pour exercer ce droit, 
            contactez-nous à: contact@clearview.be
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site est protégé par le droit d&apos;auteur.
            Toute reproduction est interdite sans autorisation préalable.
          </p>
        </section>
      </div>
    </div>
  );
}