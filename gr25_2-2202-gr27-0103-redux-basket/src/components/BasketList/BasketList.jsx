import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../BasketItem/BasketItem";
import "./BasketList.css";

export default function BasketList() {
  const basket = useSelector((state) => state.basket);
  let dis = "basket-container-dis";
  if (basket.length !== 0) {
    dis = "basket-container ";
  }

  return (
    <>
      <div className={dis}>
        <h2>Basket</h2>
        {basket.map((item) => (
          <BasketItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
