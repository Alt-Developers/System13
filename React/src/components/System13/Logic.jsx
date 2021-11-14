import React, { useState } from "react";

const Logic = (props) => {
  const [playerInp1, setPlayerInp1] = useState("");
  const [playerInp2, setPlayerInp2] = useState("");
  const [playerInp3, setPlayerInp3] = useState("");
  const [playerInp4, setPlayerInp4] = useState("");
  const [playerInp5, setPlayerInp5] = useState("");
  const [playerInp6, setPlayerInp6] = useState("");
  const [playerInp7, setPlayerInp7] = useState("");
  const [playerInp8, setPlayerInp8] = useState("");
  const [playerInp9, setPlayerInp9] = useState("");
  const [playerInp10, setPlayerInp10] = useState("");

  const playerInpHander1 = (event) => {
    setPlayerInp1(event.target.value);
  };
  const playerInpHander2 = (event) => {
    setPlayerInp2(event.target.value);
  };
  const playerInpHander3 = (event) => {
    setPlayerInp3(event.target.value);
  };
  const playerInpHander4 = (event) => {
    setPlayerInp4(event.target.value);
  };
  const playerInpHander5 = (event) => {
    setPlayerInp5(event.target.value);
  };
  const playerInpHander6 = (event) => {
    setPlayerInp6(event.target.value);
  };
  const playerInpHander7 = (event) => {
    setPlayerInp7(event.target.value);
  };
  const playerInpHander8 = (event) => {
    setPlayerInp8(event.target.value);
  };
  const playerInpHander9 = (event) => {
    setPlayerInp9(event.target.value);
  };
  const playerInpHander10 = (event) => {
    setPlayerInp10(event.target.value);
  };
  ////////////////////////////////////////

  const playerList = {
    p4: 4,
    TLK: 4,
    LVI: 4,
    KIN: 4,
    NEO: 4,
    //Tier3 vvv
    TCN: 3,
    p3: 3,
    RYU: 3,
    RAN: 3,
    VOR: 3,
    POR: 3,
    HRO: 3,
    SKA: 3,
    //Tier2 vvv
    p2: 2,
    PAN: 2,
    SEN: 2,
    NUT: 2,
    SHM: 2,
    NTB: 2,
    NLE: 2,
    //Tier1 vvv
    p1: 1,
    ZCH: 1,
    BRY: 1,
  };

  const sort = (Arr) => {
    const sortedArr = [];
    Arr.forEach((item, i) => {
      if (Arr[i][1] > Arr[0][i]) {
        sortedArr.unshift([item[0], item[1]]);
      } else {
        sortedArr.push([item[0], item[1]]);
      }
    });
    return sortedArr;
  };

  const display = (resultArr, score) => {
    const newScore = [];
    const reactFormatArr = [];

    console.log(score, newScore, resultArr);
    score.forEach((result, i) => {
      newScore.push(...score[i]);
    });
    resultArr.forEach((result, i) => {
      reactFormatArr.push([result, newScore[i]]);
    });

    const teamPlayerAmount = reactFormatArr.length / 2;
    const atkFreshResults = reactFormatArr.slice(0, teamPlayerAmount);
    const defFreshResults = reactFormatArr.slice(teamPlayerAmount);

    props.liftResults(sort(atkFreshResults),sort(defFreshResults))
  };

  const checkScore = function (arr) {
    const calc = [];
    const playerPerTeam = arr.length / 2;
    arr.forEach(function (cur, i) {
      calc.push(playerList[cur]);
    });
    if (calc.reduce((acc, cur) => acc + cur) % 2 === 0) {
      console.log("Hello");
    } else {
      return "impossible";
    }

    const attackers = calc.slice(0, playerPerTeam);
    const defenders = calc.slice(playerPerTeam);
    const attackerScore = attackers.reduce((acc, cur) => acc + cur);
    const defenderScore = defenders.reduce((acc, cur) => acc + cur);
    if (attackerScore === defenderScore) {
      return [attackers, defenders];
    } else {
      return false;
    }
  };

  const randomizer = function (array) {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const main = function (players) {
    let finishedEqulazing = false;
    let timesEqualized = 0;
    let processingPlayers = randomizer(players);
    if (checkScore(processingPlayers) === "impossible") {
      return false;
    }
    while (finishedEqulazing === false || timesEqualized <= 200) {
      processingPlayers = randomizer(players);
      finishedEqulazing = checkScore(processingPlayers);
      timesEqualized++;
    }
    display(processingPlayers, finishedEqulazing);
  };

  let active = true;
  const startSystem = (event) => {
    event.preventDefault();

    const players = [
      playerInp1,
      playerInp2,
      playerInp3,
      playerInp4,
      playerInp5,
      playerInp6,
      playerInp7,
      playerInp8,
      playerInp9,
      playerInp10,
    ]
      .filter((player) => player !== "")
      .map((player) => player.replaceAll(" ", "").toUpperCase().slice(0, 3));

    if (active && players.length % 2 === 0) {
      main(players);
    }
    console.log(players);
  };

  return (
    <div className="start__wrapper">
      <div className="start__text">
        <h1>Welcome to System13</h1>
        <p>To start input all players that are playing</p>
        <p>Not all fields need to be filled</p>
      </div>

      <form className="start__form" onSubmit={startSystem}>
        <div className="start__form--left">
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 1"
            onChange={playerInpHander1}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 2"
            onChange={playerInpHander2}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 3"
            onChange={playerInpHander3}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 4"
            onChange={playerInpHander4}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 5"
            onChange={playerInpHander5}
          />
        </div>
        <div className="start__form--right">
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 6"
            onChange={playerInpHander6}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 7"
            onChange={playerInpHander7}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 8"
            onChange={playerInpHander8}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 9"
            onChange={playerInpHander9}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 10"
            onChange={playerInpHander10}
          />
        </div>
        <button type="submit" className="submit__form--start dark-btn btn">
          Start the randomization!
        </button>
      </form>
    </div>
  );
};

export default Logic;
