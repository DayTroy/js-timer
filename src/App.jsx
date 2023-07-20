import "./App.css";
import { useReducer } from "react";
import Button from "./components/Button";
import TimerController from "./components/TimerController";
import TimerDisplay from "./components/TimerDisplay";

const ACTIONS = {
  INCREMENTED_SESSION: "incremented_session",
  INCREMENTED_BREAK: "incremented_break",
  DECREMENTED_SESSION: "decremented_session",
  DECREMENTED_BREAK: "decremented_break",
  RESET: "reset",
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

  return (
    <div className="timer-wrapper">
      <h1>25 + 5 Clock</h1>
      <TimerDisplay sessionLength={state.sessionLength} />
      <TimerController
        sessionLength={state.sessionLength}
        breakLength={state.breakLength}
        dispatch={dispatch}
      />
      <div className="timer-buttons">
        <Button value="Start" />
        <Button
          value="Reset"
          sessionLength={state.sessionLength}
          onClick={() =>
            dispatch({
              type: "reset",
              payload: { defaultSession: 25, defaultBreak: 5 },
            })
          }
        />
      </div>
    </div>
  );
};

export default App;
