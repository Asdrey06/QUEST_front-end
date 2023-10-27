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
        console.log("this", data.result[0].firstname);
        dispatch(
          offersConcierge({
            firstname: data.result[0].firstname,
            username: data.result[0].username,
          })
        );

        setConciergeList(data.result);
      });
  }, []);

  const allConcierge = [];

  allConcierge.push(conciergeList);

  console.log(conciergeList);

  // const conciergeData = [
  //   {
  //     name: "Max",
  //     poster: "backgroundconcierge1.png",
  //     voteAverage: 9.2,
  //     langue: "Langue: France",
  //     overview: "Compétences Principales: good",
  //   },
  //   {
  //     name: "Alex",
  //     poster: "backgroundconcierge2.png",
  //     voteAverage: 8.5,
  //     langue: "Langue: France",
  //     overview: "Compétences Principales: good",
  //   },
  //   {
  //     name: "Audrey",
  //     poster: "backgroundconcierge3.png",
  //     voteAverage: 8.5,
  //     langue: "Langue: France",
  //     overview: "Compétences Principales: good",
  //   },
  //   {
  //     name: "Will",
  //     poster: "concierge3.jpeg",
  //     voteAverage: 7.6,
  //     langue: "Langue: France",
  //     overview: "Compétences Principales: good",
  //   },
  //   {
  //     name: "Francis",
  //     poster: "concierges.jpeg",
  //     voteAverage: 8.4,
  //     langue: "Langue: France",
  //     overview: "Compétences Principales:good",
  //   },
  // ];

  const concierge = conciergeList.map((data, i) => {
    console.log(data.photo);
    return (
      <ProfileConcierge
        name={data.firstname}
        poster={data.photo}
        voteAverage={data.voteAverage}
        langue={data.personalInfo[0].languages}
        overview={data.personalInfo[0].aboutme}
      />
    );
  });

  return (
    <div className="" style={{ backgroundColor: "#FFFFFF" }}>
      {/* HEADER START */}
      <Header />
      {/* HEADER END */}

      <div className="flex items-center justify-left mb-10">
        <h1 className="flex mt-12 text-3xl font-semibold bg-neutral-800 pl-20 pb-5 pt-8 text-white w-full">
          <p>Bonjour</p> <p className="italic ml-2">{user.firstname}</p>,
          veuillez sélectionnez un concierge à proximité
        </h1>
      </div>

      <div className="flex">
        <div className="outline-black border-emerald-200 flex w-8/12 ml-10 mb-10 mr-10 flex-wrap">
          {concierge}
        </div>
        <div className="flex flex-col shadow-xl shadow-neutral-300 border-2 border-neutral-400 p-5 mr-10 rounded-md h-full">
          <h1 className="text-3xl mt-3 font-bold text-neutral-600 border-emerald-700 text-center border-2 p-3 rounded-md">
            Requêtes actives
          </h1>
          <div className="border-2 h-full p-10 mt-5">
            Aucune requête en cours pour le moment
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Client;
