import React from "react";
import { useSelector } from "react-redux";
// import BasketCalculation from "../BasketCalculation/BasketCalculation";
import BasketItem from "../BasketItem/BasketItem";
import "./BasketList.css";

export default function BasketList() {
  const { basket, products } = useSelector((state) => state);

  const basketDescr = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  //todo сформировать на основе basket и products массив basketDescr который содержит объекты со свойствами id, title, price, discount, count

  let dis = "basket-container-dis";
  if (basket.length !== 0) {
    dis = "basket-container ";
  }

  return (
    <>
      <div className={dis}>
        <h2>Basket</h2>
        {basketDescr.map((item) => (
          <BasketItem key={item.id} {...item} />
        ))}
        {/* <BasketCalculation /> */}
      </div>
    </>
  );
}
