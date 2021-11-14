import React from "react";
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";
import System13 from "./components/System13/System13";
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
