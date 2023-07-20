const TimerDisplay = ({ sessionLength }) => {
  return (
    <div className="timer-display">
      <div className="outer">
        <div className="inner">
          <span id="time-label">Time left:</span>
          <span id="time-left">{sessionLength}</span>
        </div>
      </div>
    </div>
  );
};

export default TimerDisplay;
