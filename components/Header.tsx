import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faXmark } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
import { loginUser, logoutUser } from "../reducers/users";
import { loginConcierge, logoutConcierge } from "../reducers/concierges";
import { useDispatch, useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { openConcierge } from "../reducers/conciergeProfile";
import Image from "next/image";
import GoogleOAuthResponse from "./googleOAuthTypes";
import { RootState } from "../pages/_app";

function Header() {
  const [login, setLogin] = useState(false);

  const [conciergeLogout, setConciergeLogout] = useState(false);

  const [clientLogout, setClientLogout] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.users.value);

  const concierge = useSelector((state: RootState) => state.concierges.value);

  useEffect(() => {
    if (user.token !== null) {
    }

    if (concierge.token !== null) {
      setConciergeLogout(true);
    }

    if (user.token !== null) {
      setClientLogout(true);
    }
  }, []);

  const toggleLogin = () => {
    setLogin(!login);
  };

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [signInEmailConcierge, setSignInEmailConcierge] = useState("");
  const [signInPasswordConcierge, setSignInPasswordConcierge] = useState("");

  const handleConnection = () => {
    fetch("https://quest-backend-six.vercel.app/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            loginUser({
              token: data.token,
              firstname: data.data.firstname,
              lastname: data.data.lastname,
              username: data.data.username,
              status: data.data.status,
              photo: data.data.photo,
            })
          );

          window.location.href = "/clientwelcome";
          setSignInEmail("");
          setSignInPassword("");
        } else {
          toast.error(data.error, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  const handleConnectionConcierge = () => {
    fetch("https://quest-backend-six.vercel.app/concierges/signinConcierge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmailConcierge,
        password: signInPasswordConcierge,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            loginConcierge({
              token: data.token,
              firstname: data.data.firstname,
              lastname: data.data.lastname,
              username: data.data.username,
              status: data.data.status,
              photo: data.data.photo,
            })
          );
          dispatch(
            openConcierge({
              id: data.data._id,
            })
          );

          window.location.href = "/dashconcierge";
          setSignInEmailConcierge("");
          setSignInPasswordConcierge("");
        } else {
          toast.error(data.error, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  const clearRedux = () => {
    dispatch(logoutConcierge());
    dispatch(logoutUser());
    setClientLogout(false);
    setConciergeLogout(false);
    window.location.href = "/";
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);

  interface DecodedGoogleCredentials {
    given_name: string;
    family_name: string;
    picture: string;
  }

  return (
    <GoogleOAuthProvider clientId="223748327128-45k1fpfnkvgbhl3u20aonb41lspthdlq.apps.googleusercontent.com">
      .
      <div className="flex-col flex justify-start">
        <ToastContainer />
        <div
          className={`fixed top-0 z-50 w-full flex flex-row justify-between pr-10 pl-10 pb-5 pt-5`}
          style={{ backgroundColor: "#33B49C" }}
        >
          <div className="flex flex-row">
            {clientLogout && (
              <Link href="/clientwelcome">
                <img
                  src="/questlogowhite.webp"
                  alt="Quest logo"
                  className="h-10 mr-10 cursor-pointer"
                />
              </Link>
            )}
            {conciergeLogout && (
              <Link href="/dashconcierge">
                <img
                  src="/questlogowhite.webp"
                  className="h-10 mr-10 cursor-pointer"
                />
              </Link>
            )}
            {!conciergeLogout && !clientLogout && (
              <Link href="/">
                <img
                  src="/questlogowhite.webp"
                  alt="Quest logo"
                  className="h-10 mr-10 cursor-pointer"
                />
              </Link>
            )}

            {!conciergeLogout && !clientLogout ? (
              <div className="w-48 border-emerald-100 border-2 h-10 pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-slate-200 bg-transparent hover:text-white">
                <Link href="/conciergewelcome">Devenir concierge</Link>
              </div>
            ) : (
              <div className={styles.button}>
                {conciergeLogout && (
                  <Link href="/dashconcierge">Dashboard</Link>
                )}
                {clientLogout && <Link href="/clientwelcome">Dashboard</Link>}
              </div>
            )}
          </div>
          {login ? (
            <div className="flex flex-row w-9/12 items-center justify-end">
              <div className="text-red-500 mt-5 mb-5 h-full pt-16 pr-3"></div>
              <div className="w-4/12 p-4 flex flex-col items-center justify-start border-r-2 border-r-emerald-200 pr-14">
                <div className="text-white font-extralight text-xl mb-3 mb-2">
                  Connexion compte client
                </div>
                <input
                  type="text"
                  placeholder="E-mail"
                  className="w-full border border-gray-300 rounded-md pb-2 pt-2 mb-3 pl-3"
                  onChange={(e) => setSignInEmail(e.target.value)}
                  value={signInEmail}
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="w-full border border-gray-300 rounded-md mb-4 pb-2 pt-2 mb-3 pl-3"
                  onChange={(e) => setSignInPassword(e.target.value)}
                  value={signInPassword}
                />
                <button
                  className="w-full border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600"
                  onClick={handleConnection}
                >
                  ENVOYER
                </button>
                <div style={{ marginBottom: "4mm" }}></div>
                <GoogleOAuthProvider clientId="223748327128-45k1fpfnkvgbhl3u20aonb41lspthdlq.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={(credentialResponse: GoogleOAuthResponse) => {
                      const toDecode = credentialResponse.credential;

                      var decoded: DecodedGoogleCredentials =
                        jwt_decode(toDecode);

                      dispatch(
                        loginUser({
                          token: credentialResponse.credential,
                          firstname: decoded.given_name,
                          lastname: decoded.family_name,
                          status: "client",
                          photo: decoded.picture,
                        })
                      );
                      window.location.href = "/clientwelcome";
                      setSignInEmail("");
                      setSignInPassword("");
                    }}
                    onError={() => {}}
                  />
                </GoogleOAuthProvider>
                <p className="text-white mt-2 mb-2 text-center">ou</p>
                <p className="text-white hover:text-blue-200 text-center">
                  <Link href="/clientsignuppage">Créez votre compte</Link>
                </p>
              </div>
              <div className="w-4/12 p-4 mb-4 flex flex-col items-center justify-start pl-14">
                <div className="text-white font-extralight mb-2 text-xl mb-3 ">
                  Connexion compte concierge
                </div>
                <input
                  type="text"
                  placeholder="E-mail"
                  className="w-full border border-gray-300 rounded-md mb-2 pb-2 pt-2 mb-3 pl-3"
                  onChange={(e) => setSignInEmailConcierge(e.target.value)}
                  value={signInEmailConcierge}
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="w-full border border-gray-300 rounded-md mb-4 pb-2 pt-2 mb-3 pl-3"
                  onChange={(e) => setSignInPasswordConcierge(e.target.value)}
                  value={signInPasswordConcierge}
                />
                <button
                  className="w-full border-black pt-2 pb-2 flex items-center justify-center rounded-2xl text-sm text-white bg-neutral-800 hover:bg-neutral-600"
                  onClick={handleConnectionConcierge}
                >
                  ENVOYER
                </button>
                <div className="text-white mt-5">ou</div>
                <button
                  className="w-full pt-2 pb-2 flex items-center justify-center rounded-2xl text-white hover:text-blue-200"
                  style={{ marginBottom: "4mm" }}
                >
                  <Link href="/conciergesignuppage">Devenir concierge</Link>
                </button>
              </div>
              <div
                onClick={toggleLogin}
                className="ml-10 flex justify-start h-full flex-row"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="h-6 text-white mt-2 hover:text-slate-700 cursor-pointer flex items-start"
                />
              </div>
            </div>
          ) : !conciergeLogout && !clientLogout ? (
            <div
              className="flex flex-row items-center cursor-pointer text-white hover:text-slate-300"
              onClick={toggleLogin}
            >
              <p className="font-semibold mr-3">Connectez-vous</p>
              <FontAwesomeIcon icon={faUser} className="h-6" />
            </div>
          ) : (
            <div className="flex flex-row cursor-pointer items-center">
              <div
                className="flex flex-col items-center text-white relative"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
                style={{ position: "relative" }}
              >
                <div className="flex flex-row items-center cursor-pointer hover:text-neutral-200">
                  <p className="mr-3 font-semibold">
                    {concierge.firstname}
                    {user.firstname}
                  </p>
                  {conciergeLogout && (
                    <img
                      src={concierge.photo}
                      alt="Concierge profile photo"
                      className="h-10 w-10 object-cover rounded-full max-w-10 max-h-10"
                    />
                  )}
                  {clientLogout && (
                    <FontAwesomeIcon icon={faUser} className="h-6" />
                  )}
                </div>
                {dropdownVisible && (
                  <div
                    className="flex flex-col w-28 mt-4 font-semibold absolute cursor-pointer top-9 p-1 bg-white rounded-b-xl text-sm border-gray-300 z-10 text-black border-2 shadow-xl"
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                  >
                    <div className="p-2 hover:text-neutral-400 cursor-pointer">
                      Profil
                    </div>
                    <div className="p-2 hover:text-neutral-400 cursor-pointer">
                      {clientLogout && (
                        <Link href="/settingsclient">Paramètres</Link>
                      )}
                      {conciergeLogout && (
                        <Link href="/settingsconcierge">Paramètres</Link>
                      )}
                    </div>
                    <div className="p-2 hover:text-neutral-400 cursor-pointer">
                      Finance
                    </div>
                    <div
                      className="p-2 border-t hover:text-neutral-400 cursor-pointer"
                      onClick={clearRedux}
                    >
                      Déconnexion
                    </div>
                  </div>
                )}
                {dropdownVisible && (
                  <div
                    className="absolute top-0 left-0 w-full h-20"
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                  />
                )}
              </div>

              <div></div>
            </div>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Header;
