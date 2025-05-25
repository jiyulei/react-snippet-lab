import { useState } from "react";
import "./styles.css";

export function DiceRoller() {
  const [dices, setDices] = useState(6);
  const [rollResult, setRollResult] = useState([]);

  const handleChange = (value) => {
    if (value > 12 || value < 0) return;
    setDices(value);
  };

  //随机生成骰子结果
  const handleClick = () => {
    const newRollResult = Array.from({ length: dices }).map(
      () => Math.floor(Math.random() * 6) + 1
    );

    setRollResult(newRollResult);
  };

  return (
    <div className="wrapper">
      <div className="input">
        <input
          type="number"
          value={dices}
          max={12}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button onClick={handleClick}>Roll</button>
      </div>

      <div className="container">
        {rollResult.map((value, index) => (
          <Dice key={index} value={value} />
        ))}
      </div>

    </div>
  );
}

function Dice({ value }) {
  return (
    <div className="dice">
      {diceMap[value].map((item, index) => (
        <div key={index} className={item}></div>
      ))}
    </div>
  );
}

// 骰子结果的css映射
const diceMap = {
  1: ["center"],
  2: ["top-left", "bottom-right"],
  3: ["top-left", "center", "bottom-right"],
  4: ["top-left", "top-right", "bottom-right", "bottom-left"],
  5: ["top-left", "top-right", "bottom-right", "bottom-left", "center"],
  6: [
    "top-left",
    "top-right",
    "bottom-right",
    "bottom-left",
    "mid-right",
    "mid-left",
  ],
};
