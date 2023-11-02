import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../reducers/rootReducer";

function SettingsClient() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => (state as any).users.value);

  const [userInfo, setUserInfo] = useState({
    email: "",
    firstname: "",
    lastname: "",
  });

  console.log(userInfo);

  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/users/findUserInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ token: user.token }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data.result);
        setBirthday(data.result.birthday.split("T")[0]);
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  }, []);

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
      <Header />
      <div
        className="h-full bg-white mt-14"
        style={{
          backgroundImage: "url(/whitebg.webp)", // Assuming your image is in the public directory
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex">
          {" "}
          <h1 className="flex text-xl bg-neutral-800 mb-6 pl-20 pb-5 pt-6 text-neutral-300 w-full">
            <p>Modifier vos informations personnelles</p>
            <p className="italic ml-1 text-white font-bold"></p>
          </h1>
        </div>
        <div className="flex flex-row ml-20 ">
          <div className="ml-10 flex flex-col mb-10 p-3 shadow-xl w-5/12 bg-neutral-100">
            <div className="font-semibold">Vos identifiants</div>
            <div className="flex flex-col">
              <div className="mt-3 mb-2 border-2 text-neutral-500  bg-white w-8/12 p-2 rounded-xl border-neutral-500">
                {userInfo.email}
              </div>
              <input
                type="text"
                className="mt-1 mb-2 bg-white border-2 w-8/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nouveau e-mail..."
              />
              <p className="ml-1 cursor-pointer text-emerald-600 hover:text-neutral-500">
                Modifier votre e-mail
              </p>

              <div className="mt-10 mb-2 text-neutral-500 bg-white border-2 w-8/12 p-2 rounded-xl border-neutral-500">
                ************
              </div>
              <input
                type="password"
                className="mt-1 mb-2 bg-white border-2 w-8/12 p-2 rounded-xl border-neutral-500"
                placeholder="Nouveau mot de passe..."
              />
              <p className="ml-1 cursor-pointer text-emerald-600 hover:text-neutral-500">
                Modifier votre mot de passe
              </p>
            </div>
            <div className="flex flex-row"></div>
            <div className="font-semibold ml-1 mt-10">Prénom & nom</div>
            <div className="flex flex-row">
              <div className="mt-3 mb-3 text-neutral-500 border-2 bg-white w-4/12 p-2 rounded-xl border-neutral-500">
                {userInfo.firstname}
              </div>

              <div className="mt-3 mb-3 text-neutral-500 ml-3 bg-white border-2 w-4/12 p-2 rounded-xl border-neutral-500">
                {userInfo.lastname}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="ml-1 mt-2 font-semibold"> Date de naissance </p>
              <div className="mt-3 mb-3 border-2 text-neutral-500  w-5/12 bg-white p-2 rounded-xl border-neutral-500">
                {formattedDate}
              </div>
              <p className="ml-1  flex">
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
            <div className="flex items-center">
              {" "}
              <p className="text-red-500 mt-2 text-cente w-64"></p>
            </div>
          </div>
          <div className="flex justify-end ml-96 mt-72 w-96 h-96 opacity-50"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SettingsClient;
