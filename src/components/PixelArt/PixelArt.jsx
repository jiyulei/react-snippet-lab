import "./styles.css";

import { useState } from "react";

const COLORS = {
  white: "#fff",
  gray: "#e9ecef",
  black: "#000",
  red: "#cc0001",
  orange: "#fb940b",
  yellow: "#ffff01",
  green: "#01cc00",
  teal: "#38d9a9",
  blue: "#228be6",
  purple: "#7950f2",
  beige: "#ff8787",
};

export const PixelArt = () => {
  const [button, setButton] = useState("draw");
  const [currentColor, setCurrentColor] = useState("#fff");
  // 创建一个255个元素的数组，每个元素初始为null,代表没有颜色
  const [grid, setGrid] = useState(Array(255).fill(null));

  const handleColorSelect = (hex) => {
    setCurrentColor(hex);
  };

  const handleDrawOrErase = (index) => {
    const newGrid = [...grid];
    if (button === "draw") {
      newGrid[index] = currentColor;
    } else {
      newGrid[index] = null;
    }

    setGrid(newGrid);
  };

  return (
    <div className="wrapper">
      <div className="canva">
        {grid.map((el, index) => {
          const row = Math.floor(index / 15);
          const column = index % 15;
          // 通过行和列的奇偶性来决定颜色
          const isWhite = (row + column) % 2 ? "white" : "gray";
          return (
            <div
              className="cell"
              key={index}
              style={{ backgroundColor: `${grid[index] || isWhite}` }}
              onClick={() => handleDrawOrErase(index)}
            ></div>
          );
        })}
      </div>
      <div className="drawControls">
        <div className="buttons">
          <button
            className={`colorButton ${button === "draw" ? "selected" : ""}`}
            onClick={() => setButton("draw")}
          >
            Draw
          </button>

          <button
            className={`colorButton ${button === "erase" ? "selected" : ""}`}
            onClick={() => setButton("erase")}
          >
            Erase
          </button>
        </div>
        <div className="colorsPanel">
          {Object.values(COLORS).map((hex) => (
            <div
              key={hex}
              className="colorsButton"
              style={{
                backgroundColor: hex,
                border: `${hex === currentColor ? "3px solid black" : ""}`,
              }}
              onClick={() => handleColorSelect(hex)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
