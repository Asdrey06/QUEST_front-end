import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { loginUser, logoutUser } from "../reducers/users";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import dotenv from "dotenv";
dotenv.config();
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ClientSignUp() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const showModal = () => {
      setIsModalVisible(!isModalVisible);
      let userSection = (
        <FontAwesomeIcon icon={faUser} onClick={() => showModal()} />
      );
    };

    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.type = "text/javascript";

    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        birthday: birthday,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === false) {
          toast.error(data.error);
        } else if (data.result === true) {
          dispatch(
            loginUser({
              token: data.token,
              firstname: data.data.firstname,
              lastname: data.data.lastname,
              status: data.data.status,
              photo: data.data.photo,
            })
          );
          window.location.href = "/clientwelcome";
        }
      });
  };

  return (
    <div>
      <Header />
      <div
        className="flex"
        style={{
          backgroundColor: "white",
          backgroundImage: "url(/backgroundopacity.webp)", // Assuming your image is in the public directory
          backgroundSize: "cover",
          backgroundPosition: "center",

          minHeight: "calc(100vh - 100px)",
        }}
      >
        <ToastContainer />
        <div
          className="flex "
          style={{
            backgroundImage: "url(public/allocab-chauffeur-vtc.webp)",
          }}
        ></div>
        <div className="flex flex-col h-full w-6/12 ">
          <div className="flex">
            {" "}
            <h1 className="flex text-emerald-600 drop-shadow-xl  ml-10 flex-col items-center justify-center pl-10 pb-3 pt-5 w-full mt-24  mb-10 text-3xl font-semibold">
              Créez votre compte client
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center w-full mb-5 ml-10">
            <div className="flex items-center justify-center ml-15 w-80 mb-5 flex-col shadow-md p-3 bg-neutral-100 rounded-3xl">
              <input
                type="text"
                className="mt-3 mb-3 border-2 w-60 p-2 rounded-xl border-neutral-400"
                placeholder="Prénom"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <input
                type="text"
                className="mt-3 mb-3 border-2 w-60 p-2 rounded-xl border-neutral-400"
                placeholder="Nom"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              <input
                type="date"
                className="mt-3 mb-3 border-2 w-60 p-2 rounded-xl border-neutral-500"
                placeholder="Date de naissance..."
                onChange={(e) => {
                  setBirthday(e.target.value);
                }}
                value={birthday}
              />
              <input
                type="textarea"
                className="mt-3 mb-3 border-2 w-60 p-2 rounded-xl border-neutral-400"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />{" "}
              <input
                type="password"
                className="mt-3 mb-3 border-2 w-60 p-2 rounded-xl border-neutral-400"
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div
              className={`${styles.hovereffect} flex flex-col shadow-md  items-center justify-center text-center mt-5 cursor-pointer border-2  pt-2 pb-2 mb-3 rounded-2xl w-60 text-xl text-white`}
              onClick={handleRegister}
            >
              Envoyer
            </div>
          </div>
        </div>
        <div className="bg-white p-5 h-full shadow-2xl mt-28 w-5/12">
          <div className="mb-5 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faCheck} className="h-8 text-lime-600" />
              <p className="text-xl font-semibold pl-5">
                Respectez votre budget
              </p>
            </div>
            <p>
              Trouvez le bon service pour chaque fourchette de prix. Pas de
              tarifs horaires, seulement une tarification basée sur vos
              requêtes.
            </p>
          </div>

          <div className="mt-5 mb-5 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faCheck} className="h-8 text-lime-600" />
              <p className="text-xl font-semibold pl-5">
                Obtenez une réponse à votre requête rapidement
              </p>
            </div>
            <p>
              Confiez votre demande à un concierge de confiance disponible
              immédiatement.
            </p>
          </div>
          <div className="mt-5 mb-5 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faCheck} className="h-8 text-lime-600" />
              <p className="text-xl font-semibold pl-5">
                Payez quand vous êtes satisfait
              </p>
            </div>
            <p>
              Les devis préalables signifient aucune surprise. Les paiements ne
              sont libérés que lorsque vous approuvez.
            </p>
          </div>
          <div className="mt-5 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faCheck} className="h-8 text-lime-600" />
              <p className="text-xl font-semibold pl-5">
                Comptez sur un support 24/7
              </p>
            </div>
            <p>
              Notre équipe de support disponible 24 heures sur 24 est là pour
              vous aider à tout moment, où que vous soyez.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  {
  }
}

export default ClientSignUp;
