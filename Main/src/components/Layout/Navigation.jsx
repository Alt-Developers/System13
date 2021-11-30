import React, { useState } from "react";
import "../../style/index.css";

const Navigation = () => {
  const [isActive, setIsActive] = useState("System");

  return (
    <nav className="nav">
      <div className="nav__logo">
        <a href="https://ssdevelopers.xyz/system13" className="u-remove-a-eff">
          <img src="./logo.png" alt="logo" />
        </a>
      </div>
      <div
        className={`nav__1 nav__center ${isActive === "Home" ? "active" : ""}`}
      >
        <a href="#" className="u-remove-a-eff">
          Home
        </a>
      </div>
      <div
        className={`nav__2 nav__center ${
          isActive === "System" ? "active" : ""
        }`}
      >
        <a href="#" className="u-remove-a-eff">
          System
        </a>
      </div>
      <div
        className={`nav__3 nav__center ${
          isActive === "Github" ? "active" : ""
        }`}
      >
        <a href="#" className="u-remove-a-eff">
          Github
        </a>
      </div>
      <a href="https://ssdevelopers.xyz" className="u-remove-a-eff">
        <div className="nav__4 nav__center nav__btn">Explore More</div>
      </a>
    </nav>
  );
};

export default React.memo(Navigation);
