import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const Profile = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    dispatch({ type: "LOGIN" });
  };

  return (
    <React.Fragment>
      <div className="login">
        <motion.div
          className="login-con"
          animate={
            isLoggedIn
              ? { opacity: 0, x: "-60%", y: "-50%" }
              : { opacity: 1, x: "-50%", y: "-50%" }
          }
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <div className="login-text">
            <h1>Log In to SS Account</h1>
            <p>To unlock more features for System13</p>
          </div>
          <form className="login-form" onSubmit={loginSubmitHandler}>
            <input type="email" placeholder="email" />
            <input type="text" placeholder="password" />
            <motion.button type="submit" className="login-form__submit">
              &raquo;
            </motion.button>
          </form>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
