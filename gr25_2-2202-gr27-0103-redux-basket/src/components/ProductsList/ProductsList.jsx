import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import "./ProductsList.css";

export default function ProductsList() {
  const products = useSelector((state) => state.products);

  return (
    <div className="container">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

/* 

{products.map((product) => (
        <div className="product" key={product.id}>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.discount}</div>
        </div>
      ))} 
 </div>     
  */

// todo создать компонент ProductsList который содержит массив из продуктов (объекты со свойствами id, title, price, discount) названия продуктов должны выводиться в параграфах
