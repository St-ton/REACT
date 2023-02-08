import React from 'react'
import s from './BasketCalculation.module.css'

export default function BasketCalculation({ basket, clearBasket }){
  const totalSum = basket.reduce((acc,{count, price}) => acc + count * price, 0);
  const totalCount = basket.reduce((acc,{count}) => acc + count, 0);

  return (
    <div className={s.tlt_container}>
      <div>
        <p>Total Count: {totalCount}</p>
        <p>Total Summa: {totalSum}</p>
      </div>
      <div>
        <button className={s.btn_clear} onClick={() => clearBasket()}>Clear Basket</button>
        </div>
    </div>
  )
}
