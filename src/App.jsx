import "./App.css";
import Button from "./components/Button";
import TimerController from "./components/TimerController";
import TimerDisplay from "./components/TimerDisplay";
import useTimer from "./hooks/useTimer";

const App = () => {
  const {
    sessionLength,
    breakLength,
    timeLeft,
    isRunning,
    isBreakTime,
    handleStart,
    handleStop,
    handleReset,
    dispatch,
    circleDasharray
  } = useTimer(25, 5);

  return (
    <div className="timer-wrapper">
      <h1>25 + 5 Clock</h1>
      <TimerDisplay timeLeft={timeLeft} isBreakTime={isBreakTime} circleDasharray={circleDasharray}/>
      <TimerController
        sessionLength={sessionLength}
        breakLength={breakLength}
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
          sessionLength={sessionLength}
          onClick={handleReset}
        />
      </div>
    </div>
  );
};

export default App;
