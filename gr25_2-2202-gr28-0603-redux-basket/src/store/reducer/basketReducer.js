const defaultState = [];
const BASKETADD = "BASKETADD";
const BASKETDEL = "BASKETDEL";
const BASKET_INCREMENT = "BASKET_INCREMENT";
const BASKET_DECREMENT = "BASKET_DECREMENT";

export const addBasketAction = (payload) => ({ type: BASKETADD, payload });
export const delBasketAction = (payload) => ({ type: BASKETDEL, payload });
export const incrBasketAction = (payload) => ({
  type: BASKET_INCREMENT,
  payload,
});

export const decrBasketAction = (payload) => ({
  type: BASKET_DECREMENT,
  payload,
});

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
  } else if (action.type === BASKETDEL) {
    return state.filter(({ id }) => id !== action.payload);
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

// todo создать константы и action creators для basketReducer
