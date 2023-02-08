import React from 'react'
import BasketCalculation from '../BasketCalculation/BasketCalculation'
import BasketItem from '../BasketItem/BasketItem'
import s from './BasketContainer.module.css'

export default function BasketContainer({
  basket,
  increment,
  decrement,
  clearBasket,
  deleteFromBasket })
{
  
  return (
    <div className={s.container }>
      {
        basket.map(item =>
          <BasketItem
            key={item.id}
            {...item}
            increment={increment}
            decrement={decrement}
            deleteFromBasket ={deleteFromBasket}
          />          
        )        
    }
      <BasketCalculation
        basket={basket}
        clearBasket={clearBasket} />
    </div>
  )
} 