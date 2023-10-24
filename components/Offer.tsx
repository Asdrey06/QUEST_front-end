import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faStar } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import {
  faArrowRight,
  faCheck,
} from "../node_modules/@fortawesome/free-solid-svg-icons/index";
// import { faSolid } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Offer() {
  return (
    <div>
      {/* HEADER START */}
      <Header />
      {/* HEADER END */}
      <div className="h-full mt-20">
        {/* Contenu de la page */}
        <p className="text-lg font-bold">
          Faire une offre à 'nom du concierge'
        </p>
        <input
          type="text"
          className="mt-3 mb-3 border-2 w-9/12 p-2 rounded-xl border-neutral-500"
          placeholder="Détails / Instructions ... "
        />
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-6">
       
            <div>
              <p>Pour quand ... ?</p>
              <div className="mt-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="when" value="Aujourd'hui" />
                  Aujourd'hui
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="when" value="DateAVoir" />
                  Date à voir
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="when" value="DateIndeterminee" />
                  Date indéterminée
                </label>
              </div>
            </div>
            <div>
            <input
          type="text"
          className="mt-3 mb-3 border-2 w-9/12 p-2 rounded-xl border-neutral-500"
          placeholder="Offre pour le service "
        /><input
        type="text"
        className="mt-3 mb-3 border-2 w-9/12 p-2 rounded-xl border-neutral-500"
        placeholder="Prix des produits (si applicable) "
      />
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <p>Choisir un mode de paiement</p>
            <div className="mt-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" value="Visa" />
                Visa carte
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" value="PayPal" />
                PayPal
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" value="Autre" />
                Ajouter un mode de paiement
              </label>
            </div>
          </div>
        </div>
        <button
          className="mt-8 p-3 text-white rounded-xl float-right"
          style={{ backgroundColor: "#33B49C" }}
        >
          Faire offre
        </button>
      </div>
      {/* FOOTER */}
      <Footer />
      {/* FOOTER END */}
  
    </div>
  );
}

export default Offer;

