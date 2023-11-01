import styles from "../styles/Home.module.css";
import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { clearRequest } from "../reducers/openrequest";
import { RootState } from "../pages/_app";

function LeaveReview() {
  const dispatch = useDispatch();
  const requestinfo = useSelector(
    (state: RootState) => state.openrequest.value
  );

  const [starRating, setStarRating] = useState(0);
  const maxStars: number = 5;

  const handleStarClick = (rating) => {
    setStarRating(rating);
  };

  useEffect(() => {
    if (requestinfo.id === null) {
      window.location.href = "/clientwelcome";
    }
  }, []);

  const [conciergeInfo, setConciergeInfo] = useState({
    _id: "",
    firstname: "",
    lastname: "",
    birthday: "",
    photo: "",
  });

  const [sentFrom, setSentFrom] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/concierges/findInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: requestinfo.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.request.from);
        setConciergeInfo(data.result);
        setSentFrom(data.request.from);
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  }, []);

  const [writeReview, setWriteReview] = useState("");

  console.log(writeReview);

  const handleOnSubmit = () => {
    fetch("http://localhost:3000/concierges/leaveReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: conciergeInfo._id,
        review: { from: sentFrom, stars: starRating, review: writeReview },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.href = "/clientwelcome";
        dispatch(clearRequest());
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
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
          <h1 className="font-extralight text-black text-6xl pb-10">
            Laissez un avis sur {conciergeInfo.firstname}
          </h1>
          <img src={conciergeInfo.photo} className="h-36 rounded-[20%] mb-10" />

          <div className="w-6/12 p-10 rounded-2xl text-slate-500 flex-col items-center justify-center mt-30 border-2 bg-[#34B39C]">
            <div className="mb-2 flex flex-row justify-center pb-2 items-center">
              {[...Array(maxStars)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={`cursor-pointer text-3xl ${
                    starRating > index ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => handleStarClick(index + 1)}
                />
              ))}
            </div>

            <div className="mb-2">
              <textarea
                id="user_message"
                name="user_message"
                placeholder="Message..."
                required
                className="rounded-xl h-40 w-11/12 text-lg mt-1 mb-1 border-2 pt-3 pl-3"
                onChange={(e) => setWriteReview(e.target.value)}
                value={writeReview}
              />
            </div>

            <button
              type="submit"
              onClick={handleOnSubmit}
              className={`${styles.button} bg-black mt-3 p-3 items-center justify-center rounded-2xl text-xl text-white`}
            >
              ENVOYER
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LeaveReview;
