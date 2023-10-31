import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { faCheck } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SettingsClient() {
  const dispatch = useDispatch();

  const conciergeInfo = useSelector((state) => state.concierges.value);

  console.log(conciergeInfo.token);

  const [userInfo, setUserInfo] = useState([]);

  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState([]);
  const [zipcode, setZipcode] = useState([]);
  const [city, setCity] = useState([]);
  const [aboutme, setAboutMe] = useState("");
  const [iban, setIban] = useState([]);
  const [newEmail, setNewEmail] = useState("");
  const [nationality, setNationality] = useState("")
  const [newPassword, setNewPassword] = useState("");
  const [newAddress, setNewAdress] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newZipCode, setNewZipCode] = useState("");
  const [newAboutMe, setNewAboutMe] = useState("")
  const [newIban, setNewIban] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/concierges/findInfoToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ token: conciergeInfo.token }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data.result);
        setBirthday(data.result.birthday.split("T")[0]);
        setAddress(data.result.addresses[0].address);
        setZipcode(data.result.addresses[0].zipcode);
        setCity(data.result.addresses[0].city);
        setAboutMe(data.result.personalInfo[0].aboutme);
        setIban(data.result.paymentInfo);
        setNationality(data.result.nationality);
        setPhone(data.result.phoneNumber)
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  }, []);

  const handleUpdateEmail = () => {
    fetch("http://localhost:3000/concierges/updateConcierge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: conciergeInfo.token, email: newEmail }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          console.log("Mise a jour réussi", data);
          toast.success("Mise à jour réussi");
          setNewEmail("");
        } else {
          toast.error("Format e-mail invalide");
        }
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  };

  const handleUpdatePassword = () => {
    fetch("http://localhost:3000/concierges/updatePasswordConcierge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: conciergeInfo.token,
        password: newPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          console.log("Mise a jour réussi", data);
          toast.success("Mise à jour réussi");
          setNewPassword("");
        } else {
          toast.error("Format mot de passe invalide");
        }
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  };

  const handleUpdateAddress = () => {
    fetch("http://localhost:3000/concierges/updateAddressConcierge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: conciergeInfo.token,
        address: { address: newAddress, city: newCity, zipcode: newZipCode },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          console.log("Mise a jour réussi", data);
          toast.success("Mise à jour réussi");
          setNewPassword("");
        } else {
          toast.error("Format d'adresse invalide");
        }
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  };
  
  const handleUpdateAboutMe = () => {
    fetch("http://localhost:3000/concierges/updateAboutMeConcierge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: conciergeInfo.token,
        aboutme: { aboutme: aboutme },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          console.log("Mise a jour réussi", data);
          toast.success("Mise à jour réussi");
          setNewPassword("");
        } else {
          toast.error("Format invalide");
        }
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  };

  const handleUpdateIban = () => {
    fetch("http://localhost:3000/concierges/updateIbanConcierge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: conciergeInfo.token,
        paymentInfo: newIban,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          console.log("Mise a jour réussi", data);
          toast.success("Mise à jour réussi");
          setNewPassword("");
        } else {
          toast.error("Format invalide");
        }
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  };

  const parsedDate = new Date(birthday);

  const daysOfWeek = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const month = months[parsedDate.getMonth()];
  const day = parsedDate.getDate();
  const year = parsedDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  

  return (
    <div>
      {/* HEADER START */}
      <Header />
      {/* HEADER END */}
      <div className="h-full bg-white mt-14">
        <ToastContainer />
        <div className="flex">
          {" "}
          <h1 className="flex text-xl bg-neutral-800 mb-6 pl-20 pb-5 pt-6 text-neutral-300 w-full">
            <p>Modifier vos informations personnelles</p>
            <p className="italic ml-1 text-white font-bold"></p>
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="ml-16 flex flex-col mb-10 p-3 shadow-xl w-8/12 bg-neutral-100">
            <div className="font-semibold text-2xl">Vos identifiants</div>
            <div className="flex flex-col">
              <div className="mt-2 text-neutral-500 p-2 rounded-xl border-neutral-500">
                {userInfo.email}
              </div>
              <input
                type="text"
                className="mt-1 mb-2 bg-white border-2 w-8/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nouveau e-mail..."
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <p
                onClick={handleUpdateEmail}
                className="ml-1 cursor-pointer text-emerald-600 hover:text-neutral-500"
              >
                Modifier votre email
              </p>

              <div className="mt-5 text-neutral-500  w-8/12  rounded-xl ">
                ************
              </div>
              <input
                type="password"
                className="mt-1 mb-2 bg-white border-2 w-8/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nouveau mot de passe..."
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <p
                onClick={handleUpdatePassword}
                className="ml-1 cursor-pointer text-emerald-600 hover:text-neutral-500"
              >
                Modifier votre mot de passe
              </p>
            </div>
            <div className="mt-5 border-t-black border-t-2 flex flex-row"></div>
            <div className="font-semibold ml-1 mt-4  text-2xl">Prénom & nom</div>
            <div className="flex flex-row">
              <div className=" text-neutral-500  p-2 rounded-xl border-neutral-500">
                {userInfo.firstname} {userInfo.lastname}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="ml-1 mt-1 font-semibold text-2xl"> Date de naissance </p>
              <div className="text-neutral-500  w-5/12  p-2 rounded-xl border-neutral-500">
                {formattedDate}
              </div>
              <p className="ml-1 font-semibold text-2xl"> Nationnalité </p>
              <div className="text-neutral-500  w-5/12  p-2 rounded-xl border-neutral-500">
                {userInfo.nationality}
              </div>
              <p className="ml-1 mt-1 font-semibold text-2xl"> Numéro de téléphone </p>
              <div className="text-neutral-500  w-5/12  p-2 rounded-xl border-neutral-500">
                {phone}
              </div>
              <p className="ml-1 mt-6  flex">
                <p className="text-emerald-600 cursor-pointer mr-1 hover:text-neutral-500">
                  Contactez-nous
                </p>
                pour changer vos informations personelles
              </p>
            </div>
            <div className="flex flex-row"></div>
            <div className="flex flex-row"></div>
            <div className="flex flex-row"></div>
            <div className="flex flex-row"></div>
            <div className="flex flex-col">
              <div className="flex flex-row"></div>
            </div>
          </div>
          <div className="ml-16 flex flex-col mb-10 p-3 shadow-xl w-9/12 bg-neutral-100">
            <div className="font-semibold text-2xl">Adresse</div>
            <div className="flex flex-col">
              <div className="mt-2  text-neutral-500 rounded-xl border-neutral-500">
                {address}
              </div>
              <div className="my-1  text-neutral-500  rounded-xl border-neutral-500">
                {zipcode} {city}
              </div>
              {/* <div className="mb-2  text-neutral-500   rounded-xl border-neutral-500"></div> */}
              <input
                type="text"
                className="mt-1 mb-2 bg-white border-2 w-8/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nouvelle adresse..."
                value={newAddress}
                onChange={(e) => setNewAdress(e.target.value)}
              />
              <input
                type="text"
                className="mt-1 mb-2 bg-white border-2 w-8/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nouvelle ville..."
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
              />
              <input
                type="text"
                className="mt-1 mb-2 bg-white border-2 w-8/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nouveau code postal..."
                value={newZipCode}
                onChange={(e) => setNewZipCode(e.target.value)}
              />
              <p
                onClick={handleUpdateAddress}
                className="ml-1 cursor-pointer text-emerald-600 hover:text-neutral-500"
              >
                Modifier votre adresse
              </p>

              <div className="font-semibold ml-1 mt-5 text-2xl">
                A propos de moi
              </div>
              <div className="mt-2 text-neutral-500 w-8/12 p-2 rounded-xl border-neutral-500"></div>
              <input
                type="text"
                className="mt-1 mb-2 bg-white border-2 w-8/12 p-2 rounded-xl border-neutral-500 h-24"
                placeholder="Nouvelle bio..."
                value={aboutme}
                onChange={(e) => setAboutMe(e.target.value)}
              />
              <p
                onClick={handleUpdateAboutMe}
                className="ml-1 cursor-pointer text-emerald-600 hover:text-neutral-500"
              >
                Modifier votre à propos
              </p>
            </div>
            <div className="flex flex-row"></div>
            <div className="font-semibold ml-1 mt-5 text-2xl">RIB</div>
            <div className="flex flex-row">
              <div className="flex flex-row text-neutral-500 w-4/12 p-2 rounded-xl border-neutral-500">
                <div>
                  FR
                  </div>
                  <div className="ml-1">
                  {iban}
                  </div>
                
              </div>
            </div>
            <input
                type="text"
                className="mb-2 bg-white border-2 w-8/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nouveau RIB..."
                value={newIban}
                onChange={(e) => setNewIban(e.target.value)}
              />
               <p onClick={handleUpdateIban} className="ml-1 cursor-pointer text-emerald-600 hover:text-neutral-500">
                Modifier votre RIB
              </p>
           
            <div className="flex flex-row"></div>
            <div className="flex flex-row"></div>
            <div className="flex flex-row"></div>
            <div className="flex flex-row"></div>
            <div className="flex flex-col">
              <div className="flex flex-row"></div>
            </div>
          </div>
          <div className="flex justify-end ">
            <img
              src="/update.png"
              alt="update"
              className="ml-96 mt-72 w-96 h-96 opacity-50"
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
      {/* FOOTER END  */}
    </div>
  );
}

export default SettingsClient;
