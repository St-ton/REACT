import React from 'react'
import s from './BasketItem.module.css'

export default function BasketItem({
  id,
  title,
  price,
  count,
  increment,
  decrement, 
  deleteFromBasket
})
{
 
  return (
    <div className={s.card}>
      <p className={s.title}>{title}</p>
      <p className={s.price}><span>Цена: </span>{price} $</p>
      <div className={s.btn_container}>
        <button className={s.btn}onClick={() => decrement(id)}> - </button>
        <p className={s.count}>{count}</p>
        <button className={s.btn} onClick={() => increment(id)} > + </button>
        <button onClick={() => deleteFromBasket(id)}>x</button>
      </div>
    </div>
  )
}
