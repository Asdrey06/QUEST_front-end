import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Concierge.module.css";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function CountdownTimer({ date }) {
  const targetDate = new Date(date);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;
    return timeRemaining > 0 ? timeRemaining : 0;
  }

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div>
      {timeRemaining > 0 ? (
        <div className="text-sm font-semibold">
          <p className="text-right">
            {days} jour, {hours} heures, {minutes} minutes, {seconds} secondes
          </p>
        </div>
      ) : (
        <p className="text-red-500 font-semibold">Temps expiré</p>
      )}
    </div>
  );
}

function RequestList(props) {
  const parsedDate = new Date(props.date);

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

  const dayOfWeek = daysOfWeek[parsedDate.getDay()];
  const month = months[parsedDate.getMonth()];
  const day = parsedDate.getDate();
  const year = parsedDate.getFullYear();

  const formattedDate = `${dayOfWeek} ${day} ${month} ${year}`;
  return (
    <div className="w-full border-emerald-200 flex w-11/12 ml-12 mr-10 mb-3 flex-wrap">
      <div className="bg-neutral-100 shadow-lg w-10/12 mb-5 ml-10 pt-4 pb-4 pl-4 rounded-md border-neutral-400 border-2 flex ">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <FontAwesomeIcon
                icon={faBell}
                className="mr-3 h-7 text-red-600"
                bounce
              />
              <div className="flex flex-col">
                <p className="italic text-sm text-light">
                  Pour le: {formattedDate}
                </p>
                <p className="text-xl font-bold">{props.instruction}</p>
              </div>
            </div>
            <div className="flex flex-row mr-4 text-right">
              <p>
                <p className="italic text-sm">De la part de:</p>{" "}
                <p className="font-semibold text-neutral-500">{props.from}</p>
              </p>
            </div>
          </div>

          <div className="flex mt-8 justify-between items-center">
            <div className="flex flex-col">
              <p className="text-xs  items-center font-medium">
                Frais pour dépenses:{" "}
                <p className="font-bold ">{props.productFees}€</p>
              </p>
              <p className="pt-4 font-medium items-center text-xs">
                Votre commission:
                <p className="font-bold text-xl pr-3">{props.serviceFees}€</p>
              </p>
            </div>

            <p className="flex items-center pt-16 pr-4">
              <CountdownTimer date={props.date} />
              <FontAwesomeIcon icon={faClock} spin className="ml-2" />
            </p>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}

export default RequestList;
