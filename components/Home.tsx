import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

function Home() {
  const [number, setNumber] = useState(347);

  const [numberWorker, setNumberWorker] = useState(62);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(number + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [number]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumberWorker(numberWorker + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [numberWorker]);

  return (
    <div className="" style={{ backgroundColor: "#FFFFFF" }}>
      <Header />
      <div
        className="flex items-center justify-center mb-10 mt-28 h-24 ml-5 mr-5"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <h1 className="text-5xl font-semibold" style={{ color: "#68938B" }}>
          CONCIERGERIE À LA CARTE
        </h1>
      </div>
      <div className=" flex flex-row justify-between mb-5">
        <div className="w-full ml-5">
          <Image
            width={500}
            height={350}
            src="/concierge1.jpeg"
            alt="Concierge travail"
            className="w-full h-full object-cover"
            style={{ border: "2px solid red" }}
          />
        </div>
        <div className="w-full">
          <Image
            width={500}
            height={350}
            src="/concierge3.jpeg"
            alt="Concierge travail"
            className="w-full h-full object-cover"
            style={{ border: "2px solid red" }}
          />
        </div>
        <div className="w-full mr-5">
          <Image
            width={500}
            height={350}
            src="/concierge2.jpeg"
            alt="Concierge travail"
            className="w-full h-full object-cover"
            style={{ border: "2px solid red" }}
          />
        </div>
      </div>
      <div
        className="ml-5 mr-5 h-24 flex items-center justify-center text-2xl text-center"
        style={{ backgroundColor: "#F3F3F3" }}
      >
        Explorez une nouvelle ère de services de conciergerie avec QUEST, qui
        vous offre simplicité, flexibilité, qualité et paiement sécurisé.
      </div>
      <div className="flex items-center justify-center mt-10 mb-10">
        <div
          className="border-2 w-48 border-black p-5 flex items-center justify-center rounded-2xl text-2xl text-white"
          style={{ backgroundColor: "#414141" }}
        >
          <Link href="/clientsignuppage">DÉMARRER</Link>
        </div>
      </div>
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-3xl" style={{ color: "#68938B" }}>
          Tentez l'expérience et faites nous confiance
        </h1>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-center w-full pt-10 pb-10 mr-5 ml-5 bg-neutral-100">
          <Image
            width={120}
            height={120}
            src="/exp2.png"
            alt="Transaction logo"
            className="w-28 mb-5"
          />
          <p className="text-3xl mt-2 font-bold" style={{ color: "#68938B" }}>
            50 {number}
          </p>{" "}
          <p style={{ color: "#68938B" }}>transactions effectuées</p>
        </div>
        <div className="flex flex-col items-center w-full pt-10 pb-10 mr-5 ml-3 bg-neutral-100">
          <Image
            width={120}
            height={120}
            src="/exp1.png"
            alt="Active concierge logo"
            className="w-28 mb-5"
          />
          <p className="text-3xl mt-2 font-bold" style={{ color: "#68938B" }}>
            10 0{numberWorker}
          </p>{" "}
          <p style={{ color: "#68938B" }}>prestataires actifs</p>
        </div>
        <div className="flex flex-col items-center w-full pt-10 pb-10 mr-3 ml-3 bg-neutral-100">
          <Image
            width={120}
            height={120}
            src="/exp4.png"
            alt="Insurance logo"
            className="w-28 mb-5"
          />
          <p className="text-3xl mt-2 font-bold" style={{ color: "#68938B" }}>
            100%
          </p>{" "}
          <p style={{ color: "#68938B" }}>des prestations assurées</p>
        </div>
        <div className="flex flex-col items-center w-full pt-10 pb-10 mr-5 ml-5 bg-neutral-100">
          <Image
            width={120}
            height={120}
            src="/exp3.png"
            alt="Reviews logo"
            className="w-28 mb-5"
          />
          <p className="text-3xl  mt-2 font-bold" style={{ color: "#68938B" }}>
            4.7/5
          </p>{" "}
          <p style={{ color: "#68938B" }}>note moyennes des concierge</p>
        </div>
      </div>{" "}
      <div
        className={`${styles.servicescontainer} flex h-full mt-10 pt-20 pb-20`}
        style={{ backgroundColor: "#F0FDF6" }}
      >
        <div className={`${styles.service} w-6/12 ml-10 mr-10`}>
          <Image
            width={720}
            height={752}
            src="/introphoto.jpg"
            alt="Quest concierge in car"
            className="w-full h-full object-cover"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div
          className={`${styles.servicedescription} w-6/12 text-lack pr-10 flex flex-col text-left`}
          style={{ color: "#404145" }}
        >
          <div className="mb-10 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faCheck} className="h-8 text-lime-600" />
              <p className="text-2xl font-semibold pl-5">
                Respectez votre budget
              </p>
            </div>
            <p>
              Trouvez le bon service pour chaque fourchette de prix. Pas de
              tarifs horaires, seulement une tarification basée sur vos
              requêtes.
            </p>
          </div>

          <div className="mt-10 mb-10 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faCheck} className="h-8 text-lime-600" />
              <p className="text-2xl font-semibold pl-5">
                Obtenez une réponse à votre requête rapidement
              </p>
            </div>
            <p>
              Confiez votre demande à un concierge de confiance disponible
              immédiatement.
            </p>
          </div>
          <div className="mt-10 mb-10 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faCheck} className="h-8 text-lime-600" />
              <p className="text-2xl font-semibold pl-5">
                Payez quand vous êtes satisfait
              </p>
            </div>
            <p>
              Les devis préalables signifient aucune surprise. Les paiements ne
              sont libérés que lorsque vous approuvez.
            </p>
          </div>
          <div className="mt-10 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faCheck} className="h-8 text-lime-600" />
              <p className="text-2xl font-semibold pl-5">
                Comptez sur un support 24/7
              </p>
            </div>
            <p>
              Notre équipe de support disponible 24 heures sur 24 est là pour
              vous aider à tout moment, où que vous soyez.
            </p>
          </div>
        </div>
      </div>
      <div className="flex ml-5 mt-10 mb-10 font-semibold">
        <h1 className="text-3xl">Les clients nous font confiance</h1>
      </div>
      <div className="flex flex-row mb-10">
        <div className="flex flex-col w-full pt-3 pb-10 mr-3 ml-5 pl-3 bg-neutral-100">
          <img
            src="/trust.png"
            className="pb-3"
            alt="Trustpilot logo"
            style={{ height: "50%", width: "50%" }}
          />
          <p className="text-xl font-semibold">Expérience concluante!</p>{" "}
          <p>Super rapide pour trouver une personne, application géniale.</p>
        </div>
        <div className="flex flex-col w-full pt-3 pb-10 mr-3 ml-3 pl-3 bg-neutral-100">
          <img
            src="/trust.png"
            className="pb-3"
            alt="Trustpilot logo"
            style={{ height: "50%", width: "50%" }}
          />
          <p className="text-xl font-semibold">Satisfait</p>{" "}
          <p>
            Le concierge à accompli la mission en moins de 20 minutes, super.
          </p>
        </div>
        <div className="flex flex-col w-full pt-3 pb-10 mr-3 ml-3 pl-3 bg-neutral-100">
          <img
            src="/trust.png"
            className="pb-3"
            alt="Trustpilot logo"
            style={{ height: "50%", width: "50%" }}
          />
          <p className="text-xl font-semibold">Très pratique</p>{" "}
          <p>Un ami m'a recommandé cette application, je suis content que...</p>
        </div>
        <div className="flex flex-col w-full pt-3 pb-10 mr-3 ml-3 pl-3 bg-neutral-100">
          <img
            src="/trust.png"
            className="pb-3"
            alt="Trustpilot logo"
            style={{ height: "50%", width: "50%" }}
          />
          <p className="text-xl font-semibold">Mieux que Uber Eats</p>{" "}
          <p>Le concierge m'a livré en moins de 15 minutes.</p>
        </div>
        <div className="flex flex-col w-full pt-3 pb-10 mr-5 ml-3 pl-3 bg-neutral-100 pr-2">
          <img
            src="/trust.png"
            className="pb-3"
            alt="Trustpilot logo"
            style={{ height: "50%", width: "50%" }}
          />
          <p className="text-xl font-semibold">Je recommande</p>{" "}
          <p>J'ai parlé de cette application à tous mes amis...</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 mb-10">
        <div
          className="border-2 w-48 border-black p-5 flex items-center justify-center rounded-2xl text-2xl text-white"
          style={{ backgroundColor: "#414141" }}
        >
          <Link href="/clientsignuppage">DÉMARRER</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
