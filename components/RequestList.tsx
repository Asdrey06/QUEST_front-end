import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Concierge.module.css";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

function RequestList(props) {
  console.log("PROP", props);
  return (
    <div className="bg-neutral-200 w-full hover:bg-neutral-300 m-10 p-10 rounded-2xl flex">
      {/* <div className={styles.imagesContainer}></div> */}
      {/* <div className={styles.textContainer}> */}
      <ul>
        <li>{props.instruction}</li>
        <li>{props.serviceFees}</li>
        <li>{props.productFees}</li>
        <li>{props.totalFees}</li>
        <li>{props.date}</li>
        <li>{props.paymentInfo}</li>
      </ul>
      <p></p>
    </div>
    // </div>
  );
}

export default RequestList;
