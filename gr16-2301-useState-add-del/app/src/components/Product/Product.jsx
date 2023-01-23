import React from 'react'
import product from './Product.module.css';

export default function Product({ id, title, price, deleteProduct })
{
   
  return (
     <div className={product.card}>
     <p className={product.id}><span>Артикул: </span>{id}</p>      
      <p className={product.title}><span>Название: </span> { title.toUpperCase() }</p>      
      <p className={product.price}><span>Цена: </span>{price} </p>  
      <button className={product.button} onClick={() => deleteProduct(id)}>Удалить</button>
      </div>    
  )
}
