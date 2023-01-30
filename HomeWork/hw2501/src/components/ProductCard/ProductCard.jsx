import React from 'react'
import p from './ProductСard.module.css'

export default function ProductCard({ id, title, price, count, updateBasket, handleRemove }) 
{
  const handleIncrease = () => {
    updateBasket({ id, title, price, count: count + 1 });
  };

  const handleDecrease = () => {
    if (count > 1)
    {
      updateBasket({ id, title, price, count: count - 1 });
    } else { handleRemove(id) };
  };

  return (
    <div className={p.card}>
      <h3 className={p.titel}>{title}</h3>
      <p className={p.price}>Price: {price}</p>
      <p className={p.count}>Count: {count}</p>
      <button className={p.button1} onClick={handleIncrease}>+</button>
      <button className={p.button1} onClick={handleDecrease}>-</button>
      <button className={p.button2} onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
};

