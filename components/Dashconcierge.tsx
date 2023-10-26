import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import Header from "./Header";
import Footer from "./Footer";
import Header from "./Header";
import RequestList from "./RequestList";

function Dashconcierge() {
  const [requests, setRequests] = useState([]);

  const concierge = useSelector((state) => state.concierges.value);

  const user = useSelector((state) => state.users.value);

  useEffect(() => {
    // Exemple de requête GET, assurez-vous de remplacer l'URL par votre propre endpoint
    fetch("http://localhost:3000/request/requests")
      .then((response) => response.json())
      .then((data) => {
        setRequests(data.allRequest);
        console.log(data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
      });
  }, []);

  useEffect(() => {
    if (concierge.status === null) {
      alert("Vous n'êtes pas connecté sur un compte concierge.");
      window.location.href = "/clientwelcome";
    }

    if (user.status === null && concierge.status === null) {
      window.location.href = "/";
    }
  }, []);

  const requestList = requests.map((data, i) => {
    console.log(data);
    return (
      <RequestList
        instruction={data.instruction}
        paymentInfo={data.paymentInfo}
        date={data.date}
        serviceFees={data.serviceFees}
        productFees={data.productFees}
        totalFees={data.totalFees}
      />
    );
  });

  // name={data.firstname}
  // poster={data.photo}
  // voteAverage={data.voteAverage}
  // langue={data.personalInfo[0].languages}
  // overview={data.personalInfo[0].aboutme}

  return (
    <div className="mt-20" style={{ backgroundColor: "#FFFFFF" }}>
      <Header />
      <p className="ml-10 mt-10 font-semibold text-xl flex items-center">
        Bonjour{" "}
        <p className="italic ml-1 text-2xl text-slate-500">
          {concierge.firstname}
        </p>
        , bienvenue dans votre dashboard concierge
      </p>
      <div className="flex flex-row justify-between">
        <h3 className="ml-10 mt-6 mb-10 text-emerald-600 text-2xl font-semibold">
          DEMANDES/MESSAGES REÇUES
        </h3>
        <p className="mt-16 mr-64 font-semibold">Vos statistiques</p>
      </div>

      <div className="justify-between w-full flex flex-row h-full mb-10">
        <div className="flex flex-col w-5/12">{requestList}</div>

        <div className="flex flex-col">
          <div className="box-border h-56 w-64 p-4 border-4 mb-5 rounded-3xl float-right mr-32"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Dashconcierge;
