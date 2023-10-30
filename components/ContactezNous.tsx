import styles from "../styles/Home.module.css";
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
import { useSelector, useDispatch } from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { offersConcierge } from "../reducers/offers";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID=process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID=process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY=process.env.NEXT_PUBLIC_PUBLIC_KEY

const handleOnSubmit = (e) => {
    e.preventDefault();
};


function ContactezNous() {
    const [consent, setConsent] = useState(false);
    const handleConsentChange = (e) => {
        setConsent(e.target.checked);
      };
    
      const handleOnSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
            (result) => {
                Swal.fire({
                icon: "success",
                title: "Message Sent Successfully",
                });
            },
            (error) => {
                Swal.fire({
                icon: "error",
                title: "Ooops, something went wrong",
                text: error.text,
                });
            }
            );
            e.target.reset();
        if (!consent) {
        alert("Veuillez donner votre consentement pour traiter vos données conformément au RGPD.");
        return;
        }
    
        // Le reste de votre logique d'envoi du formulaire
      };
return (
<div>
    <div>
    <Header />
    </div>
    
    <div
        className="flex"
        style={{
        backgroundColor: "white", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "calc(100vh - 100px)",
        }}
>
<div className=" pt-5 pb-20 flex flex-col items-center w-full justify-center  pr-48 text-center">
<h1 className="font-light text-black text-5xl py-30 mb-20 pb-10 font-semibold">Formulaire de contact</h1>
    <p className="font-light text-black text-xl pb-10 font-semibold">Complétez le formulaire suivant pour envoyer un message à Quest.
Nous répondrons à votre requête, commentaire ou question, dès que possible. Les champs marqués d'un astérisque (*) sont requis pour soumettre le formulaire.</p>
<form onSubmit={handleOnSubmit} 
className="w-6/12 pb-10 pt-10 rounded-2xl text-slate-500 flex-col mt-30 border-2 bg-teal-500">

<div className="mb-2">
    <input
    type="email"
    id="user_email"
    name="user_email"
    placeholder="E-mail..."
    required
    className="rounded-xl h-14 w-11/12 text-lg mt-1 mb-1 border-2 pl-10"

    />
</div>
<div className="mb-2">
    <input
    type="text"
    id="user_name"
    name="user_name"
    placeholder="Nom..."
    required
    className="rounded-xl h-14 w-11/12 text-lg mt-1 mb-1 border-2 pl-10"

    />
    </div>
<div className="mb-2">
<textarea 
    id="user_message"
    name="user_message"
    placeholder="Message..."
    required
    className="rounded-xl h-40 w-11/12 text-lg mt-1 mb-1 border-2 pl-10"
/>
</div>
<div className="mb-2 text-white">
        <label>
            <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            onChange={handleConsentChange}
            />
            J'accepte les termes de la politique de confidentialité et donne mon consentement pour le traitement de mes données personnelles conformément au RGPD.
        </label>
        </div>
<button
    type="submit"
    className="bg-black p-3 items-center justify-center rounded-2xl text-xl text-white"
>ENVOYER
</button>
</form>
</div>
</div>
<Footer />
</div>

)}

export default ContactezNous;