export const SUM = "SUM";

export const sumAction = (payload) => {
  return {
    type: SUM,
    payload: +payload,
  };
};
export const MINUS = "MINUS";

/* 
action
{
  type: 'INCREMENT',
  payload:100
}
*/

export const clickerReducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    // return state > 0 ? state - 1 : state;
    return state - 1;
  } else if (action.type === "CLEAR") {
    return 0;
  } else if (action.type === SUM) {
    return state + action.payload;
  } else if (action.type === MINUS) {
    // return state > 0 ? state - action.payload : state;
    return state - action.payload;
  } else {
    return state;
  }
};
