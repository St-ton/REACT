import React from 'react';
import BasketCalculation from '../BasketCalculation/BasketCalculation';
import BasketItem from '../BasketItem/BasketItem';
import s from './BasketContainer.module.css';

export default function BasketContainer({
  basket,
  increment,
  decrement,
  clearBasket,
  deleteFromBasket,
}) {
  const buy = () => window.confirm('Are You have Money?');

  return (
    <div className={s.container}>
      <h3>SHOPPING CART</h3>
      {basket.map(item => (
        <BasketItem
          key={item.id}
          {...item}
          increment={increment}
          decrement={decrement}
          deleteFromBasket={deleteFromBasket}
        />
      ))}
      <BasketCalculation basket={basket} clearBasket={clearBasket} />
      <button className={s.buy} onClick={() => buy()}>
        BUY
      </button>
    </div>
  );
}
