import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function FAQ() {
  return (
    <div
      className="bg-white"
      style={{
        backgroundImage: "url(/whitebg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <h1 className="text-3xl font-bold mb-5 text-center mt-24">
        Centre d'aide
      </h1>
      <div className="bg-white border-2 p-8 mb-16 rounded-md shadow-lg max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2" id="titre">
          Quels services puis-je trouver sur Quest ?
        </h2>
        <h3 className="mb-3 text-justify">
          Bonjour ! Quest est une plateforme dédiée aux Services aux
          particuliers. Il vous suffit de faire une demande de service sur notre
          site pour trouver des concierges disponibles au lieu et au moment de
          votre choix.
        </h3>
        <ul className="mb-3 text-justify">
          <li>
            - Livrer des colis ou autres commandes au domicile ou sur le lieu de
            travail de vos clients.
          </li>
          <li>
            - Ammener des vêtements en pressing et les ramener sur le lieu de
            travail du client .
          </li>
          <li className="mb-1 text-justify"></li>
          <li className="mb-1 text-justify">
            - Louer ou acheter des objets pour le compte des clients.
          </li>
          <li className="mb-1 text-justify">- Petits travaux.</li>
          <li className="mb-1 text-justify">- Faire les courses.</li>
          <li className="mb-1 text-justify">
            - Nourrir et promener des animaux de compagnie.
          </li>
          <li className="mb-1 text-justify">
            - Faire l’accueil et le ménage dans des AirBnb.
          </li>
          <li className="mb-1 text-justify">- Et bien plus encore...</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">
          Comment faire une demande de service ?
        </h2>
        <h3 className="mb-3 text-justify">
          Trouver un prestataire pour vos besoins, rien de plus simple !
        </h3>
        <ol>
          <li className="mb-1 text-justify">
            1. Rendez-vous sur https:/quest.fr{" "}
          </li>
          <li className="mb-1 text-justify">2. Créer un compte client.</li>
          <li className="mb-1 text-justify">
            3. Sélectionner un un concierge à proximité pouvant répondre à votre
            besoin.
          </li>
          <li className="mb-1 text-justify">
            4. Remplissez le formulaire en spécifiant les détails et
            descriptions de votre demande ainsi que la date et heure prévue pour
            la prestation.
          </li>
        </ol>
        <p className="mb-3 text-justify">
          5. Il ne vous reste plus qu'à cliquer sur "Faire une offre" pour
          finaliser votre demande et attendre la confirmation du concierge
          sélectionné.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          Comment annuler ma requête ?
        </h2>
        <ol>
          <li className="mb-1 text-justify">
            1. Connectez-vous à votre compte Quest et rendez-vous sur votre
            tableau de bord.
          </li>
          <li className="mb-1 text-justify">
            2. Sélectionner la requête a annuler.
          </li>
          <li className="mb-1 text-justify">
            3. Cliquez sur annuler la requête.
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
