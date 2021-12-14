import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../context/modalSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      {isOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0, y: "-25vh", x: "-27vw", scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300 },
          }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
        >
          <div className="modal__header" style={{ backgroundColor: "#fa4454" }}>
            <i class="bx bxs-bell"></i>
            <h1>{info.header}</h1>
          </div>
          <p>{info.text}</p>
          {info.button && (
            <button
              className="btn"
              onClick={() => {
                dispatch(modalActions.close());
              }}
            >
              {info.button}
            </button>
          )}
          {info.navlink.to && (
            <Link
              className="btn"
              to={info.navlink.to}
              onClick={() => {
                dispatch(modalActions.close());
              }}
            >
              {info.navlink.text}
            </Link>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Modal;
