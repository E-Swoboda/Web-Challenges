import React from "react";
import "./styles.css";

const Smiley = ({ isHappy }) => {
  return (
    <div>
      {isHappy ? (
        <span role="img" aria-label="Happy">
          🙂
        </span>
      ) : (
        <span role="img" aria-label="Sad">
          ☹️
        </span>
      )}
    </div>
  );
};
export default function App() {
  const isHappy = true;
  return (
    <div>
      <Smiley isHappy={isHappy} />
    </div>
  );
}
