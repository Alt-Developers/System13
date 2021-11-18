import React, { useState, useRef, useEffect } from "react";
import Modal from "../Layout/Modal.jsx";

const Logic = (props) => {
  const playerInpRef1 = useRef("");
  const playerInpRef2 = useRef("");
  const playerInpRef3 = useRef("");
  const playerInpRef4 = useRef("");
  const playerInpRef5 = useRef("");
  const playerInpRef6 = useRef("");
  const playerInpRef7 = useRef("");
  const playerInpRef8 = useRef("");
  const playerInpRef9 = useRef("");
  const playerInpRef10 = useRef("");

  const playerList = require("./Constants/playerList");
  const fullNamesList = require("./Constants/fullNamesList");

  const [modalVisible, setModalVisible] = useState(true);
  const [modalText, setModalText] = useState({
    modalH: "Reminder",
    modalP:
      "This program isnt perfect, this program might lag or worse crash your computer.",
    modalBtn: "I Understand all of the possible consequence",
  });

  const sort = (Arr) => {
    // This is what function will be receiving
    // [["John Smith", 1], ["Jane Smith", 2]]
    const sortedArr = Arr.sort((a, b) => b[1] - a[1]);
    return sortedArr;
  };

  const display = (resultArr, score) => {
    const newScore = [];
    const reactFormatArr = [];

    // Old format to ["John Doe", 3] format
    score.forEach((_, i) => {
      newScore.push(...score[i]);
    });
    // Changes codenames to full names
    resultArr.forEach((result, i) => {
      const fullName = playerList.hasOwnProperty(result)
        ? fullNamesList[result]
        : result;
      reactFormatArr.push([fullName, newScore[i]]);
    });

    const teamPlayerAmount = reactFormatArr.length / 2;
    const atkFreshResults = reactFormatArr.slice(0, teamPlayerAmount);
    const defFreshResults = reactFormatArr.slice(teamPlayerAmount);

    // Lifts processed results to System13.jsx
    props.liftResults(sort(atkFreshResults), sort(defFreshResults));
  };

  const checkScore = function (arr) {
    const calc = [];
    const playerPerTeam = arr.length / 2;
    arr.forEach(function (cur, i) {
      calc.push(playerList[cur]);
    });

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

  const endl = () => {
    console.log("--------------------------------");
  };
  const boldEndl = () => {
    console.warn("============================");
  };

  const checkForImpossible = (arr) => {
    console.log("Checking if team is possible ---");
    const calc = [];
    arr.forEach(function (cur, i) {
      calc.push(playerList[cur]);
    });

    // Does player exist?
    let err3 = false;
    calc.forEach((cur) => {
      if (cur === undefined) {
        console.log("❌ : This player doesnt exist");
        err3 = "err3";
      } else {
        console.log("✅ : This player exist");
      }
    });
    if (err3) {
      endl();
      console.info("🗂 : Troubleshooted Code [err3]");
      return "err3";
    }

    // Are players odd?
    if (calc.length % 2 === 0) {
      console.log("✅ : Players amount arent odd");
    } else {
      console.log("❌ : Players amount are odd");
      endl();
      console.info("🗂 : Troubleshooted Code [err0]");
      return "err0";
    }

    // Are tier scores odd?
    if (calc.reduce((acc, cur) => acc + cur) % 2 === 0) {
      console.log("✅ : Tiers add up to even");
    } else {
      console.log("❌ : Tiers add up to odd");
      endl();
      console.info("🗂 : Troubleshooted Code [err1]");
      return "err1";
    }

    const scoreExisted = [];
    const timesExisted = [];
    scoreExisted.push(calc[0]);
    timesExisted.push([calc[0], 0]);
    calc.forEach((score) => {
      if (scoreExisted.includes(score)) {
        let whereExisted = scoreExisted.indexOf(score);
        timesExisted[whereExisted][1]++;
      } else {
        scoreExisted.push(score);
        timesExisted.push([score, 1]);
      }
    });
    timesExisted.forEach((exist) => {
      if (exist[1] % 2 !== 0) {
        console.log("❌ : Odd amount of tier(s)");
        console.info("🗂 : Troubleshooted Code [err4]");
        return "err4";
      } else {
        console.log("✅ : Even amount of tier(s)");
      }
    });

    if (calc.length === 2) {
      // 2 players are not a match
      if (calc[0] !== calc[1]) {
        console.log("❌ : 2 players are not a match");
        endl();
        console.info("🗂 : Troubleshooted Code [err2]");
        return "err2";
      } else {
        console.log("✅ : These 2 players are a match");
      }
    } else {
      console.log("🔎 : There's more than 2 players");
    }

    console.info("✅ : Passed all tests!");
    endl();
  };

  const randomizer = function (array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
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
    let processingPlayers;
    let checkForError = checkForImpossible(players);
    if (checkForError === "err1") {
      setModalText({
        modalH: "Sum of tiers are odd",
        modalP: "This team is an imposible team , please try a new team",
        modalBtn: "Try agian?",
      });
      setModalVisible(true);
      return false;
    } else if (checkForError === "err2") {
      setModalText({
        modalH: "These 2 players are not a match",
        modalP: "This team is an imposible team , please try a new team",
        modalBtn: "Try agian?",
      });
      setModalVisible(true);
      return false;
    } else if (checkForError === "err0") {
      setModalText({
        modalH: "Odd amount of players",
        modalP: "For system13 to randomize the team players needs to be even",
        modalBtn: "Try agian?",
      });
      setModalVisible(true);
      return false;
    } else if (checkForError === "err3") {
      setModalText({
        modalH: "Player dosen't exist!",
        modalP:
          "Seems like you mispelled or that player isnt registered in the database",
        modalBtn: "Try agian?",
      });
      setModalVisible(true);
      return false;
    } else if (checkForError === "err4") {
      setModalText({
        modalH: "Odd amount of tiers",
        modalP: "Apparently this team cant be randomized",
        modalBtn: "Try agian?",
      });
      setModalVisible(true);
      return false;
    }
    while (finishedEqulazing === false && timesEqualized <= 200) {
      processingPlayers = randomizer(players);
      finishedEqulazing = checkScore(processingPlayers);
      timesEqualized++;
    }
    console.info(
      `Found a perfect team with ${timesEqualized} ${
        timesEqualized === 1 ? "iteration" : "iterations"
      }.`
    );
    display(processingPlayers, finishedEqulazing);
  };

  const startSystem = (event) => {
    event.preventDefault();
    console.clear();
    boldEndl();
    const players = [
      playerInpRef1.current.value,
      playerInpRef2.current.value,
      playerInpRef3.current.value,
      playerInpRef4.current.value,
      playerInpRef5.current.value,
      playerInpRef6.current.value,
      playerInpRef7.current.value,
      playerInpRef8.current.value,
      playerInpRef9.current.value,
      playerInpRef10.current.value,
    ]
      .filter((player) => player !== "")
      .map((player) =>
        player.trim().replaceAll(" ", "").toUpperCase().slice(0, 3)
      );

    if (players.length === 0) {
      setModalText({
        modalH: "No players?",
        modalP: "System13 can't randomize a team without players",
        modalBtn: "Okay...",
      });
      setModalVisible(true);
    } else {
      main(players);
    }
    boldEndl();
  };

  const liftingModalVisible = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    boldEndl();
  }, []);

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
            ref={playerInpRef1}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 2"
            ref={playerInpRef2}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 3"
            ref={playerInpRef3}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 4"
            ref={playerInpRef4}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 5"
            ref={playerInpRef5}
          />
        </div>
        <div className="start__form--right">
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 6"
            ref={playerInpRef6}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 7"
            ref={playerInpRef7}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 8"
            ref={playerInpRef8}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 9"
            ref={playerInpRef9}
          />
          <input
            className="form__start--Player-input"
            type="text"
            name=""
            id=""
            placeholder="Player 10"
            ref={playerInpRef10}
          />
        </div>
        <button type="submit" className="submit__form--start dark-btn btn">
          Start the randomization!
        </button>
      </form>
      <Modal
        liftingModalCancle={liftingModalVisible}
        isVisible={modalVisible}
        modalBtn={modalText.modalBtn}
        modalH={modalText.modalH}
        modalP={modalText.modalP}
      />
    </div>
  );
};

export default Logic;
