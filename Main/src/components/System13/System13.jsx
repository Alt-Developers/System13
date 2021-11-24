import React, { useReducer } from "react";
import Attackers from "./Results/Attackers";
import Defenders from "./Results/Defenders";
import Logic from "./Logic";

const sortArr = (arr) => {
  const sortedArr = arr.sort((a, b) => b[1] - a[1]);
  return sortedArr;
};

const resultsReducer = (_, action) => {
  switch (action.type) {
    // If the dispatched type is Results then
    // update the results state and displays
    case "RESULTS":
      return { def: sortArr(action.def), atk: sortArr(action.atk) };
    default:
      return { def: [["ERROR", 1]], atk: [["ERROR", 1]] };
  }
};

const System13 = function (props) {
  const [resultsState, dispatchResults] = useReducer(resultsReducer, {
    def: [["Jane Doe", 2]],
    atk: [["John Doe", 3]],
  });

  return (
    <section className="result">
      <Attackers atkPlayers={resultsState.atk} />
      <Defenders defPlayers={resultsState.def} />
      <Logic
        // Lifts the results and dispatches to Reducer
        liftResults={(atk, def) =>
          dispatchResults({ type: "RESULTS", def, atk })
        }
      />
    </section>
  );
};

export default System13;
