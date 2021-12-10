import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../components/Account/Login";
import Players from "../components/Account/Players";
import { accountActions } from "../context";

const Profile = (props) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
        <section className="account">
          <div className="account__profile">
            <div className="account__profile-con">
              <img src={userInfo.img} alt="User" />
              <div className="account__profile--text">
                <h1>
                  {userInfo.firstName} {userInfo.lastName}
                </h1>
                <p>{userInfo.bio}</p>
              </div>
            </div>
            <button
              className="btn"
              onClick={() => {
                dispatch(accountActions.logout());
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
              <ul className="account__existing--list">
                <li><h3 style={{fontWeight : "600", fontSize : "1.7rem"}}>Name &#8212; Codename</h3><h2 style={{fontWeight : "600" , fontSize : "1.7rem"}}>Tier</h2></li>
                <li><h3>Bogie</h3><h2>4</h2></li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Profile;
