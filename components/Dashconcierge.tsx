import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Header from "./Header";

function Dashconcierge() {
  return (
    <div className="mt-20" style={{ backgroundColor: "#FFFFFF" }}>
      <Header />
      <div className="flex flex-row justify-between">
        <h3 className="ml-10 mt-14 mb-10 text-emerald-600 text-2xl font-semibold">
          DEMANDES/MESSAGES REÇUES
        </h3>
        <p className="mt-16 mr-64 font-semibold">Vos statistiques</p>
      </div>

      <div className="justify-between w-full flex flex-row h-full mb-10">
        <div className="flex flex-col w-5/12">
          <div className="box-border rounded-2xl h-32 w-full p-4 border-4 mb-5 ml-10"></div>
          <div className="box-border rounded-2xl h-32 w-full p-4 border-4 mb-5 ml-10"></div>
          <div className="box-border rounded-2xl h-32 w-full p-4 border-4 mb-5 ml-10"></div>
        </div>

        <div className="flex flex-col">
          <div className="box-border h-56 w-64 p-4 border-4 mb-5 rounded-3xl float-right mr-32"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Dashconcierge;
