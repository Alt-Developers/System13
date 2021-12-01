import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Layout/Navigation.jsx";
import Footer from "./components/Layout/Footer.jsx";
import System13 from "./components/System13/System13.jsx";
import Github from "./components/Github/Github.jsx";
import Home from "./components/Home/Home.jsx";

import "./style/index.css";

function App() {
  return (
    <Fragment>
      <Navigation />

      <Route path="/home">
        <Home />
      </Route>
      <Route path="/system">
        <System13 />
      </Route>
      <Route path="/github">
        <Github />
      </Route>

      <Footer />
    </Fragment>
  );
}

export default App;
