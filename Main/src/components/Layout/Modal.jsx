import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../context/modalSlice";
import { motion } from "framer-motion";

const Modal = (props) => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const info = useSelector((state) => state.modal.info);
  const dispatch = useDispatch();

  return (
    <>
      {!isOpen && props.children}
      <motion.div
        className="backdrop"
        initial={{ opacity: 0, zIndex: -100 }}
        animate={
          isOpen ? { opacity: 1, zIndex: 5 } : { opacity: 0, zIndex: -100 }
        }
        transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
      >
        {props.children}
      </motion.div>
      <motion.div
        className="modal"
        initial={{ y: "-25vh", x: "-27vw", opacity: 0 }}
        animate={
          isOpen
            ? { y: "-25vh", x: "-27vw", opacity: 1 }
            : { y: "-25vh", x: "-100vw", opacity: 0 }
        }
        transition={{ duration: 0.2 }}
      >
        <div className="modal__header" style={{ backgroundColor: "#fa4454" }}>
          <i class="bx bxs-bell"></i>
          <h1>{info.header}</h1>
        </div>
        <p>{info.text}</p>
        {info.button ? (
          <button
            className="btn"
            onClick={() => {
              dispatch(modalActions.close());
            }}
          >
            {info.button}
          </button>
        ) : (
          ""
        )}
      </motion.div>
    </>
  );
};

export default Modal;
