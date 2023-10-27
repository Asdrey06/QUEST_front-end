// FETCH USEEFFECT EN GET QUI CHOPPE LES REQUESTS INFOS PUIS QUI LES METS DANS DES USESTATE

import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
// import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
// import { faStar } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
// import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
// import {
//   faArrowRight,
//   faCheck,
// } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
// import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Header from "./Header";
// import TypedInputNumber from "antd/es/input-number";

function OpenRequest() {
  const [instruction, setInstruction] = useState([]);
  const [requests, setRequests] = useState(null);

  const [serviceFees, setServiceFees] = useState(0);
  const [productFees, setProductFees] = useState(0);
  console.log(instruction);
  const calculateTotalCosts = () => {
    const valueServiceFees = serviceFees || 0;
    const valueProductFees = productFees || 0;
    const costsTotal = valueServiceFees + valueProductFees;
    return costsTotal;
  };
  useEffect(() => {
    // Exemple de requête GET, assurez-vous de remplacer l'URL par votre propre endpoint
    fetch("http://localhost:3000/request/requests")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRequests(data.allRequests); // Stocke les données dans le state
        setInstruction(data.instruction);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
      });
    [];
  });

  return (
    <div
      className="flex flex-col"
      style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}
    >
      <Header />
      <div className=" mb-10 text-emerald-600 text-2xl font-semibold text-center">
        <FontAwesomeIcon icon={faUser} size="2x" />
        <div className="mb-5 text-emerald-600 text-2xl font-semibold text-center"></div>
      </div>

      <div className="ml-10 mt-30 mb-10 text-emerald-600 text-2xl font-semibold text-center">
        REQUÊTE EN COURS
      </div>

      <div className=" flex justify-center mb-5 flex-row flex text-emerald-600 text-2xl font-semibold ml-5">
        <FontAwesomeIcon icon={faUser} size="1x" />
        <div className=" flex-col flex  mr-5 text-emerald-600 font-semibold font-light text-lg mb-3 font-semibold">
          <div className="flex flex-col ml-10"> Jane Doe</div>
          <div className="flex flex-col ml-5 mt-5">
            <textarea
              className="flex flex-col align-top text-lg w-80 h-40 mb-8 border-2 w-4/12 p-2 rounded-xl border-neutral-400"
              placeholder="Chat avec le client"
            ></textarea>
          </div>
          <div className="flex flex-col mt-5">
            <iframe
              className="h-48 w-96 p-2 rounded-xl  "
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11537.773383415211!2d7.29766255!3d43.7013348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1698325376308!5m2!1sfr!2sfr"
            ></iframe>
          </div>
        </div>
        <div className="ml-15 flex-row flex text-emerald-600 text-2xl font-semibold ml-5">
          <div className="flex flex-col">
            <h1 className=" ml-20 flex flex-col font-light text-lg  font-semibold">
              RAPPEL DES INSTRUCTIONS
            </h1>
            <div className="flex flex-col ml-20 mt-5">{instruction}</div>
            <div className="flex flex-col">
              <h1 className="ml-20 flex flex-col font-light text-lg font-semibold">
                COORDONNÉES CONCIERGE
              </h1>
            </div>
            <div className="flex flex-col ml-20 mt-5">
              <input
                type="text"
                className="text-base w-80 h-7 border-2 w-4/12 p-2 rounded-xl border-neutral-400"
                placeholder="Nom/prénom"
              />
            </div>
            <div className="flex flex-col ml-20 mt-5">
              <input
                type="text"
                className="text-base w-80 h-7 border-2 w-4/12 p-2 rounded-xl border-neutral-400"
                placeholder="Téléphone/Email"
              />
            </div>
            <div className="flex flex-col ml-20 mt-5">
              <input
                type="text"
                className="text-base mb-10 w-80 h-7 border-2 w-4/12 p-2 rounded-xl border-neutral-400"
                placeholder="Montant total"
              ></input>
              <div
                className={`${styles.hovereffect} flex cursor-pointer h-10 border-2 pl-5 pr-5 pt-2 pb-2 flex items-center justify-center rounded-2xl w-50 text-xl text-white`}
                // onClick={handleRegister}
              >
                Annuler la requête
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default OpenRequest;
