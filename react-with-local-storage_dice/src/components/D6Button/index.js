import React from "react";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ onRoll, rolls }) {
  const currentRollValue = rolls.length > 0 ? rolls[0].value : null;

  return (
    <button className="d6-button" type="button" onClick={onRoll}>
      <D6 value={currentRollValue} />
    </button>
  );
}
