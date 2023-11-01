import styles from "../styles/Home.module.css";
import React from "react";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

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
          title: "Message envoyé !",
          confirmButtonColor: "#3085d6",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Une erreur est survenue.",
          text: error.text,
        });
      }
    );
    e.target.reset();
    if (!consent) {
      alert(
        "Veuillez donner votre consentement pour traiter vos données conformément au RGPD."
      );
      return;
    }
  };
  return (
    <div>
      <div>
        <Header />
      </div>

      <div
        className="flex"
        style={{
          backgroundImage: "url(/whitebg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pb-20 flex flex-col items-center w-full justify-center mt-20 text-center">
          <h1 className="font-extralight text-black text-8xl pb-10">
            Contactez-nous
          </h1>

          <form
            onSubmit={handleOnSubmit}
            className="w-6/12 p-10 rounded-2xl text-slate-500 flex-col items-center justify-center mt-30 border-2 bg-[#34B39C]"
          >
            <div className="mb-2 flex flex-col items-center">
              <p className="font-light text-white text-center items-center justify-center flex w-12/12 text-xl pb-10 ">
                Complétez le formulaire suivant pour envoyer un message à Quest.
                Nous répondrons à votre requête, commentaire ou question, dès
                que possible.
              </p>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="E-mail..."
                required
                className="rounded-xl h-14 w-11/12 text-lg mt-1 mb-1 border-2 pl-3"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Nom..."
                required
                className="rounded-xl h-14 w-11/12 text-lg mt-1 mb-1 border-2 pl-3"
              />
            </div>
            <div className="mb-2">
              <textarea
                id="user_message"
                name="user_message"
                placeholder="Message..."
                required
                className="rounded-xl h-40 w-11/12 text-lg mt-1 mb-1 border-2 pt-3 pl-3"
              />
            </div>
            <div className="mb-2 flex flex-row mr-9 text-white">
              <label className="flex ml-8">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="w-8"
                  required
                  onChange={handleConsentChange}
                />
                <p className="text-left ml-4 ">
                  J'accepte les termes de la politique de confidentialité et
                  donne mon consentement pour le traitement de mes données
                  personnelles conformément au RGPD.
                </p>
              </label>
            </div>
            <button
              type="submit"
              className={`${styles.button} bg-black p-3 items-center justify-center rounded-2xl text-xl text-white`}
            >
              ENVOYER
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactezNous;
