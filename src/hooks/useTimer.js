import { useState, useEffect, useReducer } from "react";
import transitionSound from "../assets/audio/timer-sound.mp3";
import reducer from "../utils/timerReducer";

const useTimer = (defaultSession, defaultBreak) => {
  const [state, dispatch] = useReducer(reducer, {
    sessionLength: defaultSession,
    breakLength: defaultBreak,
  });

  const TIME_LIMIT = state.sessionLength * 60;
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [playTransitionSound, setPlayTransitionSound] = useState(false);
  const [isInTransition, setIsInTransition] = useState(false);
  const [circleDasharray, setCircleDasharray] = useState("283 283");

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
    isBreakTime,
    playTransitionSound,
    isInTransition,
    state.sessionLength,
    state.breakLength,
  ]);

  useEffect(() => {
    setTimeLeft(TIME_LIMIT);
  }, [state.sessionLength]);

  useEffect(() => {
    const calculateTimeFraction = () => {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    };

    const FULL_DASH_ARRAY = 283;
    const circleDasharrayValue = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
    setCircleDasharray(circleDasharrayValue);
  }, [timeLeft]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeLeft(TIME_LIMIT);
    setIsRunning(false);
    setIsBreakTime(false);
    dispatch({
      type: "reset",
      payload: { defaultSession: 25, defaultBreak: 5 },
    });
  };

  return {
    timeLeft,
    isRunning,
    isBreakTime,
    playTransitionSound,
    isInTransition,
    handleStart,
    handleStop,
    handleReset,
    dispatch,
    sessionLength: state.sessionLength,
    breakLength: state.breakLength,
    circleDasharray,
  };
};

export default useTimer;
