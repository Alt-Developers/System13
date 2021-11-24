import React, { useState } from "react";
import Attackers from "./Results/Attackers";
import Defenders from "./Results/Defenders";
import Logic from "./Logic";

const System13 = function (props) {
  const [defResults, setDefResults] = useState([["John Doe", 2]]);
  const [atkResults, setAtkResults] = useState([["Jane Doe", 3]]);

  const liftResultsHandler = (defResults, atkResults) => {
    setDefResults(defResults);
    setAtkResults(atkResults);
  };

  return (
    <section className="result">
      <Attackers atkPlayers={atkResults} />
      <Defenders defPlayers={defResults} />
      <Logic liftResults={liftResultsHandler} />
    </section>
  );
};

export default System13;
