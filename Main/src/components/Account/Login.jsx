import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { accountActions } from "../../context";
import { useState, useEffect } from "react";

const Login = (props) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    if (enteredEmail !== "" && enteredPassword !== "") {
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
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          if (data.status === "LOGGEDIN") {
            dispatch(
              accountActions.login({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                img: data.img,
                bio: data.bio,
              })
            );
          }
        });
    } else {
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
    <div className="login">
      <motion.section
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
          <input
            type="email"
            value={enteredEmail}
            onChange={emailInputHandler}
            placeholder="email"
          />
          <input
            type="password"
            value={enteredPassword}
            placeholder="password"
            onChange={passwordInputHandler}
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
          >
            &raquo;
          </motion.button>
        </form>
      </motion.section>
    </div>
  );
};

export default Login;
