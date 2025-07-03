import { useEffect, useState } from "react";
import "./styles.css";

export function ProgressBar() {
  const [bars, setBars] = useState(0);
  const [filledBars, setFilledBars] = useState(0);

  const handleComplete = () => {
    setFilledBars((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={() => setBars(bars + 1)}>Add</button>
      <div className="bars">
        {Array.from({ length: bars }).map((_, index) => (
          <Bar
            key={index}
            shouldUpdate={index > filledBars}
            onComplete={handleComplete}
          />
        ))}
      </div>
      {filledBars}
    </div>
  );
}

function Bar({ onComplete, shouldUpdate }) {
  const [transitionStart, setTransitionStart] = useState(false);

  useEffect(() => {
    if (!shouldUpdate) {
      setTransitionStart(true);
    }
  }, [shouldUpdate]);

  return (
    <div className="outside">
      <div
        className={`inside ${transitionStart ? "barfilled" : ""}`}
        onTransitionEnd={onComplete}
      ></div>
    </div>
  );
}
