import React, { Fragment } from "react";
import { Route, Routes, Redirect } from "react-router-dom";

import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";
import System13 from "./pages/System13";
import Github from "./pages/Github";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./components/Account/Signup";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="system" element={<System13 />} />
        <Route path="github" element={<Github />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
