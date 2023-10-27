import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Concierge.module.css";
import { faCommentDots } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { useSelector } from "react-redux";

function ProfileConcierge(props) {
  const offersRedux = useSelector((state) => state.offers.value);
  console.log(offersRedux)
  
  const createOffer = () => {
    //window.location.href = "/offerpage";
  };

  return (
    <div className="bg-neutral-100 shadow-lg w-10/12 mb-5 ml-10 pt-4 pb-4 pl-4 rounded-md border-neutral-400 border-2 flex">
      <div className={styles.imagesContainer}>
        <img
          className="h-full w-full rounded-3xl"
          src={props.poster}
          alt={props.name}
        />
      </div>
      <div className="pl-10 w-full">
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
            className="mr-4 border-2 border-neutral-300 font-semibold h-8 hover:text-white text-slate-200 rounded-2xl pl-4 pr-4"
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
