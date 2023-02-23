import { createStore } from "redux";
import { productsReducer } from "./reducer/productsReducer";

export const store = createStore(productsReducer);
