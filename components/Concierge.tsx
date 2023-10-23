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
// import { faSolid } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";

function Home() {
  const [number, setNumber] = useState(347);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(number + 1);
    }, 2000);

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [number]);

  const openInsta = () => {
    window.open("https://www.instagram.com", "_blank");
  };

  const openFb = () => {
    window.open("https://www.facebook.com", "_blank");
  };

  return (
    <div className="mt-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div
        className="fixed top-0 w-full flex flex-row items-center justify-between pr-10 pl-10 pb-5 pt-5 mb-10"
        style={{ backgroundColor: "#33B49C" }}
      >
        <div className="flex flex-row items-center cursor-pointer">
          <Link href="/">
            <img src="/questlogowhite.png" className="h-10 mr-10" />
          </Link>
        </div>

        <FontAwesomeIcon icon={faUser} className="h-6 text-white" />
      </div>
      <div
        className=""
        // style={{
        //   backgroundImage: 'url("/citylights2.jpg")',
        //   backgroundSize: "cover",
        // }}
      >
        <div className="flex items-center justify-center h-24 ml-5 mr-5">
          <h1 className="text-3xl font-semibold" style={{ color: "#68938B" }}>
            DEVENEZ UN CONCIERGE AGRÉÉ DE QUEST
          </h1>
        </div>
        <div className="ml-5 mr-5 mb-10 flex items-center justify-center text-xl text-center">
          Mettez en avant vos compétences, nous nous occupons de votre
          rémunération.
        </div>
        <div className="flex items-center justify-center mt-14 mb-14">
          <button
            className={`${styles.hovereffect} border-2 p-5 flex items-center justify-center rounded-2xl text-2xl text-white`}
          >
            <div>COMMENCEZ LES DÉMARCHES</div>
          </button>
        </div>
      </div>
      <div className=" flex flex-row justify-between mb-5">
        <div
          className="w-full ml-5 text-white flex items-center justify-center"
          style={{
            backgroundImage: 'url("/backgroundconcierge1.png")',
            backgroundSize: "cover",
          }}
        >
          <p className="text-2xl bg-neutral-800 font-semibold h-16 w-full mt-52 mb-12 items-center justify-between flex bg-opacity-70 pl-5 pr-5">
            <p className="italic text-neutral-300 text-lg">Mike</p>{" "}
            <div className="flex flex-row">
              <p className="font-bold pr-2">192</p>
              <p className="font-thin">requêtes réalisées</p>
            </div>
          </p>
        </div>
        <div
          className="w-full ml-5 text-white flex items-center justify-center"
          style={{
            backgroundImage: 'url("/backgroundconcierge2.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-2xl bg-neutral-800 font-semibold h-16 w-full mt-52 mb-12 items-center justify-between pl-5 pr-5 flex bg-opacity-70">
            <p className="italic text-neutral-300 text-lg">Terry</p>{" "}
            <div className="flex flex-row">
              <p className="font-bold pr-2">89</p>
              <p className="font-thin">requêtes réalisées</p>
            </div>
          </p>
        </div>
        <div
          className="w-full ml-5 mr-5 text-white flex items-center justify-center"
          style={{
            backgroundImage: 'url("/backgroundconcierge3.png")',
            backgroundSize: "cover",
          }}
        >
          <p className="text-2xl bg-neutral-800 font-semibold h-16 w-full mt-52 mb-12 items-center justify-between pr-5 pl-5 flex bg-opacity-70">
            <p className="italic text-neutral-300 text-lg">Emilie</p>{" "}
            <div className="flex flex-row">
              <p className="font-bold pr-2">112</p>
              <p className="font-thin">requêtes réalisées</p>
            </div>
          </p>
        </div>
      </div>
      <div className="flex flex-row mt-14 items-center justify-between">
        <div className="flex flex-col items-center w-full pt-10 pb-10 mr-5 ml-5 bg-neutral-100">
          <img src="/exchange.png" className="w-28 mb-5" />
          <p className="text-3xl font-bold" style={{ color: "#68938B" }}>
            50 {number}
          </p>{" "}
          <p style={{ color: "#68938B" }}>transactions effectuées</p>
        </div>
        <div className="flex flex-col items-center w-full pt-10 pb-10 mr-5 ml-3 bg-neutral-100">
          <img src="/euro.png" className="w-28 mb-5" />
          <p className="text-3xl font-bold" style={{ color: "#68938B" }}>
            80€
          </p>{" "}
          <p style={{ color: "#68938B" }}>Prix moyen d'une transaction</p>
        </div>
        <div className="flex flex-col items-center w-full pt-10 pb-10 mr-5 ml-3 bg-neutral-100">
          <img src="/commission.png" className="w-28 mb-5" />
          <p className="text-3xl font-bold" style={{ color: "#68938B" }}>
            28€
          </p>{" "}
          <p style={{ color: "#68938B" }}>commission moyenne</p>
        </div>
      </div>{" "}
      <div className="flex items-center justify-center mb-2 mt-20">
        <h1 className="text-3xl font-semibold" style={{ color: "#000000" }}>
          Comment ça marche ?
        </h1>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-center w-full pt-10 pb-10 mr-5 ml-5 text-2xl text-center">
          <p style={{ color: "#68938B" }}>
            Créez un compte concierge et suivez les étapes de vérifications
          </p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-8"
            style={{ color: "#68938B" }}
          />
        </div>
        <div className="flex flex-col items-center w-full pt-10 pb-10 mr-5 ml-3 text-2xl  text-center">
          <p style={{ color: "#68938B" }}>
            Un client prend contact avec vous et vous convenez d'un accord
          </p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-8"
            style={{ color: "#68938B" }}
          />
        </div>
        <div className="flex flex-col items-center w-full pt-10 pb-10 mr-3 ml-3 text-2xl text-center">
          <p style={{ color: "#68938B" }}>
            Effectuez la mission, vous êtes rémunéré instantanément
          </p>
        </div>
      </div>{" "}
      <div
        className={`${styles.servicescontainer} flex h-full mt-10 pt-20 pb-20`}
        style={{ backgroundColor: "#F0FDF6" }}
      >
        {" "}
        <div
          className={`${styles.servicedescription} w-6/12 text-lack pl-10 flex flex-col text-left`}
          style={{ color: "#404145" }}
        >
          <div className="mb-10 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faStar} className="h-8 text-amber-400" />
              <p className="text-2xl font-semibold pl-5">Flexibilité</p>
            </div>
            <p>Travaillez à votre rhythme quand vous voulez, ou vous voulez.</p>
          </div>

          <div className="mt-10 mb-10 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faStar} className="h-8 text-amber-400" />
              <p className="text-2xl font-semibold pl-5">
                Diversité des tâches
              </p>
            </div>
            <p>
              Les concierges sont souvent responsables d'une grande diversité de
              tâches. Si vous aimez la variété dans votre travail, QUEST peut
              vous offrir cela.
            </p>
          </div>
          <div className="mt-10 mb-10 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faStar} className="h-8 text-amber-400" />
              <p className="text-2xl font-semibold pl-5">Rémunération</p>
            </div>
            <p>
              Soyez payés instantanément sur votre compte bancaire, dés que vous
              finissez une mission.
            </p>
          </div>
          <div className="mt-10 flex flex-col">
            <div className="flex flex-row m-5 ">
              <FontAwesomeIcon icon={faStar} className="h-8 text-amber-400" />
              <p className="text-2xl font-semibold pl-5">
                Comptez sur un support 24/7
              </p>
            </div>
            <p>
              Notre équipe de support disponible 24 heures sur 24 est là pour
              vous aider à tout moment, où que vous soyez.
            </p>
          </div>
        </div>
        <div className={`${styles.service} w-6/12 ml-10 mr-10`}>
          <img
            src="/conciergehappy.png"
            alt="Service"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="flex ml-5 mt-10 mb-5 font-semibold">
        <h1 className="text-3xl">
          Témoignagne de Johnny, un de nos concierges star...
        </h1>
      </div>
      <div className="flex flex-row mb-10">
        <p className="ml-10 mr-10 italic">
          " Travailler en tant que concierge pour un service comme QUEST a été
          une expérience incroyable. Chaque jour, je mets à profit ma passion
          pour aider les gens à résoudre leurs besoins et à rendre leur vie plus
          pratique. Que ce soit en livrant des courses, en prenant en charge des
          tâches ménagères ou en organisant des services de proximité, je suis
          fier de faire partie de cette équipe qui facilite la vie de nos
          clients, et je trouve une grande satisfaction dans chaque sourire que
          je peux apporter. "
        </p>
      </div>
      <div className="flex items-center justify-center mt-10 mb-10">
        <button
          className={`${styles.hovereffect} border-2 p-5 flex items-center justify-center rounded-2xl text-2xl text-white`}
        >
          <div>COMMENCEZ LES DÉMARCHES</div>
        </button>
      </div>
      {/* FOOTER */}
      <div
        className="w-full h-full pt-5 pl-5 flex flex-row justify-between"
        style={{ backgroundColor: "#33B49C" }}
      >
        <div className="flex ">
          <div className="flex flex-row">
            <Link href="/">
              <img src="/questlogowhite.png" className="h-8 cursor-pointer" />
            </Link>
          </div>
          <div className="flex flex-col text-white text-sm pb-5 pl-5">
            <p className="w-3/12 hover:text-neutral-200">
              <Link href="">FAQ</Link>
            </p>
            <p className="hover:text-neutral-200">
              <Link href="">Contactez-nous</Link>
            </p>
            <p className="hover:text-neutral-200">
              <Link href="">Mentions légales</Link>
            </p>
            <p className="w-4/12 hover:text-neutral-200">
              <Link href="">RGPD</Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-around pb-5">
          <div className="mr-10 text-white text-lg hover:text-neutral-200">
            <Link href="/conciergewelcome">Devenir concierge</Link>
          </div>
          <div className="flex flex-row justify-end mr-10">
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-6 text-white hover:text-neutral-200 cursor-pointer"
              onClick={openInsta}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="h-6 text-white ml-5 hover:text-neutral-200 cursor-pointer"
              onClick={openFb}
            />
          </div>
        </div>
      </div>
      {/* FOOTER END  */}
    </div>
  );
}

export default Home;
