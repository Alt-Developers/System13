import React, { useState } from "react";
import Attackers from "./Results/Attackers";
import Defenders from "./Results/Defenders";

const System13 = (props) => {
  // Testing Text
  const [defResults, setDefResults] = useState(["John Doe//3"]);
  const [atkResults, setAtkResults] = useState(["Jane Doe//2"]);

  return (
    <section className="result">
      <Attackers atkPlayers={atkResults} />
      <Defenders defPlayers={defResults} />

      <div className="start__wrapper">
        <div className="start__text">
          <h1>Welcome to System13</h1>
          <p>To start input all players that are playing</p>
          <p>Not all fields need to be filled</p>
        </div>

        <form className="start__form">
          <div className="start__form--left">
            <input
              className="form__start--Player-input"
              type="text"
              name=""
              id=""
              placeholder="Player 1"
            />
            <input
              className="form__start--Player-input"
              type="text"
              name=""
              id=""
              placeholder="Player 2"
            />
            <input
              className="form__start--Player-input"
              type="text"
              name=""
              id=""
              placeholder="Player 3"
            />
            <input
              className="form__start--Player-input"
              type="text"
              name=""
              id=""
              placeholder="Player 4"
            />
            <input
              className="form__start--Player-input"
              type="text"
              name=""
              id=""
              placeholder="Player 5"
            />
          </div>
          <div className="start__form--right">
            <input
              className="form__start--Player-input"
              type="text"
              name=""
              id=""
              placeholder="Player 6"
            />
            <input
              className="form__start--Player-input"
              type="text"
              name=""
              id=""
              placeholder="Player 7"
            />
            <input
              className="form__start--Player-input"
              type="text"
              name=""
              id=""
              placeholder="Player 8"
            />
            <input
              className="form__start--Player-input"
              type="text"
              name=""
              id=""
              placeholder="Player 9"
            />
            <input
              className="form__start--Player-input"
              type="text"
              name=""
              id=""
              placeholder="Player 10"
            />
          </div>
          <button type="submit" className="submit__form--start dark-btn btn">
            Start the randomization!
          </button>
        </form>
      </div>
    </section>
  );
};

export default System13;
