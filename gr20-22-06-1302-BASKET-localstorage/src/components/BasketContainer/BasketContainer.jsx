import React from 'react'
import BasketCalculation from '../BasketCalculation/BasketCalculation'
import BasketItem from '../BasketItem/BasketItem'
import s from './BasketContainer.module.css'

export default function BasketContainer({
  basket,
  increment,
  decrement,
  clearBasket,
  deleteFromBasket,
  })
{
  let classBasket = s.container;  
  if (basket.length === 0) {
     classBasket = s.disabled;    
   }
  const buy = () => alert('Are You have Money?');

    return (
      <div className={ classBasket }>     
      <h3>SHOPPING CART</h3>
      {
        basket.map(item =>
          <BasketItem
            key={item.id}
            {...item}
            increment={increment}
            decrement={decrement}
            deleteFromBasket={deleteFromBasket}            
          />          
        )        
    }
      <BasketCalculation
        basket={basket}
        clearBasket={clearBasket} />
       <button className={s.buy} onClick={() => buy()}>BUY</button>
    </div>
  )
} 