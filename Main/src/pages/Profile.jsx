import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Account/Login";
import Players from "../components/Account/Players";

const Profile = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const DUMMY_USERDATA = {
    email: "jiratchutrakul@gmail.com",
    name: "Jirat Chutrakul",
    accType: "Administrator Account",
    profilePic:
      "https://yt3.ggpht.com/ytc/AKedOLQnp52grHdSYHky8B9cw3EqZxTX7kK8grKXmbXY8A=s176-c-k-c0x00ffffff-no-rj",
  };

  return (
    <React.Fragment>
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
        <section className="account">
          <div className="account__profile">
            <div className="account__profile-con">
              <img src={DUMMY_USERDATA.profilePic} alt="User" />
              <div className="account__profile--text">
                <h1>{DUMMY_USERDATA.name}</h1>
                <p>{DUMMY_USERDATA.accType}</p>
              </div>
            </div>
            <button
              className="btn"
              onClick={() => {
                dispatch({ type: "LOGOUT" });
              }}
            >
              Logout
            </button>
          </div>
          <div className="account__right">
            <div className="account__players">
              <h2>Add player to System13</h2>
              <p>to your account</p>
              <Players />
            </div>
            <div className="account__existing">
              <h2>Existing Players</h2>
              <p>In your account</p>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Profile;
