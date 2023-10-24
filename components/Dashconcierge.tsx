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

function Dashconcierge() {
  return (
    <div className="mt-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div
        className="fixed top-0 w-full flex flex-row items-center justify-between pr-10 pl-10 pb-5 pt-5 mb-10"
        style={{ backgroundColor: "#33B49C" }}
      >
        <div className="flex flex-row items-center">
          <Link href="/">
            <img
              src="/questlogowhite.png"
              className="h-10 mr-10 cursor-pointer"
            />
          </Link>
          <button>
            <div className="w-48 border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600">
              <Link href="/conciergewelcome">Requête en cours</Link>
            </div>
          </button>
        </div>
        <h1 className="text-6xl text-white">Dashboard Concierge</h1>
        <FontAwesomeIcon icon={faUser} className="h-6 text-white" />
      </div>
      <div className="h-10"></div>
      <h3 className="h-36 pt-10 ml-10 mb-3">DEMANDES/MESSAGES REÇUES</h3>
      <div className=" flecx justify-end">
        <button className="box-border h-56 w-64 p-4 border-4 mb-5 rounded-3xl float-right mr-10 ">
          Statistiques
        </button>
      </div>
      <div className="flex flex-col">
        <button className="box-border h-32 w-96 p-4 border-4 mb-5 ml-10"></button>
        <button className="box-border h-32 w-96 p-4 border-4 mb-5 ml-10"></button>
        <button className="box-border h-32 w-96 p-4 border-4 mb-5 ml-10"></button>
      </div>
      <Footer />
    </div>
  );
}
export default Dashconcierge;
