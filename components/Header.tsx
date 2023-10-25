import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faXmark } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";

function Header() {
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className="flex-col flex justify-start">
      <div
        className={`fixed top-0 w-full flex flex-row justify-between pr-10 pl-10 pb-5 pt-5 mb-10 `}
        style={{ backgroundColor: "#33B49C" }}
      >
        <div className="flex flex-row">
          <Link href="/">
            <img
              src="/questlogowhite.png"
              className="h-10 mr-10 cursor-pointer"
            />
          </Link>

          <div className="w-48 border-black h-10 pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600">
            <Link href="/conciergewelcome">Devenir concierge</Link>
          </div>
        </div>

        {login ? (
          <div className="flex flex-row w-9/12 items-center justify-end">
            <div className="w-4/12 p-4 flex flex-col items-center justify-start border-r-2 border-r-emerald-200 pr-14">
              <div className="text-white text-xl mb-3 mb-2">
                Connexion compte client
              </div>
              <input
                type="text"
                placeholder="E-mail"
                className="w-full border border-gray-300 rounded-md pb-2 pt-2 mb-3 pl-3"
              />
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full border border-gray-300 rounded-md mb-4 pb-2 pt-2 mb-3 pl-3"
              />
              <button className="w-full border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600">
                ENVOYER
              </button>
              <div style={{ marginBottom: "4mm" }}></div>
              <button className="w-full border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600">
                Login avec Google
              </button>
              <p className="text-white mt-2 mb-2 text-center">ou</p>
              <p className="text-cyan-100 hover:text-cyan-300 text-center">
                <Link href="/clientsignuppage">Créez votre compte</Link>
              </p>
            </div>
            <div className="w-4/12 p-4 mb-4 flex flex-col items-center justify-start pl-14">
              <div className="text-white mb-2 text-xl mb-3 ">
                Connexion compte concierge
              </div>
              <input
                type="text"
                placeholder="E-mail"
                className="w-full border border-gray-300 rounded-md mb-2 pb-2 pt-2 mb-3 pl-3"
              />
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full border border-gray-300 rounded-md mb-4 pb-2 pt-2 mb-3 pl-3"
              />
              <button className="w-full border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600">
                ENVOYER
              </button>
              <div className="text-white mt-5">ou</div>
              <button
                className="w-full pt-2 pb-2 flex items-center justify-center rounded-2xl text-cyan-100 hover:text-cyan-300 text-white"
                style={{ marginBottom: "4mm" }}
              >
                Devenir concierge
              </button>
            </div>
            <div
              onClick={toggleLogin}
              className="ml-10 flex justify-start h-full flex-row"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="h-6 text-slate-600 flex items-start"
              />
            </div>
          </div>
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            onClick={toggleLogin}
            className="h-6 text-white cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
