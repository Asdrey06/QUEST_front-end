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
import { useDispatch, useSelector } from "react-redux";
import { offersConcierge } from "../reducers/offers";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function Client() {
  const [conciergeList, setConciergeList] = useState([]);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.value);
  const conciergeRedux = useSelector((state) => state.concierges.value);

  const [activeRequests, setActiveRequests] = useState([]);

  useEffect(() => {
    if (conciergeRedux.status === "concierge") {
      window.location.href = "/dashconcierge";
    }

    if (conciergeRedux.status === null && user.status === null) {
      window.location.href = "/";
    }

    if (user.status === null) {
      alert("Vous n'êtes pas connecté sur un compte client.");
      window.location.href = "/dashconcierge";
    }
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/concierges/conciergeList")
      .then((response) => response.json())
      .then((data) => {
        // dispatch(
        //   offersConcierge({
        //     firstname: data.result[0].firstname,
        //     username: data.result[0].username,
        //   })
        // );

        setConciergeList(data.result);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/users/findRequests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: user.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setActiveRequests(data.result);
      })
      .catch((error) => {
        console.error("An error occurred: ", error);
      });
  }, []);

  const allConcierge = [];

  allConcierge.push(conciergeList);

  console.log(activeRequests);

  const displayRequests = activeRequests.map((data, i) => {
    const parsedDate = new Date(data.date);

    const daysOfWeek = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    const months = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];

    const dayOfWeek = daysOfWeek[parsedDate.getDay()];
    const month = months[parsedDate.getMonth()];
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();

    const formattedDate = `${dayOfWeek} ${day} ${month} ${year}`;

    return (
      <div className="text-lg p-5 border-2 mt-2 mb-10 shadow-md shadow-neutral-400">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-xl">{data.instruction}</p>{" "}
            <p className="italic flex font-extralight text-sm">
              Pour le: <p className="ml-1 font-normal">{formattedDate}</p>
            </p>
          </div>
          <div className="text-right">
            <p className="font-extralight"> Total reglé: </p>
            <p className="text-xl font-bold">{data.totalFees} €</p>
          </div>
        </div>
        <div className="flex mt-5 justify-between items-center">
          <div className="flex items-center">
            <img
              src={data.photoConcierge}
              className="h-10 w-10 rounded-[50px] object-cover"
            />
            <p className="ml-3 font-semibold text-neutral-500">
              {data.fromConcierge}
            </p>
          </div>
        </div>
      </div>
    );
  });

  console.log(activeRequests);

  const concierge = conciergeList.map((data, i) => {
    return (
      <ProfileConcierge
        name={data.firstname}
        poster={data.photo}
        voteAverage={data.voteAverage}
        langue={data.personalInfo[0].languages}
        overview={data.personalInfo[0].aboutme}
        id={data._id}
        photo={data.photo}
      />
    );
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div
        className="flex-grow min-h-screen"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* HEADER START */}

        {/* HEADER END */}

        <div className="flex items-center justify-left mb-10">
          <h1 className="flex mt-12 text-xl bg-neutral-800 pl-20 pb-5 pt-8 text-neutral-300 w-full">
            <p>Bonjour</p>{" "}
            <p className="italic ml-2 text-white font-bold">{user.firstname}</p>
            , veuillez sélectionnez un concierge à proximité
          </h1>
        </div>

        <div className="flex">
          <div className="outline-black border-emerald-200 flex w-8/12 ml-10 mb-10 h-8 flex-wrap">
            {concierge}
          </div>
          <div className="w-6/12 h-full shadow-neutral-300border-neutral-400 mr-10 rounded-md overflow-auto ">
            <h1 className="text-3xl mb-5 font-light text-neutral-600 border-emerald-700 text-left rounded-md">
              <FontAwesomeIcon icon={faBell} className="mr-2 text-red-500" />{" "}
              Requêtes actives
            </h1>
            <div className="h-full">
              {displayRequests}
              {!activeRequests && "Aucune requête en cours pour le moment"}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Client;
