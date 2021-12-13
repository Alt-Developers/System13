import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { SpinnerCircularSplit } from "spinners-react";

import { accountActions } from "../../context";

const Login = (props) => {
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const submitRef = useRef();

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    if (enteredEmail !== "" && enteredPassword !== "") {
      setIsLoading(true);
      await fetch("https://apis.ssdevelopers.xyz/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail.trim(),
          pass: enteredPassword,
        }),
      })
        .then((data) => {
          switch (data.status) {
            case 521:
              throw new Error("Server is down");
            case 401:
              throw new Error("Not authenticated");
            case 403:
              throw new Error("Not authorized");
            default:
              return data;
          }
        })
        .then((data) => data.json())
        .then((data) => {
          dispatch(
            accountActions.login({
              token: data.token,
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              img: `https://apis.ssdevelopers.xyz/${data.img}`,
            })
          );
        })
        .catch((err) => {
          submitRef.current.blur();
          setIsLoading(false);
        });
    }
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  useEffect(() => {
    if (enteredEmail !== "" && enteredPassword !== "") {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [enteredEmail, enteredPassword]);

  return (
    <motion.div
      className="login"
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.section
        className={`login-con`}
        initial={{ x: "-50%", y: "-50%" }}
        animate={
          !isLoading && isLoading !== null
            ? {
                x: ["-40%", "-60%", "-45%", "-55%", "-50%"],
                y: "-50%",
              }
            : { x: "-50%", y: "-50%" }
        }
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <div className="login-text">
          <h1>Log In to SS Account</h1>
          <p>To unlock more features for System13</p>
        </div>

        <form className="login-form" onSubmit={loginSubmitHandler}>
          <input
            type="email"
            value={enteredEmail}
            onChange={emailInputHandler}
            placeholder="email"
            className="login-form__input"
          />
          <input
            type="password"
            value={enteredPassword}
            placeholder="password"
            onChange={passwordInputHandler}
            className="login-form__input"
          />
          <NavLink to="/signup" className="u-remove-a-eff login-form__signup">
            Don't have an account?
          </NavLink>
          <motion.button
            type="submit"
            className={`${
              canSubmit ? "login-form__submit" : "login-form__cantSubmit"
            }`}
            disabled={!canSubmit}
            ref={submitRef}
          >
            {!isLoading && <>&raquo;</>}
            {isLoading && (
              <SpinnerCircularSplit color="#fff" thickness="150" speed="150" />
            )}
          </motion.button>
        </form>
      </motion.section>
    </motion.div>
  );
};

export default Login;
