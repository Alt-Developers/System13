import React from "react";

const PlayerInput = (props) => {
  return (
    <input
      className="form__start--Player-input"
      type="text"
      placeholder={props.placeholder}
      ref={props.ref}
    />
  );
};

export default PlayerInput;
