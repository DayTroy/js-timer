import { useReducer } from "react";
import Button from "./Button";

const reducer = (state, action) => {
  if (action.type === "incremented_session" && state.sessionLength < 60) {
    return { ...state, sessionLength: state.sessionLength + 1 };
  }
  if (action.type === "incremented_break" && state.breakLength < 60) {
    return { ...state, breakLength: state.breakLength + 1 };
  }
  if (action.type === "decremented_session" && state.sessionLength > 1) {
    return { ...state, sessionLength: state.sessionLength - 1 };
  }
  if (action.type === "decremented_break" && state.breakLength > 1) {
    return { ...state, breakLength: state.breakLength - 1 };
  } else return state;
};

const TimerController = () => {
  const [state, dispatch] = useReducer(reducer, {
    sessionLength: 25,
    breakLength: 5,
  });

  return (
    <div className="controller-wrapper">
      <div className="session-wrapper">
        <p>Session length</p>
        <p>{state.sessionLength}min</p>
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
        <p>{state.breakLength}min</p>
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
