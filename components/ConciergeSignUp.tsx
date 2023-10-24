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

function ConciergeSignUp() {
  return (
    <div>
      {/* HEADER START */}
      <Header />
      {/* HEADER END */}
      <div className="h-full mt-20">
        <div className="flex">
          {" "}
          <h1
            className="pl-10  pb-5 pt-5 w-full mb-5 text-3xl font-semibold"
            style={{ color: "#68938B", backgroundColor: "#EFFDF5" }}
          >
            Créez votre compte concierge
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="ml-10 flex flex-col w-4/12">
            <h1 className="font-light text-lg mb-5">Vos coordonnées</h1>
            <div className="flex flex-row">
              <input
                type="text"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Prénom..."
              />

              <input
                type="text"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nom..."
              />
            </div>
            <div className="flex flex-row">
              <input
                type="text"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nom d'utilisateur..."
              />

              <input
                type="text"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Mot de passe..."
              />
            </div>
            <div className="flex flex-row">
              <input
                type="text"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Date de naissance..."
              />

              <input
                type="text"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nationalité..."
              />
            </div>
            <div className="flex flex-row">
              <input
                type="textarea"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Adresse..."
              />

              <input
                type="textarea"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Code postal..."
              />
            </div>
            <div className="flex flex-row">
              <input
                type="textarea"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Ville..."
              />

              <input
                type="textarea"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="E-mail..."
              />
            </div>
            <div className="flex flex-row">
              <input
                type="textarea"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Numéro de téléphone..."
              />

              <input
                type="textarea"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Compétences..."
              />
            </div>
            <div className="flex flex-row">
              <input
                type="textarea"
                className=" mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Langues parlées..."
              />

              <input
                type="textarea"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="À propos de vous..."
              />
            </div>
            <div className="flex flex-row">
              <input
                type="textarea"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Moyen de déplacement..."
              />

              <input
                type="textarea"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Permis..."
              />
            </div>
            <div className="flex flex-row mb-5">
              <input
                type="textarea"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Compétences..."
              />
            </div>
          </div>
          <div className="ml-10 flex flex-col w-4/12">
            <h1 className="font-light text-lg mb-5">Vos documents</h1>
            <div className="flex flex-col">
              {" "}
              <label
                className="items-center text-xs flex-col flex justify-center text-center text-neutral-500 rounded-lg px-4 py-2 w-3/12 h-32 cursor-pointer hover:bg-neutral-200"
                style={{ border: "3px solid #34B39C" }}
              >
                <p className="mb-3">Enregistrer photo de profil</p>
                <p>(format .JPG ou .PNG, moins de 2Mo)</p>
                <input type="file" className="hidden" />
              </label>
            </div>
            <div className="flex flex-col mt-5">
              <label
                className="text-neutral-500 rounded-lg px-4 py-2 w-7/12 cursor-pointer hover:bg-neutral-200"
                style={{ border: "3px solid #34B39C" }}
              >
                Importez votre pièce d'identité
                <input type="file" className="hidden" />
              </label>
            </div>
            <div className="flex flex-col mt-5">
              <label
                className="text-neutral-500 rounded-lg px-4 py-2 w-7/12 cursor-pointer hover:bg-neutral-200"
                style={{ border: "3px solid #34B39C" }}
              >
                Importez extrait de votre kbis
                <input type="file" className="hidden" />
              </label>
            </div>
            <div className="flex flex-col mt-5">
              <label
                className="text-neutral-500 rounded-lg px-4 py-2 w-8/12 cursor-pointer hover:bg-neutral-200"
                style={{ border: "3px solid #34B39C" }}
              >
                Importez extrait de votre casier judiciaire
                <input type="file" className="hidden" />
              </label>
            </div>
            <div className="flex flex-col mt-5">
              <label
                className="text-neutral-500 rounded-lg px-4 py-2 w-9/12 cursor-pointer hover:bg-neutral-200"
                style={{ border: "3px solid #34B39C" }}
              >
                Importez permis de conduire (si applicable)
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="">
              <h1 className="font-light text-lg">Conditions</h1>
              <div className="bg-red-100 p-10 rounded-2xl mt-5 ">
                <div className="text-neutral-600">
                  <p className="mt-5 mb-5">* Minimum 18 ans</p>
                  <p className="mt-5 mb-5">* Casier judiciaire vierge</p>
                  <p className="mt-5 mb-5">* Résident en France</p>
                </div>
              </div>
            </div>
            <div className="mb-5 bg-neutral-200">Submit</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
      {/* FOOTER END  */}
    </div>
  );
}

export default ConciergeSignUp;
