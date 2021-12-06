import React, { useRef, useCallback, useState } from "react";
import Modal from "../Layout/Modal";
import { motion } from "framer-motion";

const Players = (props) => {
  const codenameRef = useRef("");
  const nameRef = useRef("");
  const tierRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const tier = tierRef.current.value;
    const codename = codenameRef.current.value;

    if (!name) {
      return;
    }
    if (!tier) {
      return;
    }
    if (!codename) {
      return;
    }

    const player = {
      name: name.trim(),
      tier: tier.trim(),
      codename: codename.slice(0, 3).toUpperCase(),
    };
    // SEND TO BACKEND
    console.log(player);

    nameRef.current.value = "";
    tierRef.current.value = "";
    codenameRef.current.value = "";
  };
  return (
    <React.Fragment>
      <motion.form onSubmit={submitHandler} className={`account__addPlayer`}>
        <input type="number" min="1" max="4" placeholder="tier" ref={tierRef} />
        <input type="text" placeholder="codename" ref={codenameRef} />
        <input type="text" placeholder="full name" ref={nameRef} />
        <button type="submit">+</button>
      </motion.form>
    </React.Fragment>
  );
};

export default Players;
