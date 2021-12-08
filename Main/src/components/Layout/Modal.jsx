import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

const SubModal = (props) => {
  return (
    <motion.section
      className={"modal warning"}
      initial={{ x: "-27vw", y: "-25vh" }}
      animate={
        props.isVisible
          ? { scale: 1, y: "-25vh", x: "-27vw", opacity: 1 }
          : { y: "-25vh", x: "-100vw", opacity: 0 }
      }
      transition={{ ease: "anticipate", duration: 0.6 }}
    >
      <h3 className="modal-header">{props.modalH}</h3>
      <p className="modal-info">{props.modalP}</p>
      {!props.errorModal && (
        <button
          className="btn-understand btn"
          onClick={props.liftingModalCancel}
        >
          {props.modalBtn}
        </button>
      )}
    </motion.section>
  );
};

const Overlay = (props) => {
  return (
    <motion.section
      className={"overlay"}
      animate={
        props.isVisible
          ? { opacity: 1, zIndex: 5 }
          : { opacity: 0, zIndex: -100 }
      }
      transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
    ></motion.section>
  );
};

const Modal = (props) => {
  let modalH;
  let modalP;
  let modalBtn;

  switch (props.text) {
    // System13 error vvv
    case "err0":
      modalH = "Odd amount of players";
      modalP = "For system13 to randomize the team players needs to be even";
      modalBtn = "Try again?";
      break;
    case "err1":
      modalH = "Sum of tiers are odd";
      modalP = "This team is an impossible team , please try a new team";
      modalBtn = "Try again?";
      break;
    case "err2":
      modalH = "These 2 players are not a match";
      modalP = "This team is an impossible team , please try a new team";
      modalBtn = "Try again?";
      break;
    case "err3":
      modalH = "Player doesn't exist!";
      modalP =
        "Seems like you misspelled or that player isn't registered in the database or you probably forgot to login";
      modalBtn = "Try again?";
      break;
    case "err4":
      modalH = "Odd amount of tiers";
      modalP = "Apparently this team cant be randomized";
      modalBtn = "Try again?";
      break;
    // Server side errors vvv
    case "500":
      modalH = "Internal server error";
      modalP =
        "The server returned an error code of 500. Please try again in a few seconds";
      break;
    case "521":
      modalH = "Database seems to be down";
      modalP =
        "The server didn't respond at all. Please come back later or try refreshing";
      break;
    case "503":
      modalH = "Database down for maintenance";
      modalP =
        "The server is currently unavailable due to temporary overload or server maintenance";
      break;
    // Reminder modal
    default:
      modalH = "Reminder";
      modalP =
        "This program isn't perfect, this program might lag or worse crash your computer.";
      modalBtn = "I Understand all of the possible consequence";
      break;
  }

  return (
    <Fragment>
      {/* Using portals to goto #modal , #overlay */}
      {ReactDOM.createPortal(
        <SubModal
          liftingModalCancel={props.liftingModalCancel}
          isVisible={props.isVisible}
          modalBtn={modalBtn}
          modalH={modalH}
          modalP={modalP}
          errorModal={props.errorModal}
        />,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <Overlay isVisible={props.isVisible} />,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Modal;