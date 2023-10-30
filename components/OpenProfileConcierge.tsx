import styles from "../styles/Home.module.css";
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
import { useSelector, useDispatch } from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { offersConcierge } from "../reducers/offers";

function OpenProfileConcierge() {
  const dispatch = useDispatch();

  const conciergeInfo = useSelector((state) => state.conciergeProfile.value);

  console.log(conciergeInfo);

  const [conciergeData, setConciergeData] = useState([]);

  const [skills, setSkills] = useState([]);

  const [about, setAbout] = useState([]);

  const [name, setName] = useState([]);

  const [languages, setLanguages] = useState([]);

  const createOffer = () => {
    dispatch(
      offersConcierge({
        id: conciergeInfo.id,
        firstname: name,
        photo: conciergeData.photo,
      })
    );
    window.location.href = "/offerpage";
  };
  //fetch pour recupérer des infos détaillés
  useEffect(() => {
    fetch("http://localhost:3000/concierges/findInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ id: conciergeInfo.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setConciergeData(data.result);
        setSkills(data.result.personalInfo[0].skills);
        setAbout(data.result.personalInfo[0].aboutme);
        setName(data.result.firstname);
        setLanguages(data.result.personalInfo[0].languages);
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow flex flex-row mt-20">
        <div className="flex flex-col items-center border-r-2 border-r-neutral-300 mb-10 w-full ">
          <div
            className="items-center text-xs flex-col flex justify-center mt-5 text-center text-neutral-500 rounded-lg w-40 h-40"
            style={{ border: "3px solid #34B39C" }}
          >
            <img
              src={conciergeData.photo}
              className="w-full object-cover h-full"
            />
          </div>

          <div className="mt-10 mb-4 items-center text-center">
            <p className="text-2xl mb-1 font-semibold">Compétences </p>
            <p className="text-xl">{skills}</p>
          </div>
          <div className="mb-4 mt-10 ml-10 mr-10 mt-0 text-center p-2">
            <p className="text-2xl mb-1 font-semibold">À propos de moi</p>
            <p>{about}</p>
            <p className="text-xl mb-1 mt-10 font-semibold">Langues parlées</p>
            <p className="">{languages}</p>
          </div>
          <div className="mt-5 flex flex-col items-center p-4">
            <button className="bg-neutral-600 hover:bg-neutral-400 rounded-2xl p-2 text-sm mb-5 text-white">
              Contactez {name}
            </button>
            <button
              className={`${styles.button2} font-semibold`}
              style={{ backgroundColor: "#34B39C" }}
              onClick={createOffer}
            >
              Faire une offre
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full mt-10">
          <div className="text-black mb-4 flex justify-between items-center ml-10 mr-10 mt-0 p-2">
            <p className="text-2xl font-semibold">
              Les derniers avis sur {name}
            </p>
            <p className="italic text-right">
              Note moyenne
              <p className="font-bold">
                4.3/5{" "}
                <FontAwesomeIcon icon={faStar} className="text-amber-400" />
              </p>
            </p>
          </div>
          <div className="mt-10 mb-4 border-2 border-neutral-300 rounded-2xl ml-10 mr-10 mt-0 p-2">
            <div className="flex">
              <p className="ml-3 italic w-full">Avis laissé par: Julien</p>
              <p className="flex items-center font-light">
                4.3/5{" "}
                <FontAwesomeIcon
                  icon={faStar}
                  className="ml-1 mr-3 text-amber-400"
                />
              </p>
            </div>
            <p className="ml-3 mt-2 font-semibold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="mt-5 mb-4 border-2 border-neutral-300 rounded-2xl ml-10 mr-10 mt-0 p-2">
            <div className="flex">
              <p className="ml-3 italic w-full">Avis laissé par: Bruno</p>
              <p className="flex items-center font-light">
                3.9/5{" "}
                <FontAwesomeIcon
                  icon={faStar}
                  className="ml-1 mr-3 text-amber-400"
                />
              </p>
            </div>
            <p className="ml-3 mt-2 font-semibold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="mt-5 mb-4 border-2 border-neutral-300 rounded-2xl ml-10 mr-10 mt-0 p-2">
            <div className="flex">
              <p className="ml-3 italic w-full">Avis laissé par: Max</p>
              <p className="flex items-center font-light">
                4.8/5{" "}
                <FontAwesomeIcon
                  icon={faStar}
                  className="ml-1 mr-3 text-amber-400"
                />
              </p>
            </div>
            <p className="ml-3 mt-2 font-semibold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OpenProfileConcierge;
