import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function RGPD() {
  return (
    <>
      {" "}
      <Header />
      <div
        className="flex items-center bg-white justify-center mt-14"
        style={{
          backgroundImage: "url(/whitebg.webp)", // Assuming your image is in the public directory
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[9C339C] mb-10 ">
          <h1 className="text-3xl font-bold mb-6 text-center mt-5">
            Politique de confidentialité et RGPD
          </h1>
          <div className="bg-white border-2  p-8 rounded-md shadow-lg max-w-4xl mx-auto justify-center">
            <h2 className="text-xl font-semibold mb-3">1. Introduction :</h2>
            <p className="mb-3">
              Dans le cadre de son activité, Quest, service de conciergerie en
              ligne, attache une grande importance à la protection et au respect
              de la vie privée de ses utilisateurs. Cette politique vise à vous
              informer de nos pratiques concernant la collecte, l'utilisation et
              le partage des informations que vous êtes amené à nous fournir par
              le biais de notre site.
            </p>

            <h2 className="text-xl font-semibold mb-3">
              2. Les informations que nous collectons :
            </h2>
            <p className="mb-3">
              Nous collectons les informations que vous nous transmettez
              directement. Lorsque vous interagissez avec notre site, nous
              pouvons collecter des informations telles que votre nom, votre
              adresse e-mail, votre adresse postale, etc.
            </p>

            <h2 className="text-xl font-semibold mb-3">
              3. Utilisation des informations :
            </h2>
            <p className="mb-3">
              Les informations que nous collectons nous permettent d'offrir et
              d'améliorer nos services. Nous pouvons également utiliser ces
              informations pour communiquer avec vous, par exemple pour vous
              informer de nos services et de nos offres.
            </p>

            <h2 className="text-xl font-semibold mb-3">
              4. Partage des informations :
            </h2>
            <p className="mb-3">
              Nous ne partageons, ne vendons ni n'échangeons jamais vos
              informations personnelles avec des tiers à des fins commerciales
              sans votre consentement.
            </p>

            <h2 className="text-xl font-semibold mb-3">5. Vos droits :</h2>
            <p className="mb-3">
              Conformément à la réglementation applicable, vous disposez de
              différents droits concernant vos données : droit d'accès, de
              rectification, de suppression, d'opposition, etc. Pour toute
              demande relative à vos données, vous pouvez contacter notre
              service dédié.
            </p>

            <h2 className="text-xl font-semibold mb-3">6. Sécurité :</h2>
            <p className="mb-3">
              Nous mettons en œuvre toutes les mesures de sécurité nécessaires
              pour protéger vos informations personnelles contre tout accès et
              toute divulgation, modification ou destruction non autorisés.
            </p>

            <h2 className="text-xl font-semibold mb-3">7. Modifications :</h2>
            <p className="mb-3">
              Notre politique de confidentialité peut être modifiée. Si nous
              apportons des modifications, nous vous en informerons afin que
              vous puissiez revoir et, si nécessaire, vous opposer à ces
              modifications.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RGPD;
