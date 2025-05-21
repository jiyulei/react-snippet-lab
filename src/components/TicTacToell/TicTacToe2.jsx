import "./styles.css";
import { useState } from "react";

export const TicTacToe2 = ({ size = 3 }) => {
  const initialRecord = Array(size * size).fill(null);

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [playerRecord, setPlayerRecord] = useState(initialRecord);
  const [winner, setWinner] = useState(null);

  const winMap = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const determineWinner = (record) => {
    winMap.forEach((map) => {
      const [x, y, z] = map;
      if (
        record[x] !== null &&
        record[x] === record[y] &&
        record[y] === record[z]
      ) {
        setWinner(record[x]);
      }
    });
  };

  const handleClick = (index) => {
    if (playerRecord[index] || winner) return;
    const updatedRecord = [...playerRecord];

    updatedRecord[index] = currentPlayer;

    determineWinner(updatedRecord);
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    setPlayerRecord(updatedRecord);
  };

  const handleReset = () => {
    setPlayerRecord(initialRecord);
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div>
      <div>
        {winner ? `Player ${winner} win!` : `Player ${currentPlayer}'s turn`}
      </div>
      <div
        className="board"
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          width: `${size * 100}px`,
          height: `${size * 100}px`,
        }}
      >
        {initialRecord.map((_, index) => (
          <Cell
            key={index}
            onClick={() => handleClick(index)}
            index={index}
            player={playerRecord[index]}
          />
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

function Cell({ onClick, player }) {
  return (
    <div className="cell" onClick={onClick}>
      <span className="player">{player}</span>
    </div>
  );
}
