import React from 'react'
import product from './Product.module.css';

export default function Product({ id, title, price, deleteProduct, changePrice })
{
  return (
    <div className={product.card}>
      
      <p className={price != 0 ? product.title : product.title_un}><span>Название: </span> {title.toUpperCase()}</p>
      
      <p className={[product.price, price > 20000 ? product.price_hight : ''].join(' ')}><span>Цена: </span>{price !== 0 ? price : 'Бесплатно'}
      
        <button className={[product.button, product.b_green].join(' ')} onClick={() => changePrice(id, +1000)}>+1000</button>
      
        {price !== 0
          ? <button className={[product.button, product.b_red].join(' ')} onClick={() => changePrice(id, -1000)}>-1000</button> : ''
        }
      </p>

      {price !== 0
        ? <button className={[product.button, product.b_del].join(' ')} onClick={() => deleteProduct(id)}>Удалить</button>
        : ''
      }

    </div>    
    
  )
}
