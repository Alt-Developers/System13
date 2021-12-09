import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Signup = (props) => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [image, setImage] = useState();
  const routeHistory = useHistory();

  return (
    <div className="login">
      <motion.section className="login-con">
        <div className="login-left">
          <div className="login-text">
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
            onSubmit={async (values, { setSubmitting }) => {
              if (canSubmit) {
                const signupData = new FormData();

                signupData.append("firstName", values.firstname);
                signupData.append("lastName", values.lastname);
                signupData.append("email", values.email);
                signupData.append("pass", values.password);
                signupData.append("image", image);
                console.log("Not imaged");

                await fetch("https://apis.ssdevelopers.xyz/auth/signup", {
                  method: "POST",
                  body: signupData,
                }).then((res) => {
                  if (res.status === "200") {
                    routeHistory.push("/login");
                  }
                });
              }

              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="login-form">
                <div className="login-formWrapper">
                  <Field
                    type="text"
                    name="firstname"
                    placeholder="firstname"
                    className="login-form__input"
                  />
                  <Field
                    type="text"
                    name="lastname"
                    placeholder="lastname"
                    className="login-form__input"
                  />
                  <Field
                    type="text"
                    name="email"
                    placeholder="email"
                    className="login-form__input"
                  />
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                    className="login-form__input"
                  />
                  <NavLink
                    to="/login"
                    className="u-remove-a-eff login-form__signup"
                  >
                    Already have an account?
                  </NavLink>
                </div>
                <button className="login-form__imgWrapper">
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
                    className="login-form__img"
                  />
                </button>

                <button
                  type="submit"
                  className={`${
                    canSubmit ? "login-form__submit" : "login-form__cantSubmit"
                  }`}
                  disabled={isSubmitting}
                >
                  &raquo;
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </motion.section>
    </div>
  );
};

export default Signup;
