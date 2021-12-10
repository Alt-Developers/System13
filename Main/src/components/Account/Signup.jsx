import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink, useNavigate  } from "react-router-dom";

const Signup = (props) => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [image, setImage] = useState();
  const routeHistory = useNavigate();

  return (
    <div className="signup">
      <motion.section className="signup-con">
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
            onSubmit={async (values, { setSubmitting }) => {
              if (canSubmit) {
                const signupData = new FormData();

                signupData.append("firstName", values.firstname);
                signupData.append("lastName", values.lastname);
                signupData.append("email", values.email);
                signupData.append("pass", values.password);
                signupData.append("image", image);

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
                    to="/login"
                    className="u-remove-a-eff signup-form__signup"
                  >
                    Already have an account?
                  </NavLink>
                </div>
                <button className="signup-form__imgWrapper">
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
