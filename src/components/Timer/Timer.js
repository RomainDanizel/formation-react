import { useEffect, useState, useReducer } from 'react';

import './Timer.css';

function reducer(state, action) {
  switch(action.type) {
    case 'inc':
      return {
        ...state,
        time: state.time + state.step,
      };

    case 'reset':
      return {
        ...state,
        time: 0
      };

    case 'step':
      return {
        ...state,
        step: action.step
      };

    default:
      return state;
  }
}

function Timer() {
  const [start, setStart] = useState(false);
  const [state, dispatch] = useReducer(reducer, { time: 0, step: 1 });

  useEffect(() => {
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        dispatch({ type: 'inc' });
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
    dispatch({ type: 'reset' });
  }

  function handleChange(event) {
    dispatch({ type: 'step', step: Number(event.target.value) });
  }

  return (
    <div className="Timer">
      <input
        className="Timer__input"
        value={state.step}
        onChange={handleChange}
        type="number"
        min="1"
      />
      <div>{state.time}</div>
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
