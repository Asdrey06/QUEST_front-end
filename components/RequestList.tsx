import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Concierge.module.css";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

function RequestList(props) {
  console.log("PROP", props);

  const newDate = props.date.split("T")[0];
  return (
    <div className="outline-black border-emerald-200 flex w-11/12 ml-10 mr-10 flex-wrap">
      {/* <div className={styles.imagesContainer}></div> */}
      {/* <div className={styles.textContainer}> */}
      <div className="bg-neutral-100 shadow-lg w-10/12 mb-5 ml-10 pt-4 pb-4 pl-4 rounded-md border-neutral-400 border-2 flex ">
        <ul>
          <li className="font-bold">
            Instruction: <p className="text-3xl">{props.instruction}</p>
          </li>
          <li>From: {props.from}</li>
          <li className="font-medium">Production: {props.productFees}</li>
          <li className="font-medium">Date: {newDate}</li>
          <div className="flex w-full">
            {" "}
            <li className="font-bold">Total: {props.totalFees}</li>
            <li className="font-medium ml-80">
              Commission: {props.serviceFees}
            </li>
          </div>
        </ul>
      </div>
    </div>

    // </div>
  );
}

export default RequestList;
