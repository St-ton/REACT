import React from 'react'
import addproduct from './AddProduct.module.css';


export default function AddProduct({createProduct}){
  
   const onSubmit = (event) =>{
    event.preventDefault();
     const { title, price } = event.target;
     if (title.value == '' || price.value == '') {
       alert('Заполните поля формы');
     } else if(title.value.length < 4)
     {
       alert('Слишком короткое название');
     }
     else if(price.value < 0 || price.value == 0)
     {
       alert('Цена не может быть меньше или равно нулю');
     }
     else
     {
       createProduct(title.value, +price.value);
       title.value = '';
       price.value = '';
     }
   } 

  return (
    <form onSubmit={onSubmit}>
      <input className={addproduct.input1} type="text" placeholder='Название' name='title'/>
      <input type="number" placeholder='Цена' name='price'/>
      <button className={addproduct.button}>Добавить</button>      
    </form>
  )
}
