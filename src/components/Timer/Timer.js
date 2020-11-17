import { useEffect, useState } from 'react';

import './Timer.css';

function Timer() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        setTime(time => time + 1)
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [start]);

  function handlePlay() {
    if (!start) {
      setStart(true);
    }
  }

  function handlePause() {
    setStart(false);
  }

  function handleStop() {
    setStart(false);
    setTime(0);
  }

  return (
    <div className="Timer">
      <div>{time}</div>
      <button
        className="Timer__button"
        type="button"
        onClick={handlePlay}
        disabled={start}
      >Play</button>
      <button
        className="Timer__button"
        type="button"
        onClick={handlePause}
        disabled={!start}
      >Pause</button>
      <button
        className="Timer__button"
        type="button"
        onClick={handleStop}
        disabled={!start}
      >Stop</button>
    </div>
  );
}

export default Timer;
