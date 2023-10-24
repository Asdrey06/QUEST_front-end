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
        {" "}
        <input
          type="textarea"
          className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
          placeholder="Compétences..."
        />
        <label
          className="text-neutral-500 rounded-lg px-4 py-2 w-7/12 cursor-pointer hover:bg-neutral-200"
          style={{ border: "3px solid #34B39C" }}
        >
          Importez votre pièce d'identité
          <input type="file" className="hidden" />
        </label>
      </div>

      {/* FOOTER */}
      <Footer />
      {/* FOOTER END  */}
    </div>
  );
}

export default Offer;
