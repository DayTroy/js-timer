import Button from "./Button";

const TimerController = ({ sessionLength, breakLength, dispatch }) => {
  return (
    <div className="controller-wrapper">
      <div className="session-wrapper">
        <p>Session length</p>
        <p>{sessionLength} min</p>
        <Button
          value="-"
          onClick={() => dispatch({ type: "decremented_session" })}
        />
        <Button
          onClick={() => dispatch({ type: "incremented_session" })}
          value="+"
        />
      </div>
      <div className="break-wrapper">
        <p>Break length</p>
        <p>{breakLength} min</p>
        <Button
          value="-"
          onClick={() => dispatch({ type: "decremented_break" })}
        />
        <Button
          value="+"
          onClick={() => dispatch({ type: "incremented_break" })}
        />
      </div>
    </div>
  );
};

export default TimerController;
