import styles from "../styles/Client.module.css";
import React from "react";
import Home from "../components/Home";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProfileConcierge from "./ProfileConcierge";
import { useSelector } from "react-redux";


function OpenProfileConcierge() {
    return (

<div className="min-h-screen bg-white flex flex-col">
<Header />
<div className="flex-grow flex flex-row">
  <div className="flex flex-col w-full border-2 border-black mt-50">
    <div className="mt-36 mb-4 border-2 border-black ml-10 mr-10 mt-0 p-2">
      Une place pour une photo d’identité
    </div>
    <div className="mt-36 mb-4 border-2 border-black ml-10 mr-10 mt-0 p-2">
      Description écrite par le concierge
    </div>
    <div className="mt-36 mb-4 border-2 border-black ml-10 mr-10 mt-0 p-2">
      Liste de compétences du concierge
    </div>
    <div className="mt-36 border-2 border-black p-4">
      <button className="bg-header-color text-white">
        Contactez "nom concierge"
      </button>
    </div>
  </div>
  <div className="flex flex-col w-full border-2 border-black">
    <div className="text-white mb-4 border-2 border-black ml-10 mr-10 mt- p-2">
      STATISTIQUE CONCIERGE
      <br />
      Pourcentage de satisfaction : 90%
    </div>
    <div className="mt-36 mb-4 border-2 border-black ml-10 mr-10 mt-0 p-2">
      DERNIERS AVIS CLIENTS...

    </div>
    <div className="mt-36 mb-4 border-2 border-black ml-10 mr-10 mt-0 p-2">
      DERNIERS AVIS CLIENTS...
    
    </div>
    <div className="mt-36 mb-4 border-2 border-black ml-10 mr-10 mt-0 p-2">
      DERNIERS AVIS CLIENTS...

    </div>
  </div>
</div>
<Footer />
</div>
);
}

export default OpenProfileConcierge;