import "./App.css";
import { useState, useEffect, useReducer } from "react";
import Button from "./components/Button";
import TimerController from "./components/TimerController";
import TimerDisplay from "./components/TimerDisplay";
import transitionSound from "./assets/audio/timer-sound.mp3";

const ACTIONS = {
  INCREMENTED_SESSION: "incremented_session",
  INCREMENTED_BREAK: "incremented_break",
  DECREMENTED_SESSION: "decremented_session",
  DECREMENTED_BREAK: "decremented_break",
  RESET: "reset",
  START: "start",
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.INCREMENTED_SESSION && state.sessionLength < 60) {
    return { ...state, sessionLength: state.sessionLength + 1 };
  }
  if (action.type === ACTIONS.INCREMENTED_BREAK && state.breakLength < 60) {
    return { ...state, breakLength: state.breakLength + 1 };
  }
  if (action.type === ACTIONS.DECREMENTED_SESSION && state.sessionLength > 1) {
    return { ...state, sessionLength: state.sessionLength - 1 };
  }
  if (action.type === ACTIONS.DECREMENTED_BREAK && state.breakLength > 1) {
    return { ...state, breakLength: state.breakLength - 1 };
  }
  if (action.type === ACTIONS.RESET) {
    return {
      sessionLength: action.payload.defaultSession,
      breakLength: action.payload.defaultBreak,
    };
  } else return state;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    sessionLength: 25,
    breakLength: 5,
  });

  const [timeLeft, setTimeLeft] = useState(state.sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [playTransitionSound, setPlayTransitionSound] = useState(false);
  const [isInTransition, setIsInTransition] = useState(false);

  useEffect(() => {
    let timer;
  
    if (isRunning && timeLeft > 0 && !isInTransition) {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 100);
    } else if (timeLeft === 0 && !isInTransition) {
      if (!isBreakTime && state.breakLength > 0) {
        setIsBreakTime(true);
        setTimeLeft(state.breakLength * 60);
        setIsInTransition(true);
        setPlayTransitionSound(true);
      } else {
        setIsBreakTime(false);
        setTimeLeft(state.sessionLength * 60);
        setIsInTransition(true);
        setPlayTransitionSound(true);
      }
    }
  
    if (playTransitionSound) {
      const audio = new Audio(transitionSound);
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        setPlayTransitionSound(false);
        setIsInTransition(false);
      }, 3000);
    }
  
    return () => {
      clearInterval(timer);
    };
  }, [
    isRunning,
    timeLeft,
    state.sessionLength,
    state.breakLength,
    isBreakTime,
    playTransitionSound,
    isInTransition,
  ]);

  useEffect(() => {
    setTimeLeft(state.sessionLength * 60);
  }, [state.sessionLength]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeLeft(state.sessionLength * 60);
    setIsRunning(false);
    setIsBreakTime(false);
    dispatch({
      type: "reset",
      payload: { defaultSession: 25, defaultBreak: 5 },
    });
  };

  return (
    <div className="timer-wrapper">
      <h1>25 + 5 Clock</h1>
      <TimerDisplay sessionLength={timeLeft} isBreakTime={isBreakTime} />
      <TimerController
        sessionLength={state.sessionLength}
        breakLength={state.breakLength}
        dispatch={dispatch}
        isRunning={isRunning}
      />
      <div className="timer-buttons">
        <Button
          value={isRunning ? "Stop" : "Start"}
          onClick={isRunning ? handleStop : handleStart}
        />
        <Button
          value="Reset"
          sessionLength={state.sessionLength}
          onClick={handleReset}
        />
      </div>
    </div>
  );
};

export default App;
