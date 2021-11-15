import React , { useState } from "react";

const Modal = (props) => {
  return (
    <div>
    <section className={props.isVisible ? "modal warning" : "modal warning hidden"}>
      <h3 className="modal-header">{props.modalH}</h3>
      <p className="modal-info">
        {props.modalP}
      </p>
      <button className="btn-understand btn" onClick={props.liftingModalCancle}>
        {props.modalBtn}
      </button>
    </section>
    <section className={props.isVisible ? "overlay" : "overlay hidden"}></section>
    </div>
  );
};

export default Modal;
