import React, { useState } from "react";
import ResultItem from "./ResultsItem";

const System13 = (props) => {
  // Testing Text
  const defPlayers = ["John Doe//1", "Jane Doe//1", "Yoee//2", "Yalle//3"];
  const atkPlayers = ["John Doe//1", "Jane Doe//1", "Yallow//3"];

  return (
    <section className="result">
      <div className="attackers-wrapper">
        <div className="attackers__label">
          <h2>Attackers</h2>
        </div>
        <div className="attackers">
          <div className="attackers__row">
            <div className="attackers--label">Player Name</div>
            <div className="attackers__row--label">Score</div>
          </div>
          {atkPlayers.map((cur, i) => (
            <ResultItem
              team="atk"
              playerName={cur.slice(0, -3)}
              playerNumber={cur.slice(-1)}
            ></ResultItem>
          ))}
        </div>
      </div>
      <div className="defenders-wrapper">
        <div className="defenders__label">
          <h2>Defenders</h2>
        </div>
        <div className="defenders">
          <div className="defenders__row">
            <div className="defenders--label">Player Name</div>
            <div className="defenders__row--label">Score</div>
          </div>
          {defPlayers.map((cur, i) => (
            <ResultItem
              team="def"
              playerName={cur.slice(0, -3)}
              playerNumber={cur.slice(-1)}
            ></ResultItem>
          ))}
        </div>
      </div>
      <div className="start__wrapper">
        <div className="start__text">
          <h1>Welcome to System13</h1>
          <p>To start input all players that are playing</p>
          <p>Not all fields need to be filled</p>
        </div>

        <form className="start__form" action="player=">
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
