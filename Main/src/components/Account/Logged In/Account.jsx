import { useSelector, useDispatch } from "react-redux";
import { accountActions } from "../../../context/accountSlice";
import Players from "./Players";
import { motion } from "framer-motion";

const Account = (props) => {
  const userInfo = useSelector((state) => state.account.userInfo);
  const dispatch = useDispatch();

  return (
    <motion.section
      className="account"
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="account__profile">
        <div className="account__profile-con">
          <img src={userInfo.img} alt="User" />
          <div className="account__profile--text">
            <h1>
              {userInfo.firstName} {userInfo.lastName}
            </h1>
            <p>SS Account</p>
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
            <li>
              <h3 style={{ fontWeight: "600", fontSize: "1.7rem" }}>
                Name &#8212; Codename
              </h3>
              <h2 style={{ fontWeight: "600", fontSize: "1.7rem" }}>Tier</h2>
            </li>
            <li>
              <h3>Bogie</h3>
              <h2>4</h2>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Account;
