import React from 'react'
import s from './Basket.module.css'
export default function BasketItem({id, title, price, count, increment, decrement}) {
  return (
    <div className={s.card}>
      <p>{title }</p>
      <p>{price }</p>
      <p>{count}</p>
      <div>
        <button onClick={() => { increment }}>+</button>
        <button onClick={() => { decrement }}>-</button>
</div>
    </div>
  )
}
