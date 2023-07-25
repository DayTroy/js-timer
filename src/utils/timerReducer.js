import ACTIONS from "./ACTIONS";

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
export default reducer;