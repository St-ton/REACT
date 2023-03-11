import React from "react";
import { useDispatch } from "react-redux";
import "./BasketItem.css";

import {
  decrBasketAction,
  incrBasketAction,
  delBasketAction,
} from "../../store/reducer/basketReducer";

export default function BasketItem({ id, title, price, count, discount }) {
  const dispatch = useDispatch();
  const discPrice = +(price - (price * discount) / 100).toFixed(2);

  return (
    <div className="item-container">
      <div className="id">Title: {title}</div>
      <div className="id">
        Price: {discPrice} * {count} = {+(discPrice * count).toFixed(2)}
      </div>
      <div className="btn">
        <button
          // onClick={() => dispatch({ type: "BASKET_DECREMENT", payload: id })}
          onClick={() => dispatch(decrBasketAction(id))}
        >
          -
        </button>

        <span className="count"> {count}</span>
        <button
          // onClick={() => dispatch({ type: "BASKET_INCREMENT", payload: id })}
          onClick={() => dispatch(incrBasketAction(id))}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="del"
          // onClick={() => dispatch({ type: "BASKETDEL", payload: id })}
          onClick={() => dispatch(delBasketAction(id))}
        >
          Del
        </button>
      </div>
    </div>
  );
}

//todo доработать basketItem таким образом, чтобы в карточке выводились наименоване, цена и кол-во  товара

//todo доработать basketItem таким образом, чтобы в карточке выводились наименоване, цена и кол-во товара TITLE: ведосипед PRICE: <цена со скидкой> X <кол-во> = <общая сумма по данному товару>
