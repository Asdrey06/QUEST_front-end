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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51O5Pe4EJfzDuDpS93P4i7BhpMBysfhQcCRTNy30RVe836BG28cefyxPx91pBFJlc3MN5k1yhA0kl9k2wciMApvoC007zqXOe23"
);

function Offer() {
  useEffect(() => {
    // Make a GET request to your server to fetch the clientSecret
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // You can include any additional data in the request body if needed
      body: JSON.stringify({
        /* additional data */
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log(data.clientSecret);
      })
      .catch((error) => {
        console.error("Error fetching clientSecret:", error);
      });
  }, []);

  const [clientSecret, setClientSecret] = useState("");

  console.log(clientSecret);

  const options = {
    clientSecret: clientSecret,
  };

  const [instruction, setInstruction] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");
  const [date, setDate] = useState("");
  const [serviceFees, setServiceFees] = useState("");
  const [productFees, setProductFees] = useState("");
  // const [totalFees, setTotalFees] = useState(0);
  const [selectedRadio, setSelectedRadio] = useState("");

  const calculateTotalCosts = () => {
    const valueServiceFees = serviceFees || 0;
    const valueProductFees = productFees || 0;

    const costsTotal = valueServiceFees + valueProductFees;
    return costsTotal;
  };

  const newRequest = () => {
    fetch("http://localhost:3000/request/saveRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        instruction: instruction,
        paymentInfo: paymentInfo,
        date: date,
        serviceFees: serviceFees,
        productFees: productFees,
        totalFees: serviceFees + productFees,
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
      <div className="h-screen mb-20 mt-14 ">
        {/* Contenu de la page */}
        <h1
          className="flex flex-col items-center justify-center pl-10 pb-3 pt-3 w-full mb-10 text-3xl font-semibold"
          style={{ color: "#68938B", backgroundColor: "#EFFDF5" }}
        >
          Faire une offre à *nom concierge*
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-col  w-6/12">
            <textarea
              className="ml-20 mt-3 mb-3 border-2 p-2 rounded-xl border-neutral-500 h-48 w-100"
              placeholder="Détails / Instructions ... "
              onChange={(e) => setInstruction(e.target.value)}
              value={instruction}
            />
            <div className="mt-8 flex">
              <div className="flex ">
                <div>
                  <p className="ml-20 mb-5 text-2xl font-semibold text-emerald-600">
                    Pour quand ... ?
                  </p>
                  <div className="flex ml-20 mt-2">
                    <label className="flex items-center space-x-2">
                      <input
                        className="text-xl text-emerald-700 border-2 border-emerald-700 p-2 rounded-lg"
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
                <div className="flex ml-20 flex-col w-64 mb-10">
                  <input
                    type="text"
                    className="mt-3 mb-3 w-full border-2 p-2 rounded-xl border-neutral-500"
                    placeholder="Offre pour le service "
                    onChange={(e) => setServiceFees(Number(e.target.value))}
                    value={serviceFees}
                  />
                  <input
                    type="text"
                    className="mt-3 mb-3 border-2 w-full p-2 rounded-xl border-neutral-500"
                    placeholder="Prix des produits (si applicable) "
                    onChange={(e) => setProductFees(Number(e.target.value))}
                    value={productFees}
                  />
                  <p className="mt-2  font-semibold flex items-center justify-end flex w-full">
                    Total :{" "}
                    <p className="text-2xl ml-2">{calculateTotalCosts()} €</p>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-24 flex flex-col justify-start mr-20 w-5/12">
            <div className="mb-5 flex flex-col  ">
              <p className="italic ml-10 pt-2">
                Veuillez saisir vos informations de paiement
              </p>

              <div className="mt-2 ">
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
                <button
                  className="mt-8 p-3 text-white rounded-xl float-right"
                  style={{ backgroundColor: "#33B49C" }}
                  onClick={newRequest}
                >
                  Faire offre
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
      {/* FOOTER END */}
    </div>
  );
}

export default Offer;
