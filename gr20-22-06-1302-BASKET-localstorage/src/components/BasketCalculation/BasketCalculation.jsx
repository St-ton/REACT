import React from 'react'
import s from './BasketCalculation.module.css'

export default function BasketCalculation({ basket, clearBasket }){
  const totalSum = basket.reduce((acc,{count, price}) => acc + count * price, 0);
  const totalCount = basket.reduce((acc,{count}) => acc + count, 0);

  return (
    <div className={s.container}>      
    <div className={s.title}><span>Total Count: </span> {totalCount}</div>  
    <div className={s.summa}><span>Total Summa: $ </span> {totalSum}</div>  
    <button className={s.btn_clear} onClick={() => clearBasket()}>Clear</button>
    </div>
  )
}
