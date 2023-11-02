import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";
import { faCommentDots } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import moment from "moment";
import "moment/locale/fr";
import { useRef } from "react";
import { faSpinner } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { RootState } from "../reducers/rootReducer";
import ChatComponent from "./ChatComponent";

function MyComponent() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  const [sender, setSender] = useState("");

  const [requestId, setRequestId] = useState("");

  useEffect(() => {
    //Ouverture de la requete par le concierge
    fetch(`https://quest-backend-six.vercel.app/request/requests`)
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
      });
  }, []);

  const requestinfo = useSelector(
    (state: RootState) => (state as any).openrequest.value
  );

  const [currentRequest, setCurrentRequest] = useState({
    _id: "",
    fromConcierge: "",
    date: "",
    from: "",
    instruction: "",
    serviceFees: "",
    productFees: "",
    totalFees: "",
  });

  const [id, setId] = useState([]);

  const formatTimeAgo = (date) => {
    return moment(date).fromNow();
  };

  const [chats, setChats] = useState([]);

  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetch("https://quest-backend-six.vercel.app/request/openRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: requestinfo.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.result.done);
        setCurrentRequest(data.result);

        setChats(data.result.chat);
        setSender(data.result.fromConcierge);
        setRequestId(data.result._id);

        const last4 = data.result._id.slice(-4).toUpperCase();

        setId(last4);
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  }, []);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [chats]);

  const displayChat = chats.map((data, i) => {
    return (
      <li
        key={i}
        className="sent-message flex flex-col border-2 border-neutral-400 mt-1 mb-1 p-3 rounded-lg"
      >
        <div className="flex flex-row w-full justify-between items-center">
          <p className="text-black text-sm">
            <p>{data.firstname}</p>
          </p>
          <p className="text-black text-sm font-extralight italic">
            {formatTimeAgo(data.date)}
          </p>
        </div>
        <div>
          <p className="text-black font-light">{data.message}</p>
        </div>
      </li>
    );
  });

  const parsedDate = new Date(currentRequest.date);

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

  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const finishRequest = () => {
    fetch("https://quest-backend-six.vercel.app/request/changeRequestStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ id: requestinfo.id }),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });

    setStatus(true);
  };

  return (
    <div>
      <div
        className="flex flex-col"
        style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}
      >
        <Header />
        <h1 className="flex mt-12 text-xl bg-neutral-800 pl-20 pb-5 pt-6 text-neutral-300 w-full">
          <p>Votre requête</p>{" "}
          <p className="italic ml-1 text-white font-bold">#{id}</p>
        </h1>
        <div className="mt-10 flex mb-5 flex-row flex text-emerald-600 text-2xl font-semibold ml-5">
          <div className="flex-col ml-16 w-5/12 h-full flex text-emerald-600 font-semibold font-light text-lg mb-3 font-semibold">
            <div className="flex items-center text-black ml-6">
              <FontAwesomeIcon icon={faCommentDots} className="mr-3" />
              <p> Communiquez avec {currentRequest.from}</p>
            </div>
            <div className="flex flex-col h-full ml-5 mt-5">
              <div
                className="flex flex-col align-top text-lg h-96 mb-8 border-2 w-full p-2 rounded-xl border-neutral-400"
                style={{ maxHeight: "100%", overflowY: "auto" }}
                ref={messagesRef}
              >
                <ChatComponent
                  userType="concierge"
                  sender={currentRequest.fromConcierge}
                />
              </div>
            </div>
            <div className="flex flex-col mt-5"></div>
          </div>
          <div className="ml-15 flex-row flex w-5/12 text-emerald-600 text-2xl font-semibold ml-5">
            <div className="flex w-full flex-col">
              <h1 className=" ml-20 flex items-center flex-row justify-between font-light text-lg  font-semibold">
                <p>Instructions</p>{" "}
                <p className="flex text-sm text-black italic mr-6">
                  Pour le: <p className="ml-1"> {formattedDate}</p>
                </p>
              </h1>
              <div className="flex flex-col text-black align-top text-lg w-10/12 h-40 mb-8 mt-5 ml-20 border-2 p-2 rounded-sm shadow-xl border-neutral-400">
                {currentRequest.instruction}
              </div>
              <div className="flex flex-col ml-20 text-lg text-black font-light">
                <p className="flex items-center">
                  {" "}
                  Frais pour dépenses:
                  <p className="font-bold pl-1">
                    {" "}
                    {currentRequest.productFees}€
                  </p>
                </p>
                <p className="flex items-center">
                  {" "}
                  Votre commission:{" "}
                  <p className="font-bold pl-1">
                    {" "}
                    {currentRequest.serviceFees}€
                  </p>
                </p>
                <p className="flex">
                  Total payé par le client:{" "}
                  <p className="font-bold pl-1"> {currentRequest.totalFees}€</p>
                </p>
              </div>
              <div className="flex flex-row justify-between w-full mt-5">
                <div className="">
                  <div className="flex flex-col">
                    <h1 className="ml-20 flex flex-col font-light text-lg font-semibold">
                      Votre client
                    </h1>
                  </div>
                  <div className="flex flex-col ml-20 text-black">
                    {currentRequest.from}
                  </div>
                  <div className="flex flex-col ml-20 cursor-pointer mt-2">
                    <div className="flex flex-col items-center justify-center text-base text-sm text-center w-48 h-8 border-2 p-2 rounded-xl bg-black text-white hover-bg-neutral-700 border-neutral-400">
                      Appeler le client
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-2 items-center">
                  {status ? (
                    <div className="flex items-center">
                      {" "}
                      <FontAwesomeIcon icon={faSpinner} className="mr-1" spin />
                      <p className="ml-1 text-sm border-2 w-68 text-white bg-[#33B49C] rounded-2xl p-3">
                        En attente de confirmation client...
                      </p>
                    </div>
                  ) : (
                    <button
                      className={`${styles.hovereffect} text-base flex cursor-pointer w-56 h-10 border-2 pl-5 pr-5 pt-2 pb-2 flex items-center justify-center rounded-2xl w-50 text-white`}
                      onClick={finishRequest}
                    >
                      Terminer la requête
                    </button>
                  )}
                  <button
                    className={`text-xs flex cursor-pointer w-64 mt-2 bg-red-500 h-10 border-2 pl-5 pr-5 pt-2 pb-2 flex items-center justify-center rounded-2xl w-50 text-white`}
                  >
                    Signalez un problème
                  </button>
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

export default MyComponent;
