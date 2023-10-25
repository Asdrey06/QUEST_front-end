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

// FETCH USEEFFECT EN GET QUI CHOPPE LES REQUESTS INFOS PUIS QUI LES METS DANS DES USESTATE

function OpenRequest() {
  return (
    <div>
      {/* HEADER START */}
      <Header />
      {/* HEADER END */}
      <div>bonjour</div>
      {/* FOOTER */}
      <Footer />
      {/* FOOTER END */}
    </div>
  );
}

export default OpenRequest;
