import React from "react";
import "../../sass/style.css";

const Footer = () => (
  <footer className="dark-footer">
    <h3>MPL2.0 Lisence &copy;2021 Prawich & Jirat</h3>
    <ul>
      <a href="https://ssdevelopers.xyz">
        <li>Portals</li>
      </a>
      <a href="./index.html">
        <li>Home</li>
      </a>
      <a href="./github.html">
        <li>GitHub</li>
      </a>
      <a href="./docs.html">
        <li>Documentation</li>
      </a>
      <a href="./system.html">
        <li>System</li>
      </a>
      <li>Version 2.1</li>
    </ul>
  </footer>
);

export default React.memo(Footer);
