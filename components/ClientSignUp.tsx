import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faStar } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import {
  faArrowRight,
  faCheck,
} from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { Modal } from "antd";
// import { faSolid } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import dotenv from "dotenv";
dotenv.config();

function ClientSignUp() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const showModal = () => {
      setIsModalVisible(!isModalVisible);
      let userSection = (
        <FontAwesomeIcon icon={faUser} onClick={() => showModal()} />
      );
    };

    // Load the Cloudinary widget script when the component is mounted
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [wrongpw, setWrongPw] = useState("");

  const [id, setId] = useState("");

  console.log(id);

  const handleRegister = () => {
    fetch("http://localhost:3000/clientsignuppage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result === false) {
          console.log(data.error);
          setWrongPw(data.error);
        } else if (data.result === true) {
          window.location.href = "/dashclient";
        }
      });
  };

  return (
    <div>
      {/* HEADER START */}
      <Header />
      {/* HEADER END */}

      <div className="flex flex-col h-full mt-20">
        <div className="flex">
          {" "}
          <h1
            className="flex flex-col items-center justify-center pl-10 pb-3 pt-3 w-full mb-10 text-3xl font-semibold"
            style={{ color: "#68938B", backgroundColor: "#EFFDF5" }}
          >
            Créez votre compte client
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full mb-5">
          {/* BLOC 1 */}
          <div className="flex items-center justify-center ml-15 w-80 mb-5 flex-col shadow-md p-3 bg-neutral-100 rounded-3xl">
            <input
              type="text"
              s
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
              type="text"
              className="mt-3 mb-3 border-2 w-60 p-2 rounded-xl border-neutral-400"
              placeholder="Date de naissance"
              onChange={(e) => {
                const inputValue = e.target.value;
                const validatedInput = inputValue.replace(/[^0-9/]/g, "");
                setBirthday(validatedInput);
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
            {/* <div className="cursor-pointer border-2 pl-5 pr-5 pt-2 pb-2 flex items-center justify-center rounded-2xl w-full text-xl text-white"> */}
          </div>
          <div
            className={`${styles.hovereffect} flex flex-col shadow-md  items-center justify-center text-center mt-5 cursor-pointer border-2  pt-2 pb-2 mb-3 rounded-2xl w-60 text-xl text-white`}
            onClick={handleRegister}
          >
            Envoyer
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* END OF BLOC 3  */
  }
}
{
  /* FOOTER */
}
<Footer />;
{
  /* FOOTER END  */
}

export default ClientSignUp;
