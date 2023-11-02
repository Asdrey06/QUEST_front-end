import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { useEffect, useState } from "react";
import { loginConcierge, logoutConcierge } from "../reducers/concierges";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import dotenv from "dotenv";
dotenv.config();
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

declare var cloudinary: any;

function ConciergeSignUp() {
  const dispatch = useDispatch();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const openCloudinaryWidget = () => {
    cloudinary.openUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_UPLOAD_PRESET,
        sources: ["local", "url", "camera", "image_search"],
        showAdvancedOptions: true,
        cropping: "server",
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#34B39C",
            windowBorder: "#34B39C",
            tabIcon: "#FFFFFF",
            menuIcons: "#5A6169",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#34B39C",
            action: "#FFFFFF",
            inactiveTabIcon: "#000000",
            error: "#FF0000",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4E6E7",
          },
          fonts: {
            default: "Verdana",
          },
        },
        locale: "fr",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const allowedFormats = ["jpg", "jpeg", "png"];
          const format = result.info.format;
          if (!allowedFormats.includes(format)) {
            setWrongFile("Format invalide");
            return;
          }
          const imageUrl = result.info.secure_url;
          setPhoto(imageUrl);
          setWrongFile("");
        }
      }
    );
  };

  const openCloudinaryWidgetPDF = () => {
    cloudinary.openUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_UPLOAD_PRESET,
        sources: ["local", "url"],
        showAdvancedOptions: true,
        cropping: "server",
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#34B39C",
            windowBorder: "#34B39C",
            tabIcon: "#FFFFFF",
            menuIcons: "#5A6169",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#34B39C",
            action: "#FFFFFF",
            inactiveTabIcon: "#000000",
            error: "#FF0000",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4E6E7",
          },
          fonts: {
            default: "Verdana",
          },
        },
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const allowedFormats = ["pdf"];
          const format = result.info.format;
          if (!allowedFormats.includes(format)) {
            toast.error("Format du fichier invalide");
            return;
          }
          const imageUrl = result.info.secure_url;
          setId(imageUrl);
          setWrongFile("");
        }
      }
    );
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [addressAPI, setAddressAPI] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [skills, setSkills] = useState("");
  const [languages, setLanguages] = useState("");
  const [about, setAbout] = useState("");
  const [moving, setMoving] = useState("");
  const [photo, setPhoto] = useState("");
  const [iban, setIban] = useState("");
  const [wrongFile, setWrongFile] = useState("");

  const [id, setId] = useState("");
  const nationalitie = [
    "Algérienne (Algérie)",
    "Allemande (Allemagne)",
    "Américaine (États-Unis)",
    "Argentinienne (Argentine)",
    "Arménienne (Arménie)",
    "Australienne (Australie)",
    "Belge (Belgique)",
    "Britannique (Royaume-Uni)",
    "Brésilienne (Brésil)",
    "Canadienne (Canada)",
    "Chinoise (Chine)",
    "Croate (Croatie)",
    "Danoise (Danemark)",
    "Égyptienne (Égypte)",
    "Espagnole (Espagne)",
    "Française (France)",
    "Hongroise (Hongrie)",
    "Indienne (Inde)",
    "Italienne (Italie)",
    "Japonaise (Japon)",
    "Marocaine (Maroc)",
    "Mexicaine (Mexique)",
    "Nigériane (Nigéria)",
    "Polonaise (Pologne)",
    "Portugaise (Portugal)",
    "Russe (Russie)",
    "Sud-africaine (Afrique du Sud)",
    "Suédoise (Suède)",
    "Turque (Turquie)",
  ];

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleNumberChange = (e) => {
    const input = e.target.value;
    const cleanedNumber = input.replace(/[^0-9]/g, "");

    if (cleanedNumber.length <= 10) {
      setNumber(cleanedNumber);
    }
  };

  const handleCodePostal = (e) => {
    const input = e.target.value;
    const cleanedCode = input.replace(/[^0-9]/g, "");

    if (cleanedCode.length <= 5) {
      setZipcode(cleanedCode);
    }
  };

  const handleIban = (e) => {
    const input = e.target.value;
    const cleanedIban = input.replace(/[^0-9]/g, "");

    if (cleanedIban.length <= 25) {
      setIban(cleanedIban);
    }
  };

  //fetch pour l'inscription du concierge
  const handleRegister = () => {
    fetch(
      "https://https://quest-backend-six.vercel.app/concierges/signupConcierge",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          birthday: birthday,
          address: addressAPI,
          city: city,
          zipcode: zipcode,
          photo: photo,
          username: userName,
          email: email,
          password: password,
          paymentInfo: iban,
          nationality: nationality,
          phoneNumber: number,
          skills: skills,
          languages: languages,
          aboutme: about,
          transport: moving,
          documents: id,
          status: "concierge",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.result === false) {
          toast.error(<p className="text-red-500">{data.error}</p>);
        } else if (data.result === true) {
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
          window.location.href = "/dashconcierge";
        }
      });
  };

  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAddressSuggestions = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${query}`
      );
      if (!response.ok) {
        throw new Error("Erreur de réseau");
      }
      const data = await response.json();
      const suggestionAddresses = data.features.map(
        (feature) => feature.properties.label
      );
      setSuggestions(suggestionAddresses);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleAddressChange = (event) => {
    const inputValue = event.target.value;
    setAddressAPI(inputValue);

    if (inputValue.length >= 3) {
      fetchAddressSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (selectedAddress) => {
    setAddressAPI(selectedAddress);
    setSuggestions([]);

    //fetch pour récuperer les adresses
    fetch(`https://api-adresse.data.gouv.fr/search/?q=${selectedAddress}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          const firstFeature = data.features[0];
          setZipcode(firstFeature.properties.postcode);
          setCity(firstFeature.properties.city);
          setAddressAPI(
            firstFeature.properties.housenumber +
              " " +
              firstFeature.properties.street
          );
        }
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération du code postal et de la ville :",
          error
        );
      });
  };

  return (
    <div className="bg-white">
      <Header />
      <div className="h-full mt-14">
        <ToastContainer />
        <div className="flex">
          <h1 className="flex text-xl bg-neutral-800 mb-10 pl-10 pb-5 pt-5 text-white font-semibold w-full">
            <p>Créez votre compte concierge</p>{" "}
          </h1>
        </div>
        <div className="flex flex-row mb-5">
          <div className="ml-10 flex flex-col p-3 w-6/12 bg-neutral-100 rounded-3xl">
            <h1 className="font-light text-lg mb-5 font-semibold">
              Vos coordonnées
            </h1>
            <div>Prénom & nom</div>
            <div className="flex flex-row">
              <input
                type="text"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Prénom..."
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />

              <input
                type="text"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nom..."
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            <div className="mt-8">Vos identifiants</div>
            <div className="flex flex-row">
              <input
                type="text"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nom d'utilisateur..."
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />

              <input
                type="password"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Mot de passe..."
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="flex flex-row w-full">
              <input
                type="textarea"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="E-mail..."
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />{" "}
            </div>
            <div className="mt-8">Informations sur vous</div>
            <div className="flex flex-col">
              <input
                type="date"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Date de naissance..."
                onChange={(e) => {
                  setBirthday(e.target.value);
                }}
                value={birthday}
              />

              <input
                type="text"
                placeholder="Saisissez une adresse..."
                value={addressAPI}
                onChange={handleAddressChange}
                className="mb-3 mt-3 border-2 w-8/12 p-2 rounded-xl border-neutral-500"
              />
              {loading && <p>Chargement en cours...</p>}
              {suggestions.length > 0 && (
                <ul>
                  {suggestions.map((suggestion) => (
                    <li
                      className="mb-1 mt-1 bg-white rounded-xl cursor-pointer w-8/12 border-neutral-300 p-1  hover:bg-neutral-100 border-2"
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex flex-row">
              <input
                type="textarea"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Code postal..."
                onChange={(e) => setZipcode(e.target.value)}
                value={zipcode}
              />

              <input
                type="textarea"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Ville..."
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
            <div className="flex flex-row">
              <div>
                <select
                  className="mt-3 mb-3 border-2 mr-7 w-full p-2 rounded-xl border-neutral-500"
                  value={nationality}
                  onChange={handleNationalityChange}
                >
                  <option value="">Sélectionnez une nationalité</option>
                  {nationalitie.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="textarea"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Numéro de téléphone..."
                onChange={handleNumberChange}
                value={number}
              />
            </div>
            <div className="flex flex-row">
              <input
                type="textarea"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Compétences..."
                onChange={(e) => setSkills(e.target.value)}
                value={skills}
              />

              <input
                type="textarea"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Langues parlées..."
                onChange={(e) => setLanguages(e.target.value)}
                value={languages}
              />
            </div>
            <div className="flex flex-row">
              <input
                type="textarea"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="À propos de vous..."
                onChange={(e) => setAbout(e.target.value)}
                value={about}
              />

              <input
                type="textarea"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Moyen de déplacement..."
                onChange={(e) => setMoving(e.target.value)}
                value={moving}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="mt-5 mr-3 ml-3">FR</div>
                <input
                  type="textarea"
                  className="mt-3 mb-3 border-2 w-8/12 p-2 rounded-xl border-neutral-500"
                  placeholder="Relevé d'identité bancaire..."
                  onChange={handleIban}
                  value={iban}
                />
              </div>
            </div>
            <div className="flex items-center"></div>
          </div>

          <div className="ml-10 flex flex-col w-4/12">
            <h1 className="font-light text-lg mb-5 font-semibold">
              Vos documents
            </h1>
            <div className="flex flex-row">
              <div
                className="items-center text-xs flex-col flex justify-center text-center text-neutral-500 rounded-lg w-32 h-32"
                style={{ border: "3px solid #34B39C" }}
              >
                {photo && (
                  <Image
                    width={200}
                    height={200}
                    src={photo}
                    className="h-full w-full object-cover"
                    alt="Uploaded profile photo"
                  />
                )}
                {!photo && (
                  <p className="text-xs mt-12 mb-12">JPG, JPEG ou PNG</p>
                )}
              </div>
              <button
                onClick={openCloudinaryWidget}
                className="flex justify-end flex-col mb-1 ml-5 font-light"
              >
                <p>Upload</p>
                <p className="text-red-500">{wrongFile}</p>
              </button>
            </div>
            <div className="flex flex-col mt-5">
              <label
                className="text-neutral-500 rounded-lg px-4 py-2 w-7/12 cursor-pointer hover:bg-neutral-200 flex items-center text-center justify-center"
                style={{ border: "3px solid #34B39C" }}
                onClick={openCloudinaryWidgetPDF}
              >
                {!id && "Importez votre pièce d'identité (PDF)"}

                {id && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-emerald-500 h-6"
                  />
                )}
              </label>
            </div>
            <div className="flex flex-col mt-5">
              <label
                className="text-neutral-500 rounded-lg px-4 py-2 w-7/12 cursor-pointer hover:bg-neutral-200 flex items-center text-center justify-center"
                style={{ border: "3px solid #34B39C" }}
              >
                Importez extrait de votre kbis (PDF)
              </label>
            </div>
            <div className="flex flex-col mt-5">
              <label
                className="text-neutral-500 rounded-lg px-4 py-2 w-7/12 cursor-pointer hover:bg-neutral-200 flex items-center text-center justify-center"
                style={{ border: "3px solid #34B39C" }}
              >
                Importez votre casier judiciare (PDF)
              </label>
            </div>
            <div className="flex flex-col mt-5">
              <label
                className="text-neutral-500 rounded-lg px-4 py-2 w-7/12 cursor-pointer hover:bg-neutral-200 flex items-center text-center justify-center"
                style={{ border: "3px solid #34B39C" }}
              >
                Importez votre permis de conduire (si nécessaire) (PDF)
              </label>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="">
              <h1 className="font-light text-lg font-semibold">Conditions</h1>
              <div className="bg-red-100 p-10 rounded-2xl mt-5 ">
                <div className="text-neutral-600">
                  <p className="mt-5 mb-5">* Minimum 18 ans</p>
                  <p className="mt-5 mb-5">* Casier judiciaire vierge</p>
                  <p className="mt-5 mb-5">* Résident en France</p>
                  <p className="mt-5 mb-5">
                    * Auto-entreprise enregistrer à votre nom
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="  flex justify-end">
                <div
                  className={`${styles.hovereffect} cursor-pointer border-2 pl-5 pr-5 pt-2 pb-2 flex items-center justify-center rounded-2xl w-full text-xl text-white`}
                  onClick={handleRegister}
                >
                  Envoyer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ConciergeSignUp;
