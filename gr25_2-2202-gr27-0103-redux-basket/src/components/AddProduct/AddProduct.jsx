import React from "react";
import { useDispatch } from "react-redux";
import "./AddProduct.css";

export default function AddProduct() {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const { title, price, discount } = event.target;
    if (title.value !== " " && title.price != 0) {
      dispatch({
        type: "ADDPROD",
        payload: {
          id: Date.now(),
          title: title.value,
          price: price.value,
          discount: discount.value,
        },
      });
      title.value = "";
      price.value = "";
      discount.value = "";
    } else {
      window.prompt("Веедите наименование и/или цену не равную 0");
    }
  };

  return (
    <div className="input-wrapper">
      <form onSubmit={onSubmit}>
        <input type="text" name="title" placeholder="наименование" required />
        <input type="number" name="price" placeholder="цена" required />
        <input type="number" name="discount" placeholder="скидка" required />
        <button>Добавить</button>
      </form>
    </div>
  );
}
