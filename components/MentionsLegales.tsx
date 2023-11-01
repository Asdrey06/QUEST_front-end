import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from 'next/image';

function MentionsLegales() {
  return (
    <div
      className="bg-white"
      style={{
        backgroundImage: "url(/whitebg.webp)", // Assuming your image is in the public directory
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <h1 className="text-3xl font-bold mb-5 text-center mt-24">
        Mentions Légales
      </h1>
      <div className="bg-white border-2 p-8 mb-16 rounded-md shadow-lg max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">1. Présentation du site.</h2>
        <p className="mb-3 text-justify">
          En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
          confiance dans l'économie numérique, il est précisé aux utilisateurs
          du site Quest l'identité des différents intervenants dans le cadre de
          sa réalisation et de son suivi.
        </p>
        <h3 className="text-lg font-medium mb-2">Informations générales :</h3>
        <p className="mb-2">Propriétaire : La Capsule </p>
        <p className="mb-2"> Type de structure: SARL </p>
        <p className="mb-2"> Adresse : 6 rue Sorgentino 06300 Nice </p>
        <p className="mb-2"> Créateur: Equipe La Capsule </p>
        <p className="mb-2"> Responsable : Nikita Koffman </p>
        <p className="mb-5"> Hebergeur: Vercel</p>
        <h2 className="text-xl font-semibold mb-2">
          2. Conditions générales d'utilisation du site et des services
          proposés.
        </h2>
        <p className="mb-5 text-justify">
          L'utilisation du site Quest implique l'acceptation pleine et entière
          des conditions générales d'utilisation ci-après décrites. Ces
          conditions d'utilisation sont susceptibles d'être modifiées ou
          complétées à tout moment, les utilisateurs du site Quest sont donc
          invités à les consulter de manière régulière.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          3. Description des services fournis.
        </h2>
        <p className="mb-5 text-justify">
          Quest est une plateforme de conciergerie en ligne ayant pour objectif
          de faciliter le quotidien de ses utilisateurs en proposant une variété
          de services à la demande. Le propriétaire du site s'efforce de fournir
          sur le site Quest des informations aussi précises que possible.
          Toutefois, il ne pourra être tenu responsable des omissions, des
          inexactitudes et des carences dans la mise à jour, qu'elles soient de
          son fait ou du fait des tiers partenaires qui lui fournissent ces
          informations.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          4. Limitations contractuelles sur les données techniques.
        </h2>
        <p className="mb-5 text-justify">
          Le site utilise la technologie JavaScript. Le site Internet ne pourra
          être tenu responsable de dommages matériels liés à l'utilisation du
          site. De plus, l'utilisateur du site s'engage à accéder au site en
          utilisant un matériel récent, ne contenant pas de virus et avec un
          navigateur de dernière génération mis-à-jour.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          5. Propriété intellectuelle et contrefaçons.
        </h2>
        <p className="mb-5 text-justify">
          La Capsule est propriétaire des droits de propriété intellectuelle et
          détient les droits d'usage sur tous les éléments accessibles sur le
          site, notamment les textes, images, graphismes, logos, icônes. Toute
          reproduction, représentation, modification, publication, adaptation de
          tout ou partie des éléments du site, quel que soit le moyen ou le
          procédé utilisé, est interdite, sauf autorisation écrite préalable de
          la Capsule.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default MentionsLegales;
