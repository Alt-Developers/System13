import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../sass/style.css";
import systemLogo from "../../assets/img/systemLogo.png";

const Navigation = () => {
  const curRoute = useLocation();

  return (
    <nav className="nav">
      <div className="nav__logo">
        <a href="https://system.ssdevelopers.xyz" className="u-remove-a-eff">
          <img src={systemLogo} alt="logo" />
        </a>
      </div>
      <div
        className={`nav__1 nav__center ${
          curRoute.pathname === "/home" ? "active" : ""
        }`}
      >
        <NavLink to="/home" className="u-remove-a-eff">
          Home
        </NavLink>
      </div>
      <div
        className={`nav__2 nav__center ${
          curRoute.pathname === "/system" ? "active" : ""
        }`}
      >
        <NavLink to="/system" className="u-remove-a-eff">
          System
        </NavLink>
      </div>
      <div
        className={`nav__3 nav__center ${
          curRoute.pathname === "/github" ? "active" : ""
        }`}
      >
        <NavLink to="/github" className="u-remove-a-eff">
          Github
        </NavLink>
      </div>
      <a href="https://ssdevelopers.xyz" className="u-remove-a-eff">
        <div className="nav__4 nav__center nav__btn">Explore More</div>
      </a>
    </nav>
  );
};

export default React.memo(Navigation);
