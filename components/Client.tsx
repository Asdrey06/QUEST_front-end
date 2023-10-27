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

  console.log(conciergeList);

  const displayRequests = activeRequests.map((data, i) => {
    return (
      <div className="text-lg p-5 border-2 mt-2 mb-2">
        Instructions: {data.instruction}, <p>Pour: {data.date.split("T")[0]}</p>
        <p> Total payer: </p>
        {data.totalFees}
        <p>Concierge: {data.fromConcierge}</p>
        <img src={data.photoConcierge} className="h-20" />
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

      <div className="flex-grow" style={{ backgroundColor: "#FFFFFF" }}>
        {/* HEADER START */}

        {/* HEADER END */}

        <div className="flex items-center justify-left mb-10">
          <h1 className="flex mt-12 text-3xl font-semibold bg-neutral-800 pl-20 pb-5 pt-8 text-white w-full">
            <p>Bonjour</p> <p className="italic ml-2">{user.firstname}</p>,
            veuillez sélectionnez un concierge à proximité
          </h1>
        </div>

        <div className="flex">
          <div className="outline-black border-emerald-200 flex w-8/12 ml-10 mb-10 flex-wrap h-1">
            {concierge}
          </div>
          <div className="w-6/12 shadow-xl h-96 shadow-neutral-300 border-2 border-neutral-400 p-5 mr-10 rounded-md overflow-auto mb-10">
            <h1 className="text-3xl mt-3 font-bold text-neutral-600 border-emerald-700 text-center border-2 p-3 rounded-md">
              Requêtes actives
            </h1>
            <div className=" h-full p-10 mt-5">
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
