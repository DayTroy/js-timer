import React from "react";
import formatTime from "../utils/formatTime";

const TimerDisplay = ({ timeLeft, isBreakTime, circleDasharray }) => {
  return (
    <div className="base-timer">
      <svg
        className="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
          <path
            id="base-timer-path-remaining"
            strokeDasharray={circleDasharray}
            className="base-timer__path-remaining ${remainingPathColor}"
            d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
          ></path>
        </g>
      </svg>
      <div className="base-timer-label">
        <span className="time__left">{formatTime(timeLeft)}</span>
        <span className="time__type">{isBreakTime ? "Break" : "Session"}</span>
      </div>
    </div>
  );
};

export default TimerDisplay;
