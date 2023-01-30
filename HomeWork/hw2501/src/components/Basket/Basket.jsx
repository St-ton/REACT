import React from 'react'
import { useState } from 'react';
import b from './Basket.module.css'
import ProductCard from '../ProductCard/ProductCard'

export default function Basket({ products }) 
{
  const [basket, setBasket] = useState(products);

  const updateBasket = (updatedProduct) => {
    const updatedBasket = basket.map((product) => {
      if (product.id === updatedProduct.id) {
        return updatedProduct;
      }
      return product;
    });
    setBasket(updatedBasket);
  };

  const handleRemove = (id) => {
    setBasket(basket.filter((product) => product.id !== id));
  };

  const totalCount = basket.reduce((acc, product) => acc + product.count, 0);
  const totalPrice = basket.reduce((acc, product) => acc + product.price * product.count, 0);

  return (
    <div className={b.card}>
      <h2>Корзина товаров</h2>
      {basket.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          count={product.count}
          updateBasket={updateBasket}
          handleRemove={handleRemove}
        />
      ))}
      <p className={b.total_count}>Total Count: {totalCount}</p>
      <p className={b.total_price}>Total Price: {totalPrice}</p>
    </div>
  );
};
