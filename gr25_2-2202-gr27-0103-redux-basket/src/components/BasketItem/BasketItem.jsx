import React from "react";
import { useDispatch } from "react-redux";
import "./BasketItem.css";

export default function BasketItem({ id, count }) {
  const dispatch = useDispatch();

  return (
    <div className="item-container">
      <span className="id">id: {id}</span>
      <button
        onClick={() => dispatch({ type: "BASKET_DECREMENT", payload: id })}
      >
        -
      </button>
      <span className="count"> {count}</span>
      <button
        onClick={() => dispatch({ type: "BASKET_INCREMENT", payload: id })}
      >
        +
      </button>
    </div>
  );
}
