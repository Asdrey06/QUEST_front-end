import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Concierge.module.css";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

function RequestList(props) {
  return (
    <div className="bg-neutral-200 w-full hover:bg-neutral-300 m-10 p-10 rounded-2xl flex">
      <div className={styles.imagesContainer}></div>
      <div className={styles.textContainer}>
        <h4>
          {props.date}
          {props.instruction}
        </h4>
        <p>
          {props.paymentInfo}
          {props.servicesFees}
          {props.productFees}
          {props.totalFees}
        </p>
      </div>
    </div>
  );
}

export default RequestList;
