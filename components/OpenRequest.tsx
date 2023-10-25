
// FETCH USEEFFECT EN GET QUI CHOPPE LES REQUESTS INFOS PUIS QUI LES METS DANS DES USESTATE

import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faStar } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faArrowRight, faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Header from "./Header";

function OpenRequest() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Exemple de requête GET, assurez-vous de remplacer l'URL par votre propre endpoint
    fetch("http://localhost:3000/request/saveRequest")
      .then((response) => response.json())
      .then((data) => {
        setRequests(data); // Stocke les données dans le state
        setLoading(false); // Met fin au chargement
      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
        setLoading(false); // Met fin au chargement en cas d'erreur
      });
  }, []);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="flex flex-col" style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1 }}></div>
      <div className="mt-2 text-emerald-600 text-2xl font-semibold text-center">
        REQUETES EN COURS
      </div>
      <div style={{ marginLeft: "5cm" }}>
        <FontAwesomeIcon icon={faUser} size="2x" />
      </div>
      <div style={{ marginLeft: "5cm", marginTop: "1cm" }}>
        <input
          type="text"
          style={{ width: "10cm", height: "5cm" }}
          className="border-2 p-2 rounded-xl border-neutral-500"
          placeholder="Chat direct avec le client"
        />
      </div>
      <div style={{ marginLeft: "5cm", marginTop: "5cm" }}>
        <input
          type="text"
          style={{ width: "10cm", height: "5cm" }}
          className="border-2 p-2 rounded-xl border-neutral-500"
          placeholder="LIVE MAP DU CONCIERGE"
        />
        <div style={{ marginLeft: "5cm", marginTop: "5cm" }}></div>
      </div>
      <input
          type="text"
          style={{ width: "10cm", height: "5cm" }}
          className="border-2 p-2 rounded-xl border-neutral-500"
          placeholder="DETAILS/INSTRUCTIONS"
        />
      <Footer />
    </div>
  );
}

export default OpenRequest;