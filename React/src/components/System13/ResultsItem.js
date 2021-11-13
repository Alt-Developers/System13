import React from "react";

const ResultItem = (props) => {
  const teamClass = `${props.team === "atk" ? "attackers" : "defenders"}`;
  return (
    <div className={`${teamClass}__row row-doe`}>
      <div className={`${teamClass}__row--add`}>{props.playerName}</div>
      <div className={`${teamClass}__row--add`}>{props.playerNumber}</div>
    </div>
  );
};

export default ResultItem;
