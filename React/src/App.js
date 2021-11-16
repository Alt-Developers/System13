import React from "react";
import Navigation from "./components/Layout/Navigation.jsx";
import Footer from "./components/Layout/Footer.jsx";
import System13 from "./components/System13/System13.jsx";
import "./style/index.css";

function App() {
  return (
    <div>
      <Navigation />
      <System13 />
      <Footer />
    </div>
  );
}

export default App;
