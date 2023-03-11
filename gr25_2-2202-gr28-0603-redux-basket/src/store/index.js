import { combineReducers, createStore } from "redux";
import { productsReducer } from "./reducer/productsReducer";
import { basketReducer } from "./reducer/basketReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
});

// export const store = createStore(productsReducer);
export const store = createStore(rootReducer);
