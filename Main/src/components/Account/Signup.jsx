import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";

const Signup = (props) => {
  const [canSubmit, setCanSubmit] = useState(false);

  return (
    <div className="login">
      <motion.section className="login-con">
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
          onSubmit={async (values) => {
            const signupData = new FormData();

            if (!values.image) {
              signupData.append("firstName", values.firstname);
              signupData.append("lastName", values.lastname);
              signupData.append("email", values.email);
              signupData.append("pass", values.password);
              signupData.append("image", values.image);
            } else {
              signupData.append("firstName", values.firstname);
              signupData.append("lastName", values.lastname);
              signupData.append("email", values.email);
              signupData.append("pass", values.password);
              signupData.append("image", values.image);
            }

            await fetch("https://apis.ssdevelopers.xyz/auth/signup", {
              method: "POST",
              body: signupData,
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="login-form">
              <Field type="text" name="firstname" placeholder="firstname" />
              <Field type="text" name="lastname" placeholder="lastname" />
              <Field type="text" name="email" placeholder="email" />
              <Field type="password" name="password" placeholder="password" />
              <Field
                type="file"
                name="image"
                placeholder="image"
                className="login-form__img"
              />
              <button
                type="submit"
                className={`${
                  canSubmit ? "login-form__submit" : "login-form__cantSubmit"
                }`}
              >
                &raquo;
              </button>
            </Form>
          )}
        </Formik>
      </motion.section>
    </div>
  );
};

export default Signup;
