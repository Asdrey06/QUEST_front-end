import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Concierge() {
  return (
    <div className="" style={{ backgroundColor: "#f3f3f3" }}>
      <div
        className="flex flex-row items-center justify-between pr-10 pl-10 pb-5 pt-5"
        style={{ backgroundColor: "#33B49C" }}
      >
        <img src="/questlogowhite.png" className="h-10" />
        <FontAwesomeIcon icon={faUser} className="h-6 text-white" />
      </div>
      <div
        className="flex items-center justify-center mb-10 mt-10 h-24 ml-5 mr-5"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <h1 className="text-3xl font-semibold" style={{ color: "#68938B" }}>
          CONCIERGERIE À LA CARTE
        </h1>
      </div>
      <div className=" flex flex-row justify-between mb-5">
        <div className="w-full ml-5">
          <img
            src="/concierge1.jpeg"
            alt="Concierge photo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className=""
          />
        </div>
        <div className="w-full">
          <img
            src="/concierge3.jpeg"
            alt="Image 2"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="pl-3 pr-3"
          />
        </div>
        <div className="w-full mr-5">
          <img
            src="/concierge2.jpeg"
            alt="Image 3"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div
        className="ml-5 mr-5 h-24 flex items-center justify-center text-2xl text-center"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        Explorez une nouvelle ère de services de conciergerie avec QUEST, qui
        vous offre simplicité, flexibilité, qualité et paiement sécurisé.
      </div>
      <div className="flex items-center justify-center mt-10 mb-10">
        <button>
          <div
            className="border-2 w-48 border-black p-5 flex items-center justify-center rounded-2xl text-2xl text-white"
            style={{ backgroundColor: "#414141" }}
          >
            DÉMARRER
          </div>
        </button>
      </div>
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-3xl" style={{ color: "#68938B" }}>
          Tentez l'expérience et faites nous confiance
        </h1>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div
          className="flex flex-col items-center w-full pt-10 pb-10 mr-5 ml-5"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <img src="/exp2.png" className="w-28 mb-5" />
          <p className="text-3xl font-bold" style={{ color: "#68938B" }}>
            50 347
          </p>{" "}
          <p style={{ color: "#68938B" }}>transactions effectuées</p>
        </div>
        <div
          className="flex flex-col items-center w-full pt-10 pb-10 mr-5 ml-3"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <img src="/exp1.png" className="w-28 mb-5" />
          <p className="text-3xl font-bold" style={{ color: "#68938B" }}>
            10 062
          </p>{" "}
          <p style={{ color: "#68938B" }}>prestataires actifs</p>
        </div>
        <div
          className="flex flex-col items-center w-full pt-10 pb-10 mr-3 ml-3"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <img src="/exp4.png" className="w-28 mb-5" />
          <p className="text-3xl font-bold" style={{ color: "#68938B" }}>
            100%
          </p>{" "}
          <p style={{ color: "#68938B" }}>des prestations assurées</p>
        </div>
        <div
          className="flex flex-col items-center w-full pt-10 pb-10 mr-5 ml-5"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <img src="/exp3.png" className="w-28 mb-5" />
          <p className="text-3xl font-bold" style={{ color: "#68938B" }}>
            4.7/5
          </p>{" "}
          <p style={{ color: "#68938B" }}>note moyennes des concierge</p>
        </div>
      </div>
      <div className="flex ml-5 mt-10 mb-10 font-semibold">
        <h1 className="text-3xl">Les clients nous font confiance</h1>
      </div>
      <div className="flex flex-row mb-10">
        <div
          className="flex flex-col w-full pt-3 pb-10 mr-3 ml-5 pl-3"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <img
            src="/trust.png"
            className="pb-3"
            style={{ height: "50%", width: "50%" }}
          />
          <p className="text-2xl font-semibold">Expérience concluante!</p>{" "}
          <p>Super rapide pour trouver une personne, application géniale.</p>
        </div>
        <div
          className="flex flex-col w-full pt-3 pb-10 mr-3 ml-3 pl-3"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <img
            src="/trust.png"
            className="pb-3"
            style={{ height: "50%", width: "50%" }}
          />
          <p className="text-2xl font-semibold">Satisfait</p>{" "}
          <p>
            Le concierge à accompli la mission en moins de 20 minutes, super.
          </p>
        </div>
        <div
          className="flex flex-col w-full pt-3 pb-10 mr-3 ml-3 pl-3"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <img
            src="/trust.png"
            className="pb-3"
            style={{ height: "50%", width: "50%" }}
          />
          <p className="text-2xl font-semibold">Très pratique</p>{" "}
          <p>Un ami m'a recommandé cette application, je suis content que...</p>
        </div>
        <div
          className="flex flex-col w-full pt-3 pb-10 mr-3 ml-3 pl-3"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <img
            src="/trust.png"
            className="pb-3"
            style={{ height: "50%", width: "50%" }}
          />
          <p className="text-2xl font-semibold">Mieux que Uber Eats</p>{" "}
          <p>Le concierge m'a livré en moins de 15 minutes.</p>
        </div>
        <div
          className="flex flex-col w-full pt-3 pb-10 mr-5 ml-3 pl-3"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <img
            src="/trust.png"
            className="pb-3"
            style={{ height: "50%", width: "50%" }}
          />
          <p className="text-2xl font-semibold">Je recommande</p>{" "}
          <p>J'ai parlé de cette application à tous mes amis...</p>
        </div>
      </div>
      <div
        className="w-full h-full pt-5 pl-5 flex flex-row justify-between"
        style={{ backgroundColor: "#33B49C" }}
      >
        <div className="flex ">
          <div className="flex flex-row">
            <img src="/questlogowhite.png" className="h-8" />
          </div>
          <div className="flex flex-col text-white pb-5 pl-5">
            <p>FAQ</p>
            <p>CONTACTEZ-NOUS</p>
            <p>MENTIONS LÉGALES</p>
            <p>RGPD</p>
          </div>
        </div>
        <div className="flex flex-col justify-between pb-5">
          <div className="mr-10 text-white">DEVENIR CONCIERGE</div>
          <div className="flex flex-row justify-end mr-10">
            <FontAwesomeIcon icon={faInstagram} className="h-6 text-white" />
            <FontAwesomeIcon
              icon={faFacebook}
              className="h-6 text-white ml-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Concierge;
