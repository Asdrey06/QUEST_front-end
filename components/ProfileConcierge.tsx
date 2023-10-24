import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Concierge.module.css";
import { faCommentDots } from "../node_modules/@fortawesome/free-solid-svg-icons/index";

function ProfileConcierge(props) {
  return (
    <div className="bg-neutral-200 w-4/12 hover:bg-neutral-300 m-10 p-10 rounded-2xl flex">
      <div className={styles.imagesContainer}>
        <img className={styles.images} src={props.poster} alt={props.name} />
      </div>
      <div className={styles.textContainer}>
        <h4>{props.name}</h4>
        <p>{props.overview}</p>
        <span className={styles.vote}>{props.voteAverage}</span>
        <p>{props.langue}</p>
        <FontAwesomeIcon
          className={styles.chat}
          icon={faCommentDots}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default ProfileConcierge;