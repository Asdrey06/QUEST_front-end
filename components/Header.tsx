import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";

function Header() {
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className={`fixed top-0 w-full flex flex-row items-center justify-between pr-10 pl-10 pb-5 pt-5 mb-10 ${login ? "h-auto" : "h-64"}`} style={{ backgroundColor: "#33B49C" }}>
      <div className="flex flex-row items-center">
        <Link href="/">
          <img src="/questlogowhite.png" className="h-10 mr-10 cursor-pointer" />
        </Link>
        {login ? (
          <div className="w-48 border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600">
            <Link href="/conciergewelcome">Devenir concierge</Link>
          </div>
        ) : null}
      </div>

      {login ? (
        <div className="flex flex-row">
          <div className="w-64 p-4">
            <div className="text-white mb-2">Vos identifiants Client</div>
            <input type="text" placeholder="E-mail" className="w-full border border-gray-300 rounded-md mb-2" />
            <input type="password" placeholder="Mot de passe" className="w-full border border-gray-300 rounded-md mb-4" />
            <button className="w-full border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600">
              ENVOYER
            </button>
            <div style={{ marginBottom: '4mm' }}></div>
            <button className="w-full border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600">
              Login avec Google
            </button>
            <p className="text-white mt-4 text-center">ou</p>
            <p className="text-white text-center">
              <Link href="/creercompte">Créez votre compte</Link>
            </p>
          </div>

          <div className="w-64 p-4">
            <div className="text-white mb-2">Vos identifiants Concierge</div>
            <input type="text" placeholder="E-mail" className="w-full border border-gray-300 rounded-md mb-2" />
            <input type="password" placeholder="Mot de passe" className="w-full border border-gray-300 rounded-md mb-4" />
            <button className="w-full border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600">
              ENVOYER
            </button>
            <div style={{ marginBottom: '4mm' }}></div>
            <button className="w-full border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600" style={{ marginBottom: '4mm' }}>
              Devenir concierge
            </button>
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
  );
}

export default Header;