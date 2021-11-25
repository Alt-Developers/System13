import React, { Fragment } from "react";
import Navigation from "./components/Layout/Navigation.jsx";
import Footer from "./components/Layout/Footer.jsx";
import System13 from "./components/System13/System13.jsx";
import "./style/index.css";

function App() {
  return (
    <Fragment>
      <Navigation />
      <System13 />
      <Footer />
    </Fragment>
  );
}

export default App;
