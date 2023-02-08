import React from 'react'
import s from './Product.module.css'

export default function Product({ id, title, description, price, image, deleteProduct, addToBasket })
{
  
  return (

    <div className={s.card}>
      {/* <div className={s.img_container}></div> */}
      <img src={image} alt={title} />
      <p className={s.title}>{title}</p>
      <p className={s.descr}>{description}</p>
      <p className={s.price}>$ {price}.00</p>
      <div className={s.container_button }>
      <button className={s.add_button } onClick={() => addToBasket(id)}>Add Basket</button>
      <button className={s.del_button } onClick={() => deleteProduct(id)}>Delete</button>
      </div>        
    </div>
  )
}
