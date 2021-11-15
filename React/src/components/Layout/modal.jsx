import React from "react";
import { motion } from "framer-motion";

const Modal = (props) => {
  return (
    <div>
      <motion.section
        className={"modal warning"}
        initial={{ x: "-27vw", y: "-25vh" }}
        animate={props.isVisible ? {scale: 1 , y:"-25vh"} : {scale:0, y: "-70vh"}}
      >
        <h3 className="modal-header">{props.modalH}</h3>
        <p className="modal-info">{props.modalP}</p>
        <button
          className="btn-understand btn"
          onClick={props.liftingModalCancle}
        >
          {props.modalBtn}
        </button>
      </motion.section>

      <section
        className={props.isVisible ? "overlay" : "overlay hidden"}
      ></section>
    </div>
  );
};

export default Modal;
