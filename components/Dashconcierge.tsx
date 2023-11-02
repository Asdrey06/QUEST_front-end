import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { RootState } from "../pages/_app";
import { UserState } from "../reducers/users";

function Dashconcierge() {
  const [requests, setRequests] = useState([]);

  const [open, set] = useState(false);

  const concierge = useSelector((state: RootState) => state.concierges.value);

  const user = useSelector((state: RootState) => state.users.value);

  const [starsAverage, setStarsAverage] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/concierges/findInfoDashboardConcierge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ token: concierge.token }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result.reviews);
        let total = 0;
        for (let i of data.result.reviews) {
          total += i.stars;
        }

        let calculatedStars = total / data.result.reviews.length;

        console.log(calculatedStars);

        setStarsAverage(Number(calculatedStars.toFixed(2)));
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  }, []);

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
  }, []);

  useEffect(() => {
    if (concierge.status === null) {
      alert("Vous n'êtes pas connecté sur un compte concierge.");
      window.location.href = "/clientwelcome";
    }

    if (user.status === null && concierge.status === null) {
      window.location.href = "/";
    }
  }, []);

  const [pastRequests, setPastRequests] = useState([]);

  const [totalEarned, setTotalEarned] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/request/getFinishedRequestConcierge", {
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
        setPastRequests(data.result);

        let total = 0;

        for (let i of data.result) {
          total += i.serviceFees;
        }

        setTotalEarned(total);
      })
      .catch((error) => {
        console.error("An error occurred: ", error);
      });
  }, []);

  const requestList = requests.map((data, i) => {
    return (
      <RequestList
        instruction={data.instruction}
        paymentInfo={data.paymentInfo}
        date={data.date}
        serviceFees={data.serviceFees}
        productFees={data.productFees}
        totalFees={data.totalFees}
        from={data.from}
        id={data._id}
      />
    );
  });

  const displayPastRequests = pastRequests.map((data, i) => {
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
      <div className="w-full border-emerald-200 flex w-11/12  mr-5 mb-3 flex-wrap">
        <div className="bg-[#edfff9] shadow-lg w-10/12 mb-5 ml-10 pt-4 pb-4 pl-4 rounded-md border-neutral-400 border-2 flex">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div className="flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mr-3 h-7 text-green-600"
                />
                <div className="flex flex-col">
                  <p className="italic text-sm text-light">
                    Pour le: {formattedDate}
                  </p>
                  <p className="text-xl font-bold">{data.instruction}</p>
                </div>
              </div>
              <div className="flex flex-row mr-4 text-right">
                <p>
                  <p className="italic text-sm">De la part de:</p>{" "}
                  <p className="font-semibold text-neutral-500">{data.from}</p>
                </p>
              </div>
            </div>

            <div className="flex mt-8 justify-between items-center">
              <div className="flex flex-col">
                <p className="text-xs  items-center font-medium"></p>
                <p className="pt-4 font-medium items-center text-xs">
                  Votre commission:
                  <p className="font-bold text-xl pr-3">{data.serviceFees}€</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  console.log(starsAverage);

  const data = [
    {
      id: 1,
      css: "red",
      text: (
        <p className="flex flex-col text-center items-center">
          <p className="font-bold text-2xl">{requests.length}</p>
          <p className="text-sm">requêtes en cours</p>
        </p>
      ),
    },
    {
      id: 2,
      css: "blue",
      text: (
        <p className="flex flex-col text-center items-center">
          <p className="font-bold text-2xl">{pastRequests.length}</p>
          <p className="text-sm">requêtes effectuées</p>
        </p>
      ),
    },
    {
      id: 3,
      css: "green",
      text: (
        <p className="flex flex-col text-center items-center">
          <p className="font-bold text-2xl">0%</p>{" "}
          <p className="text-sm">taux de complétion</p>
        </p>
      ),
    },
    {
      id: 4,
      css: "green",
      text: (
        <p className="flex flex-col text-center items-center">
          <FontAwesomeIcon icon={faStar} className="text-amber-500" />
          <p className="font-bold text-2xl">
            {isNaN(starsAverage) ? 0 : starsAverage}
          </p>

          <p className="text-sm mb-4">note moyenne</p>
        </p>
      ),
    },
    {
      id: 5,
      css: "green",
      text: (
        <p className="flex flex-col text-center items-center">
          <p className="font-bold text-2xl">{totalEarned}€</p>{" "}
          <p className="text-sm">gagné ce mois-ci</p>
        </p>
      ),
    },
    {
      id: 6,
      css: "green",
      text: (
        <p className="flex flex-col text-center items-center">
          <p className="font-bold text-2xl">{totalEarned}€</p>{" "}
          <p className="text-sm">revenu total</p>
        </p>
      ),
    },
    {
      id: 7,
      css: "green",
      text: (
        <p className="flex flex-col text-center items-center">
          <p className="font-bold text-2xl">0</p>{" "}
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

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.gentle,
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
                onClick={() => set((open) => true)}
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
            <div className="w-full h-64 mt-10 mb-10 flex flex-col items-center">
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
            <p className="text-3xl font-semibold mt-20 flex text-center justify-center">
              Requêtes passées
            </p>
            <div className="mt-10 ml-2 border-l-2 ">{displayPastRequests}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Dashconcierge;
