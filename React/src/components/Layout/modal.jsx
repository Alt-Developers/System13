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
      className={props.isVisible ? "overlay" : "overlay hidden"}
      animate={props.isVisible ? { x: 0 } : { x: "-100vw" }}
      transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
    ></motion.section>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <SubModal
          liftingModalCancle={props.liftingModalCancle}
          isVisible={props.isVisible}
          modalBtn={props.modalBtn}
          modalH={props.modalH}
          modalP={props.modalP}
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
