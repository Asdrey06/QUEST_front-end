import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";
import { faCommentDots } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { useSelector, useDispatch } from "react-redux";
import { offersConcierge } from "../reducers/offers";

function ProfileConcierge(props) {
  const dispatch = useDispatch();

  const createOffer = () => {
    dispatch(
      offersConcierge({
        id: props.id,
        firstname: props.name,
        photo: props.photo,
      })
    );
    window.location.href = "/offerpage";
  };

  return (
    <div className="bg-neutral-100 shadow-lg w-10/12 mb-5 ml-10 pt-4 pb-4 pl-4 rounded-md border-neutral-400 border-2 flex items-center">
      <div className="h-28 w-32">
        <img
          className="h-full w-full rounded-[50%] object-cover"
          src={props.poster}
          alt={props.name}
        />
      </div>
      <div className="pl-5 w-full">
        <div className="items-center flex flex-row w-full justify-between">
          <h4 className="text-2xl font-semibold">{props.name}</h4>
          <p className="text-lg mr-6 font-light">
            {props.voteAverage}
            <FontAwesomeIcon icon={faStar} className="text-amber-400" /> 4/5
          </p>
        </div>
        <p className="mt-1 mb-1 italic">À propos de moi: {props.overview}</p>
        <span className="flex flex-row">Langues: {props.langue}</span>
        <div className="flex justify-between items-center">
          <FontAwesomeIcon className="" icon={faCommentDots} />
          <button
            className={`${styles.button2} mr-5 font-semibold`}
            style={{ backgroundColor: "#34B39C" }}
            onClick={createOffer}
          >
            Faire une offre
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileConcierge;
