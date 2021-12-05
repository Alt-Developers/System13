import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";
import System13 from "./pages/System13";
import Github from "./pages/Github";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

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
      <Route path="/profile">
        <Profile />
      </Route>

      <Footer />
    </Fragment>
  );
}

export default App;
