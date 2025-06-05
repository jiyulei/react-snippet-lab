import { useRef, useEffect, useState } from "react";

export const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startTime = useRef(0);
  const timeRef = useRef(null);

  useEffect(() => {
    if(isRunning) {
        timeRef.current = setInterval(() => {
            setElapsed(Date.now() - startTime.current)
        }, 10)
    }
  }, [isRunning])

  const handleStart = () => {
    setIsRunning(true);
    startTime.current = Date.now() - elapsed;
  }

  const handleStop = () => {
      clearInterval(timeRef.current);
      setIsRunning(false);
  }

  const handleReset = () => {
    setIsRunning(false);
    setElapsed(0);
  }

  return (
    <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      {elapsed / 1000}
    </div>
  );
};
