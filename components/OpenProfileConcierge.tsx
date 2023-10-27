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

    const [conciergeList, setConciergeList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/concierges/conciergeList")
        .then((response) => response.json())
        .then((data) => {
            console.log();
            // dispatch(
            //   offersConcierge({
            //     firstname: data.result[0].firstname,
            //     username: data.result[0].username,
            //   })
            // );
    
            setConciergeList(data.result);
        });
    }, []);

console.log(conciergeList[0])


return (
    <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <div className="flex-grow flex flex-row mt-40"> 
        <div className="flex flex-col w-full border-2 border-black mt-50">
        <div className="items-center text-xs flex-col flex justify-center ml-10 text-center text-neutral-500 rounded-lg w-32 h-32"
                style={{ border: "3px solid #34B39C" }}
    >
    <img src="/trust.png" className="w-25 h-25"/>      
            </div>

        <div className="mt-36 mb-4 border-2 border-black ml-10 mr-10 mt-0 p-2">
        aboutme
        </div>
        <div className="mt-36 mb-4 border-2 border-black ml-10 mr-10 mt-0 p-2">
        skills
          </div>
          <div className="mt-36 border-2 border-black p-4">
            <button className="bg-black text-white">
              Contactez "concierge firstname"
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full border-2 border-black">
          <div className="text-black mb-4 border-2 border-black ml-10 mr-10 mt-0 p-2">
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