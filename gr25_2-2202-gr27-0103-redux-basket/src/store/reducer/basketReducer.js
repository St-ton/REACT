const defaultState = [];
const BASKETADD = "BASKETADD";
const BASKET_INCREMENT = "BASKET_INCREMENT";
const BASKET_DECREMENT = "BASKET_DECREMENT";

const getById = (state, find_id) => state.find(({ id }) => id === find_id);

export const basketReducer = (state = defaultState, action) => {
  if (action.type === BASKETADD || action.type === BASKET_INCREMENT) {
    const target = getById(state, action.payload);
    if (target === undefined) {
      return [...state, { id: action.payload, count: 1 }];
    } else {
      target.count++;
      return [...state];
    }
  } else if (action.type === BASKET_DECREMENT) {
    const target = getById(state, action.payload);
    target.count--;
    if (target.count === 0) {
      state = state.filter((item) => item !== target);
    }
    return [...state];
  }
  return state;
};

// export const basketReducer = (state = defaultState, action) => {
//   if (action.type === BASKETADD) {
//     const target = state.find(({ id }) => id === action.payload);
//     if (target === undefined) {
//       return [...state, { id: action.payload, count: 1 }];
//     } else {
//       target.count++;
//       return [...state];
//     }
//   } else if (action.type === BASKET_INCREMENT) {
//     const target = state.find(({ id }) => id === action.payload);
//     target.count++;
//     return [...state];
//   } else if (action.type === BASKET_DECREMENT) {
//     const target = state.find(({ id }) => id === action.payload);
//     target.count--;
//     return [...state];
//   }
//   return state;
// };
