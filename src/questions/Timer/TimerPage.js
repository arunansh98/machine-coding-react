import React, { useState, useEffect } from "react";

const TIME_LEFT = 30;

const TimerPage = () => {
  const [count, setCount] = useState(TIME_LEFT);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalId);
  }, []);

  const startTimer = () => {
    const id = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(id);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    setIntervalId(id);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setCount(TIME_LEFT);
    startTimer();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        {count > 0 ? <h1>{count} seconds left!</h1> : <h1>Take Off!</h1>}
        <button onClick={resetTimer} disabled={count === 0}>
          Reset Timer
        </button>
      </div>
    </div>
  );
};

export default TimerPage;
