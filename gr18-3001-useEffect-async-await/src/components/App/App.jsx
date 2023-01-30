import { useEffect, useState } from 'react';
import app from './App.module.css'
import Product from '../Product/Product';
import AddProduct from '../AddProduct/AddProduct';

export default function App(){

  // useEffect(() =>{
  //   fetch('https://fakestoreapi.com/products')
  //     .then(resp => resp.json())
  //     .then(data =>{
  //       const newArr = data.map(({ id, title, price }) => ({
  //         id: id,
  //         title: title,
  //         price: price
  //       }));
  //       setProducts(newArr);
  //     });
  // }, []);


  // создаем конструкцию с телом функции и ее вызов через () -
  //  (....тело функции....)()  
   useEffect(() =>{
   (async () =>{
     const resp = await fetch('https://fakestoreapi.com/products');
     const data = await resp.json();
     const newArr = data.map(({ id, title, price }) => ({ id, title, price }));
     setProducts(newArr);
   })();
  }, []);
  
  const [products, setProducts] = useState([]);
  
  const deleteProduct = async (delId) =>  {
    const resp = await fetch(`https://fakestoreapi.com/products/${delId}`, {
      method: "DELETE"
    })
    console.log(products);
    const { id } = await resp.json();
    const newProducts = products.filter(product => product.id !== id)
    setProducts(newProducts);    
    console.log(newProducts);
  };

  const createProduct = async (title, price) =>{
    price = +price.toFixed(2);
    const resp = await fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify({ title, price })
    });
    const { id } = await resp.json();
    const newProducts = [...products, { id, title, price }]
    setProducts(newProducts);  
    // console.log(newProducts);
      };

    //* доработать процесс добавления нового продукта по следующей схеме
    // 1) fetch запрос
    // 2) из полученных данных забрать id нового продукта
    // 3) создать новый объект продукта и добьавить его в state products

 const changePrice = (changeId, value) => {
   
   const target = products.find(({ id }) => id === changeId);
   if (target.price + value < 0)
   {
     target.price = 0;
     } else{
     target.price += value         
   }
   target.price = +target.price.toFixed(2);
   setProducts([...products]);
  }
    return(
    <div>
      <AddProduct createProduct={createProduct} />
      <div>
      {                
        products.map(product =>
          <Product
            key={product.id}
            {...product}
            deleteProduct={deleteProduct} 
            changePrice={changePrice}
          />)                
      }
    </div>    
    </div> 
  );
}

// export default App;
