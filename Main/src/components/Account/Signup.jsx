import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Signup = (props) => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [image, setImage] = useState(null);
  const routeHistory = useNavigate();
  const submitRef = useRef();
  const curRoute = useLocation();

  const sendReq = async (values) => {
    if (canSubmit) {
      const signupData = new FormData();

      if (image) {
        signupData.append("firstName", values.firstname);
        signupData.append("lastName", values.lastname);
        signupData.append("email", values.email);
        signupData.append("pass", values.password);
        signupData.append("image", image);
      } else {
        signupData.append("firstName", values.firstname);
        signupData.append("lastName", values.lastname);
        signupData.append("email", values.email);
        signupData.append("pass", values.password);
      }

      // DANGEROUS CODE //
      await fetch("https://apis.ssdevelopers.xyz/auth/signup", {
        method: "POST",
        body: signupData,
      }).then((res) => {
        if (res.status === "200") {
          routeHistory.push("/login");
          submitRef.current.blur();
        }
      });
      //////////////////
    }
  };

  return (
    <motion.div
      className="signup"
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <section className="signup-con">
        <div className="signup-left">
          <div className="signup-text">
            <h1>Create your SS Account</h1>
            <p>To unlock more features for System13</p>
          </div>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              image: "",
            }}
            validate={(values) => {
              if (values.firstname === "") {
                setCanSubmit(false);
              } else if (values.lastname === "") {
                setCanSubmit(false);
              } else if (values.email === "") {
                setCanSubmit(false);
              } else if (values.password === "") {
                setCanSubmit(false);
              } else {
                setCanSubmit(true);
              }
            }}
            onSubmit={(values, { setSubmitting }) => {
              sendReq(values);
              console.log("SUBMITTED");
              curRoute.push("/profile");
            }}
          >
            {({ isSubmitting }) => (
              <Form className="signup-form">
                <div className="signup-formWrapper">
                  <Field
                    type="text"
                    name="firstname"
                    placeholder="firstname"
                    className="signup-form__input"
                  />
                  <Field
                    type="text"
                    name="lastname"
                    placeholder="lastname"
                    className="signup-form__input"
                  />
                  <Field
                    type="text"
                    name="email"
                    placeholder="email"
                    className="signup-form__input"
                  />
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                    className="signup-form__input"
                  />
                  <NavLink
                    to="/profile"
                    className="u-remove-a-eff signup-form__signup"
                  >
                    Already have an account?
                  </NavLink>
                </div>
                <button className="signup-form__imgWrapper" type="button">
                  {!image && <i className="bx bx-image-add"></i>}
                  {image && (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="userProfile"
                      height="150px"
                      width="150px"
                      className="previewImg"
                    />
                  )}
                  <Field
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(event) => {
                      setImage(event.currentTarget.files[0]);
                    }}
                    className="signup-form__img"
                  />
                </button>

                <button
                  type="submit"
                  className={`${
                    canSubmit ? "login-form__submit" : "login-form__cantSubmit"
                  }`}
                  disabled={isSubmitting}
                  ref={submitRef}
                >
                  &raquo;
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </motion.div>
  );
};

export default Signup;
