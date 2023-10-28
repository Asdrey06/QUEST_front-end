import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import Header from "./Header";
import Footer from "./Footer";
import Header from "./Header";
import RequestList from "./RequestList";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";

const data = [
  {
    id: 1,
    css: "red",
    text: (
      <p className="flex flex-col text-center items-center">
        <p className="font-bold text-2xl">3</p>
        <p className="text-sm">requêtes en cours</p>
      </p>
    ),
  },
  {
    id: 2,
    css: "blue",
    text: (
      <p className="flex flex-col text-center items-center">
        <p className="font-bold text-2xl">6</p>
        <p className="text-sm">requêtes effectuées</p>
      </p>
    ),
  },
  {
    id: 3,
    css: "green",
    text: (
      <p className="flex flex-col text-center items-center">
        <p className="font-bold text-2xl">100%</p>{" "}
        <p className="text-sm">taux de complétion</p>
      </p>
    ),
  },
  {
    id: 4,
    css: "green",
    text: (
      <p className="flex flex-col text-center items-center">
        <p className="font-bold text-2xl">4.3/5</p>{" "}
        <p className="text-sm">note moyenne</p>
      </p>
    ),
  },
  {
    id: 5,
    css: "green",
    text: (
      <p className="flex flex-col text-center items-center">
        <p className="font-bold text-2xl">342€</p>{" "}
        <p className="text-sm">gagné ce mois-ci</p>
      </p>
    ),
  },
  {
    id: 6,
    css: "green",
    text: (
      <p className="flex flex-col text-center items-center">
        <p className="font-bold text-2xl">1832€</p>{" "}
        <p className="text-sm">revenu total</p>
      </p>
    ),
  },
  {
    id: 7,
    css: "green",
    text: (
      <p className="flex flex-col text-center items-center">
        <p className="font-bold text-2xl">2</p>{" "}
        <p className="text-sm">requêtes annulées</p>
      </p>
    ),
  },
  {
    id: 8,
    css: "green",
    text: (
      <p className="flex flex-col text-center items-center">
        <p className="font-bold text-2xl">0</p>{" "}
        <p className="text-sm">avertissements</p>
      </p>
    ),
  },
];

function Dashconcierge() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.slow,
    from: { size: "20%", background: "#34B39C" },
    to: {
      size: open ? "100%" : "20%",
      background: "#34B39C",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  const [requests, setRequests] = useState([]);

  console.log(requests);

  const concierge = useSelector((state) => state.concierges.value);

  console.log(concierge.token);

  const user = useSelector((state) => state.users.value);

  useEffect(() => {
    const fetchRequests = () => {
      fetch("http://localhost:3000/concierges/findRequests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: concierge.token,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setRequests(data.result);
        })
        .catch((error) => {
          console.error("An error occurred: ", error);
        });
    };

    fetchRequests();

    const intervalId = setInterval(fetchRequests, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [concierge.token]);

  useEffect(() => {
    if (concierge.status === null) {
      alert("Vous n'êtes pas connecté sur un compte concierge.");
      window.location.href = "/clientwelcome";
    }

    if (user.status === null && concierge.status === null) {
      window.location.href = "/";
    }
  }, []);

  const requestList = requests.map((data, i) => {
    console.log(data);
    return (
      <RequestList
        instruction={data.instruction}
        paymentInfo={data.paymentInfo}
        date={data.date}
        serviceFees={data.serviceFees}
        productFees={data.productFees}
        totalFees={data.totalFees}
        from={data.from}
      />
    );
  });

  // name={data.firstname}
  // poster={data.photo}
  // voteAverage={data.voteAverage}
  // langue={data.personalInfo[0].languages}
  // overview={data.personalInfo[0].aboutme}

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow mt-14" style={{ backgroundColor: "#FFFFFF" }}>
        <h1 className="flex text-xl bg-neutral-800 pl-20 pb-5 pt-6 text-neutral-300 w-full">
          <p>Bonjour</p>{" "}
          <p className="italic ml-1 text-white font-bold">
            {concierge.firstname}
          </p>
          , bienvenue sur votre espace personnel
        </h1>
        <div className="flex">
          <div className="w-6/12">
            <div className="flex flex-row justify-between">
              <h3 className="ml-24 mt-6 mb-5 text-emerald-600 text-2xl font-semibold">
                Demandes reçues
              </h3>
            </div>

            <div className="justify-between w-full flex flex-row h-full mb-10">
              <div className="flex flex-col w-full ">{requestList}</div>
            </div>
          </div>
          <div className="flex flex-col w-5/12 mb-10">
            <h3 className="ml-2 mt-6 mb-5 text-emerald-600 text-2xl font-semibold">
              Vos statistiques
            </h3>
            <div className={`${styles.wrapper} shadow-xl`}>
              <animated.div
                style={{ ...rest, width: size, height: size }}
                className={styles.container}
                onClick={() => set((open) => !open)}
              >
                {open ? (
                  ""
                ) : (
                  <p className="">
                    <FontAwesomeIcon
                      icon={faHandPointer}
                      className="h-10 text-white shadow-xl ml-5 mt-5"
                    />
                  </p>
                )}
                {transition((style, item) => (
                  <animated.div
                    className={styles.item}
                    style={{
                      ...style,
                      background: "white",
                    }}
                  >
                    <div className={styles.text}>{item.text}</div>
                  </animated.div>
                ))}
              </animated.div>
            </div>
            <div className="w-full h-64 mt-10 flex flex-col items-center">
              <h1 className="text-2xl font-light mb-3 mt-3">
                3 conseils pour devenir un concierge au top
              </h1>
              <div className="flex flex-row w-full h-full text-center">
                <div className="w-full m-1 p-3">
                  <p className="font-bold text-center mb-3">
                    Faites-vous remarquer
                  </p>{" "}
                  <p className="text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="border-l-2 w-full m-1 p-3">
                  <p className="font-bold text-center mb-3">
                    Faites-vous remarquer
                  </p>{" "}
                  <p className="text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="border-l-2 w-full m-1 p-3">
                  <p className="font-bold text-center mb-3">
                    Faites-vous remarquer
                  </p>{" "}
                  <p className="text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Dashconcierge;
