import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Concierge.module.css";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

function RequestList(props) {
  console.log("PROP", props);
  return (
    <div className="outline-black border-emerald-200 flex w-8/12 ml-10 mr-10 flex-wrap">
      {/* <div className={styles.imagesContainer}></div> */}
      {/* <div className={styles.textContainer}> */}
      {/* <div className="bg-neutral-100 shadow-lg w-10/12 mb-5 ml-10 pt-4 pb-4 pl-4 rounded-md border-neutral-400 border-2 flex font-medium"> */}
        <ul>
          <li>Instruction: {props.instruction}</li>
          <li>Service: {props.serviceFees}</li>
          <li>Production: {props.productFees}</li>
          <li>Total: {props.totalFees}</li>
          <li>Date: {props.date}</li>
          <li>Payment: {props.paymentInfo}</li>
        </ul>
      </div>
    </div>
    // </div>
  );
}

export default RequestList;
