import React from "react";
import "../../style/index.css";

const Navigation = (props) => {
  return (
    <nav>
      <div className="logo">
        <img src="./src/img/logo.png" alt="SS System 13 Logo" />
      </div>
      <a href="./index.html">
        <li className="nav__1">Home</li>
      </a>
      <a href="#" className="active nav__2">
        <li>System</li>
      </a>
      <a href="./github.html" className="nav__3">
        <li>Github</li>
      </a>
      <a href="https://ssdevelopers.xyz" className="nav__4">
        <li>Portals</li>
      </a>
    </nav>
  );
};

export default Navigation;
