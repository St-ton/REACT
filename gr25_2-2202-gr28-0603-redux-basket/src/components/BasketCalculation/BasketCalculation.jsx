import React from "react";
import { useSelector } from "react-redux";
import "./BasketCalculation.css";

export default function BasketCalculation() {
  // const basket = useSelector((state) => state.basket);
  const { basket, products } = useSelector((state) => state);
  const basketDescr = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  const totalCount = basket.reduce((acc, { count }) => acc + count, 0);

  const totalSummWithDiscount = basketDescr.reduce(
    (acc, { count, price, discount }) =>
      acc + (price - (price * discount) / 100) * count,
    0
  );

  const totalDiscount = basketDescr.reduce(
    (acc, { count, price, discount }) =>
      acc + ((price * discount) / 100) * count,
    0
  );

  let dis = "total-container-dis";
  if (basket.length !== 0) {
    dis = "total-container ";
  }

  return (
    <div className={dis}>
      <p>Count: {totalCount}</p>
      <p>Summa: {totalSummWithDiscount.toFixed(2)}</p>
      <p>Discount: {totalDiscount.toFixed(2)}</p>
    </div>
  );
}

// todo добавить компонент BasketCalculation в котором выводится общее кол-во товаров в корзине

//todo найти и вывести общую сумму заказа

//todo вывести общую сумму скидки
