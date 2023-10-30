import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faStar } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { loginUser, logoutUser } from "../reducers/users";
import {
  faArrowRight,
  faCheck,
} from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { Modal } from "antd";
// import { faSolid } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
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
        console.log(data);
        if (data.result === false) {
          console.log(data.error);
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
      {/* HEADER START */}
      <Header />
      {/* HEADER END */}
      <div
        className="flex"
        style={{
          // opacity: 0.6,
          backgroundImage: "url(/backgroundopacity.png)", // Assuming your image is in the public directory
          backgroundSize: "cover",
          backgroundPosition: "center",

          minHeight: "calc(100vh - 100px)", // Adjust the value based on your header's height
        }}
      >
        <ToastContainer />
        <div
          className="flex "
          style={{
            backgroundImage: "url(public/allocab-chauffeur-vtc.jpg)",
          }}
        ></div>
        <div className="flex flex-col h-full mt-20 ml-20 mr-96 ">
          <div className="flex">
            {" "}
            <h1
              className="flex flex-col items-center justify-center pl-10 pb-3 pt-3 w-full mb-10 text-3xl font-semibold"
              style={{ color: "#FFFFFF" }}
            >
              Créez votre compte client
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center w-full mb-5 ml-10">
            {/* BLOC 1 */}
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
        {/* <div className="flex flex-col h-full mt-20"> */}
        {/* <div className="flex-col space-between"> */}
        <div className="flex flex-col w-48 items-center justify-center mb-20 ml-96">
          <div className="mt-20 rounded-lg mb-5 pt-3  flex flex-col  items-center w-48 h-48 bg-neutral-100">
            <img src="/exp2.png" className="w-24 mb-2" />
            <p className="text-2xl font-bold" style={{ color: "#68938B" }}>
              "50 429"
            </p>
            <p style={{ color: "#68938B" }}>transactions effectuées</p>
          </div>
          <div className="mb-5 pt-4 rounded-lg flex flex-col items-center w-48 h-48 bg-neutral-100">
            <img src="/exp1.png" className="w-24 mb-2" />
            <p className="text-2xl font-bold" style={{ color: "#68938B" }}>
              100
            </p>
            <p style={{ color: "#68938B" }}>prestataires actifs</p>
          </div>
          <div className=" mb-5 pt-4 pb-4 rounded-lg flex flex-col items-center w-full h-min bg-neutral-100">
            <img src="/exp4.png" className="w-24 mb-2" />
            <p className="text-2xl font-bold" style={{ color: "#68938B" }}>
              100%
            </p>{" "}
            <p style={{ color: "#68938B" }}>des prestations assurées</p>
          </div>
          <div className="flex pt-4 pb-4 text-center rounded-lg flex-col  w-full items-center h-min bg-neutral-100">
            <img src="/exp3.png" className="w-24 mb-2" />
            <p className="text-2xl  font-bold " style={{ color: "#68938B" }}>
              4.7/5
            </p>{" "}
            <p style={{ color: "#68938B" }}>note moyennes des concierge</p>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );

  {
    /* END OF BLOC 3  */
  }
}

export default ClientSignUp;
