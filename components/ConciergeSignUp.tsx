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
import Header from "./Header";
import Footer from "./Footer";
import dotenv from "dotenv";
dotenv.config();

function ConciergeSignUp() {
  useEffect(() => {
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

  const openCloudinaryWidget = () => {
    // Replace 'your_cloud_name' with your actual Cloudinary cloud name
    cloudinary.openUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_UPLOAD_PRESET,
        sources: ["local", "url", "camera", "image_search"],
        showAdvancedOptions: true,
        cropping: "server",
        multiple: false,
        defaultSource: "local",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          // Check if the uploaded file format is allowed
          const allowedFormats = ["jpg", "jpeg", "png"];
          const format = result.info.format;
          if (!allowedFormats.includes(format)) {
            // Handle format validation error
            setWrongFile("Format invalide");
            // Optionally, you can reset the selected file input to prevent submission.
            return;
          }

          // Handle the uploaded image or images, and store the necessary information.
          const imageUrl = result.info.secure_url;
          setPhoto(imageUrl);
          setWrongFile("");
        }
      }
    );
  };

  const openCloudinaryWidgetPDF = () => {
    // Replace 'your_cloud_name' with your actual Cloudinary cloud name
    cloudinary.openUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_UPLOAD_PRESET,
        sources: ["local", "url"],
        showAdvancedOptions: true,
        cropping: "server",
        multiple: false,
        defaultSource: "local",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          // Check if the uploaded file format is allowed
          const allowedFormats = ["pdf"];
          const format = result.info.format;
          if (!allowedFormats.includes(format)) {
            // Handle format validation error
            setWrongFile("Format invalide");
            // Optionally, you can reset the selected file input to prevent submission.
            return;
          }

          // Handle the uploaded image or images, and store the necessary information.
          const imageUrl = result.info.secure_url;
          setId(imageUrl);
          setWrongFile("");
        }
      }
    );
  };

  // else {
  //   setWrongFile("Format non autorisé");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [skills, setSkills] = useState("");
  const [languages, setLanguages] = useState("");
  const [about, setAbout] = useState("");
  const [moving, setMoving] = useState("");
  const [license, setLicense] = useState("");
  const [photo, setPhoto] = useState("");
  const [iban, setIban] = useState("");

  console.log(photo);

  const [wrongpw, setWrongPw] = useState("");

  const [wrongFile, setWrongFile] = useState("");

  const [id, setId] = useState("");

  console.log(id);

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

  const handleRegister = () => {
    fetch("http://localhost:3000/concierges/signupConcierge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        birthday: numericBirthday,
        address: address,
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
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result === false) {
          console.log(data.error);
          setWrongPw(data.error);
        } else if (data.result === true) {
          window.location.href = "/dashconcierge";
        }
      });
  };

  return (
    <div>
      {/* HEADER START */}
      <Header />
      {/* HEADER END */}
      <div className="h-full mt-20">
        <div className="flex">
          {" "}
          <h1
            className="pl-10  pb-5 pt-5 w-full mb-5 text-3xl font-semibold"
            style={{ color: "#68938B", backgroundColor: "#EFFDF5" }}
          >
            Créez votre compte concierge
          </h1>
        </div>
        <div className="flex flex-row mb-5">
          {/* BLOC 1 */}
          <div className="ml-10 flex flex-col p-3 w-4/12 bg-neutral-100 rounded-3xl">
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
            <div className="flex flex-row">
              <input
                type="textarea"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="E-mail..."
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />{" "}
            </div>
            <div className="mt-8">Informations sur vous</div>
            <div className="flex flex-row">
              <input
                type="text"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Date de naissance..."
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const validatedInput = inputValue.replace(/[^0-9/]/g, "");
                  setBirthday(validatedInput);
                }}
                value={birthday}
              />

              <input
                type="textarea"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Adresse..."
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
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
              <input
                type="text"
                className="mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nationalité..."
                onChange={(e) => setNationality(e.target.value)}
                value={nationality}
              />

              <input
                type="textarea"
                className="ml-3 mt-3 mb-3 border-2 w-4/12 p-2 rounded-xl border-neutral-500"
                placeholder="Numéro de téléphone..."
                onChange={(e) => setNumber(e.target.value)}
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
            <div className="flex items-center">
              {" "}
              <p className="text-red-500 mt-2 text-cente w-64"> {wrongpw}</p>
            </div>
          </div>

          {/* END OF BLOC 1  */}

          {/* BLOC 2 */}
          <div className="ml-10 flex flex-col w-4/12">
            <h1 className="font-light text-lg mb-5 font-semibold">
              Vos documents
            </h1>
            <div className="flex flex-row">
              <div
                className="items-center text-xs flex-col flex justify-center text-center text-neutral-500 rounded-lg w-32 h-32"
                style={{ border: "3px solid #34B39C" }}
              >
                <img src={photo} className="h-full" />
                {!photo && <p className="text-xs mb-12">JPG, JPEG ou PNG</p>}
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
                {!id && "Importez votre pièce d'identité"}

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
                {!id && "Importez extrait de votre kbis"}

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
                {!id && "Importez votre casier judiciare"}

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
                {!id && "Importez votre permis de conduire (si nécessaire)"}

                {id && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-emerald-500 h-6"
                  />
                )}
              </label>
            </div>
          </div>

          {/* END OF BLOC 2  */}

          {/* BLOC 3 */}
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
          {/* END OF BLOC 3  */}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
      {/* FOOTER END  */}
    </div>
  );
}

export default ConciergeSignUp;
