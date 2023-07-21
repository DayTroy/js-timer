const TimerDisplay = ({ sessionLength, isBreakTime }) => {
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="timer-display">
      <div className="outer">
        <div className="inner">
        <span id="time-label">
            {isBreakTime ? "Break" : "Session"}:
          </span>
          <span id="time-left">{formatTime(sessionLength)}</span>
        </div>
      </div>
    </div>
  );
};

export default TimerDisplay;
