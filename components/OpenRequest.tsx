// FETCH USEEFFECT EN GET QUI CHOPPE LES REQUESTS INFOS PUIS QUI LES METS DANS DES USESTATE

import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faEuroSign } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router"; // Importez le hook useRouter
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { faCommentDots } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import io from "socket.io-client";
import moment from "moment";
import "moment/locale/fr";
import { useRef } from "react";

// const frLocale = require("../fr");

// moment.updateLocale("fr", frLocale);

function MyComponent() {
  const [instruction, setInstruction] = useState({});
  const [totalFees, setTotalFees] = useState({});

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  console.log(messages);

  const [sender, setSender] = useState("");
  // const socket = io("http://localhost:3001");

  const [socket, setSocket] = useState(null);

  const requestinfo = useSelector((state) => state.openrequest.value);

  const [requestId, setRequestId] = useState("");

  console.log(requestId);

  // console.log(requestinfo.id);

  // console.log(socket);

  useEffect(() => {
    const socketInstance = io("http://localhost:3002");
    setSocket(socketInstance);

return () => {
  socketInstance.disconnect();
};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (socket) {
      socket.emit("message", { message, sender, requestId });
    }
    setSentMessages((prevMessages) => [...prevMessages, message]);
    setMessage("");
  };

  useEffect(() => {
    if (socket) {
      socket.on("chat message", (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
    }

return () => {
  if (socket) {
    socket.off("chat message"); // Remove the listener when the component unmounts
  }
};
  }, [socket]);

  useEffect(() => {
    // Utilisez l'ID pour faire votre requête
    fetch('http://localhost:3000/request/requests')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInstruction(data); // Stocke les données dans le state
        setTotalFees(data); // Stocke les données dans le state
      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
      });
  }, []); // Ajoutez id comme dépendance pour que l'effet se déclenche chaque fois que l'ID change

  // ...

  function useDeleteRequest() {
    if (request.status) {
      router.push("/Home"); // Utilisez router.push au lieu de window.location.href
    } else {
      router.push("/OpenRequest"); // Utilisez router.push au lieu de window.location.href
    }
  }
  // const [phoneNumber, setPhoneNumber] = useState([]);
  // console.log(phoneNumber[5].phoneNumber);
  // const [email, setEmail] = useState([]);
  // console.log(email[5].email);
  // const [serviceFees, setServiceFees] = useState();
  // const [productFees, setProductFees] = useState();

  // const calculateTotalCosts = () => {
  //   const valueServiceFees = serviceFees || 0;
  //   const valueProductFees = productFees || 0;
  //   const costsTotal = valueServiceFees + valueProductFees;
  //   return costsTotal;
  // }
  // function OpenRequest() {
  //   const [instruction, setInstruction] = useState({});
  //   console.log(instruction);
  //   const [totalFees, setTotalFees] = useState({});
  //   console.log(totalFees);
  //   // const [lastname, setLastname] = useState([]);
  //   // console.log(lastname[5].lastname);
  //   // const [firstname, setFirstname] = useState([]);
  //   // console.log(firstname[5].firstname);

  //   useEffect(() => {
  //     // Exemple de requête GET, assurez-vous de remplacer l'URL par votre propre endpoint
  //     fetch("http://localhost:3000/request/requests")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setInstruction(data); // Stocke les données dans le state
  //         setTotalFees(data); // Stocke les données dans le state
  //       })
  //       .catch((error) => {
  //         console.error("Une erreur s'est produite : ", error);
  //       });
  //   }, []);

  //   function DeleteRequest() {
  //     const request = useSelector((state) => state.request.status);
  //     useEffect(() => {
  //       if (request.status) {
  //         window.location.href = "/Home";
  //       } else {
  //         window.location.href = "/OpenRequest";
  //       }
  //     });
  //   }

  console.log("this", requestinfo);

  const [currentRequest, setCurrentRequest] = useState([]);

  console.log(currentRequest.from);

  console.log(currentRequest.chat);

  const formatTimeAgo = (date) => {
    return moment(date).fromNow();
  };

  // const allChats = [];

  // allChats.push(currentRequest);

  // const allgoodChats = allChats[0].chat;

  const [id, setId] = useState([]);

  const [chats, setChats] = useState([]);

  console.log(chats);

  useEffect(() => {
    fetch("http://localhost:3000/request/openRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

  body: JSON.stringify({ id: requestinfo.id }),
})
  .then((response) => response.json())
  .then((data) => {
    setCurrentRequest(data.result);
    setChats(data.result.chat);
    setSender(data.result.from);
    setRequestId(data.result._id);

    const last4 = data.result._id.slice(-4).toUpperCase();

    setId(last4);
  })
  .catch((error) => {
    console.error("Error fetching concierge:", error);
  });
  }, []);

  const displayChat = chats.map((data, i) => {
    console.log(data);
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

  // useEffect(() => {
  //   fetch("http://localhost:3000/request/getChat", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify({ id: requestinfo.id }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching concierge:", error);
  //     });
  // }, []);

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

  const formattedDate = ${dayOfWeek} ${day} ${month} ${year};

  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
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
<div className=" flex-col ml-16 w-5/12 h-full flex text-emerald-600 font-semibold font-light text-lg mb-3 font-semibold">
  <div className="flex items-center text-black ml-6">
    <FontAwesomeIcon icon={faCommentDots} className="mr-3" />
    <p> Communiquez avec {currentRequest.fromConcierge}</p>
    <p>
      <img
        src={currentRequest.photoConcierge}
        className="h-10 w-10 rounded-[50%] ml-2 object-cover"
      />
    </p>
  </div>
  <div className="flex flex-col h-full ml-5 mt-5">
    <div className="flex flex-col justify-end align-top text-lg h-96 mb-8 border-2 w-full p-2 rounded-xl border-neutral-400">
      <div className="h-full flex flex-col">
        <ul ref={messagesRef} className="overflow-y-auto flex-grow">
          {displayChat}
          {messages.map(
            (msg, index) => (
              console.log(msg),
              (
                <li
                  key={index}
                  className="sent-message flex flex-col border-2 border-neutral-400 mt-1 mb-1 p-3 rounded-lg"
                >
                  <div className="flex flex-row w-full justify-between items-center">
                    <p className="text-black text-sm">
                      <p>{msg.firstname}</p>
                    </p>
                    <p className="text-black text-sm font-extralight italic">
                      {formatTimeAgo(msg.date)}
                    </p>
                  </div>
                  <div>
                    <p className="text-black font-light">
                      {msg.message}
                    </p>
                  </div>
                </li>
              )
            )
          )}
          {/* {sentMessages.map((sentMsg, index) => (
            <li
              key={`sent-${index}`}
              className="sent-message flex items-center justify-between border-2 border-neutral-400 mt-1 mb-1 p-3 rounded-lg"
            >
              <p className="text-black text-sm">
                <p>{currentRequest.from}</p>
              </p>
              <p className="text-black font-light">{sentMsg}</p>
            </li>
          ))} */}
        </ul>
        <form onSubmit={handleSubmit} className="flex p-4">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow border-2 w-full rounded-l-lg p-2"
          />
          <button
            type="submit"
            className="bg-emerald-500 text-white p-2 rounded-r-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
  <div className="flex flex-col mt-5">
    <iframe
      className="h-48 w-full ml-4 rounded-xl  "
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11537.773383415211!2d7.29766255!3d43.7013348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1698325376308!5m2!1sfr!2sfr"
    ></iframe>
  </div>
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
        <p className="font-bold pl-1"> {currentRequest.productFees}€</p>
      </p>
      <p className="flex items-center">
        {" "}
        Commission du concierge:{" "}
        <p className="font-bold pl-1"> {currentRequest.serviceFees}€</p>
      </p>
      <p className="flex">
        Total payé par vous:{" "}
        <p className="font-bold pl-1"> {currentRequest.totalFees}€</p>
      </p>
    </div>

    <div className="flex flex-row justify-between w-full mt-5">
      <div className="">
        <div className="flex flex-col">
          <h1 className="ml-20 flex flex-col font-light text-lg font-semibold">
            Votre concierge
          </h1>
        </div>
        <div className="flex flex-col ml-20 text-black">
          {currentRequest.fromConcierge}
        </div>
        <div className="flex flex-col ml-20 cursor-pointer mt-2">
          <div className="flex flex-col items-center justify-center text-base text-sm text-center w-48 h-8 border-2 p-2 rounded-xl bg-black text-white hover:bg-neutral-700 border-neutral-400">
            Appeler le concierge
          </div>
        </div>
      </div>

      <div className="flex flex-col  mt-3 items-center">
        <button
          className={`${styles.hovereffect} text-base flex cursor-pointer w-56 h-10 border-2 pl-5 pr-5 pt-2 pb-2 flex items-center justify-center rounded-2xl w-50 text-white`}
          // onClick={useDeleteRequest}
        >
          Annuler la requête
        </button>
        <button
          className={`text-xs flex cursor-pointer w-full mt-2 bg-red-500 h-10 border-2 pl-5 pr-5 pt-2 pb-2 flex items-center justify-center rounded-2xl w-50 text-white`}
          // onClick={useDeleteRequest}
        >
          Signalez un problème
        </button>
      </div>
    </div>
  </div>
</div>
</div>
<Footer />
</div>
  )
        }
export default MyComponent;
