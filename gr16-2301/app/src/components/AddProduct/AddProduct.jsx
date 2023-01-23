import React from 'react'
import addproduct from './AddProduct.module.css';


export default function AddProduct(){
  
   const onSubmit = (event) =>{
    event.preventDefault();
    const { title, price } = event.target; 
    createProduct(title.value, price.value);
    title.value = '';
    price.value = '';
  } 

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='Название' name='title'/>
      <input type="number" placeholder='Цена' name='price'/>
      <button className={addproduct.button}>Добавить</button>
    </form>
  )
}
