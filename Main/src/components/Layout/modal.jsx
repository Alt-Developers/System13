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
      <button className="btn-understand btn" onClick={props.liftingModalCancle}>
        {props.modalBtn}
      </button>
    </motion.section>
  );
};

const Overlay = (props) => {
  return (
    <motion.section
      className={"overlay"}
      animate={
        props.isVisible ? { opacity: 1, zIndex: 5 } : { opacity: 0, zIndex: -1 }
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
    case "err0":
      modalH = "Odd amount of players";
      modalP = "For system13 to randomize the team players needs to be even";
      modalBtn = "Try agian?";
      break;
    case "err1":
      modalH = "Sum of tiers are odd";
      modalP = "This team is an imposible team , please try a new team";
      modalBtn = "Try agian?";
      break;
    case "err2":
      modalH = "These 2 players are not a match";
      modalP = "This team is an imposible team , please try a new team";
      modalBtn = "Try agian?";
      break;
    case "err3":
      modalH = "Player dosen't exist!";
      modalP =
        "Seems like you mispelled or that player isnt registered in the database";
      modalBtn = "Try agian?";
      break;
    case "err4":
      modalH = "Odd amount of tiers";
      modalP = "Apparently this team cant be randomized";
      modalBtn = "Try agian?";
      break;
    default:
      modalH = "Reminder";
      modalP =
        "This program isnt perfect, this program might lag or worse crash your computer.";
      modalBtn = "I Understand all of the possible consequence";
      break;
  }

  return (
    <Fragment>
      {/* Using portals to goto #modal , #overlay */}
      {ReactDOM.createPortal(
        <SubModal
          liftingModalCancle={props.liftingModalCancle}
          isVisible={props.isVisible}
          modalBtn={modalBtn}
          modalH={modalH}
          modalP={modalP}
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
