import Button from "./Button";
import plusIcon from "../assets/icons/plus.svg";
import minusIcon from "../assets/icons/minus.svg";
import "./TimerController.css";

const TimerController = ({
  sessionLength,
  breakLength,
  dispatch,
  isRunning,
}) => {
  return (
    <div className="controller-wrapper">
      <div className="session-wrapper">
        <p style={{ fontWeight: "900" }}>Session length</p>
        <p>{sessionLength} min</p>
        <Button
          value="-"
          imageSrc={minusIcon}
          onClick={() => dispatch({ type: "decremented_session" })}
          disabled={isRunning}
        />
        <Button
          value="+"
          imageSrc={plusIcon}
          onClick={() => dispatch({ type: "incremented_session" })}
          disabled={isRunning}
        />
      </div>
      <div className="break-wrapper">
        <p style={{ fontWeight: "900" }}>Break length</p>
        <p>{breakLength} min</p>
        <Button
          value="-"
          imageSrc={minusIcon}
          onClick={() => dispatch({ type: "decremented_break" })}
          disabled={isRunning}
        />
        <Button
          value="+"
          imageSrc={plusIcon}
          onClick={() => dispatch({ type: "incremented_break" })}
          disabled={isRunning}
        />
      </div>
    </div>
  );
};

export default TimerController;
