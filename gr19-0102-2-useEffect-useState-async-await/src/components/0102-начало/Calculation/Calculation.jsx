import React from 'react'

export default function Calculation(basket) {
  
  const totalsum = basket.reduce((acc, { count, price }) => acc + count * price, 0);
  const totalcount = basket.reduce((acc, { count }) => acc + count, 0);


  return (
    <div>
      <p>Total Sum:{totalsum}</p>  
      <p>Total Count:{totalcount}</p>  
        </div>
  )
}

 