import { useState, useEffect } from "react";
import "./styles.css";

// red: 3000 yellow:1000 green:2000
const signals = {
  red: { color: "red", duration: "3000", next: "green" },
  green: { color: "green", duration: "2000", next: "yellow" },
  yellow: { color: "yellow", duration: "500", next: "red" },
};

export const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState(signals.red);

  useEffect(() => {
    const { duration, next } = currentLight;

    const timeID = setTimeout(() => {
      setCurrentLight(signals[next]);
    }, duration);

    return () => clearTimeout(timeID);
  }, [currentLight]);

  return (
    <div className="trafficLight">
      <div
        className={`redLight ${
          currentLight.color === "red" ? "redLightOn" : ""
        }`}
      ></div>
      <div
        className={`yellowLight ${
          currentLight.color === "yellow" ? "yellowLightOn" : ""
        }`}
      ></div>
      <div
        className={`greenLight ${
          currentLight.color === "green" ? "greenLightOn" : ""
        }`}
      ></div>
    </div>
  );
};
