import React from "react";
import { useDispatch } from "react-redux";
import "./Product.css";
import { deleteProductAction } from "../../store/reducer/productsReducer";
import { addBasketAction } from "../../store/reducer/basketReducer";

export default function Product({ id, title, price, discount }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <p>{title}</p>
      <p>{price}</p>
      <p>{discount}</p>
      <button
        className="red"
        // onClick={() => dispatch({ type: "DELPROD", payload: id })}
        onClick={() => dispatch(deleteProductAction(id))}
      >
        Удалить
      </button>
      <button
        className="green"
        // onClick={() => dispatch({ type: "BASKETADD", payload: id })}
        onClick={() => dispatch(addBasketAction(id))}
      >
        Купить
      </button>
    </div>
  );
}

// todo создать компонент Product который отображает название товара и его цену а так же содержит кнопку удаления продукта
