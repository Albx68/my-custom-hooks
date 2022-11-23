import React from "react";
import useCycle from "../hooks/useCycle";
import "./eg1.css";
const Eg1 = () => {
  const emojiArr = ["🍑", "🍒", "🍌", "🍇", "🍋", "🍓", "🥑", "🍆"];
  const [cycle, setCycle] = useCycle(emojiArr);
  return (
    <div className="App">
      <div className="card" onClick={setCycle} key={Math.random()}>
        <div className="emote">{cycle}</div>
      </div>
    </div>
  );
};

export default Eg1;
