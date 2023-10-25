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
  const [instruction, setInstruction] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");
  const [date, setDate] = useState("");
  const [servicefees, setServicefees] = useState("");
  const [productFees, setProductFees] = useState("");
  const [totalFees, setTotalFees] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");


  const totalPrice = () => 

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  const newRequest = () => {
    fetch("http://localhost:3000/request/saveRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        instruction: instruction,
        paymentInfo: paymentInfo,
        date: date,
        servicefees: servicefees,
        productFees: productFees,
        totalFees: totalFees,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  console.log(date);
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
          onChange={(e) => setInstruction(e.target.value)}
          value={instruction}
        />
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p>Pour quand ... ?</p>
              <div className="mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    name="when"
                    value={date}
                    disabled={
                      selectedRadio === "Aujourdhui" ||
                      selectedRadio === "DateIndeterminee"
                    }
                  />
                </label>
              </div>
            </div>
            <div>
              <input
                type="text"
                className="mt-3 mb-3 border-2 w-9/12 p-2 rounded-xl border-neutral-500"
                placeholder="Offre pour le service "
                onChange={(e) => setServicefees(e.target.value)}
                value={servicefees}
              />
              <input
                type="text"
                className="mt-3 mb-3 border-2 w-9/12 p-2 rounded-xl border-neutral-500"
                placeholder="Prix des produits (si applicable) "
                onChange={(e) => setProductFees(e.target.value)}
                value={productFees}
              />
            </div>
            {totalPrice}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <p>Choisir un mode de paiement</p>
            <div className="mt-2">
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
          onClick={newRequest}
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
