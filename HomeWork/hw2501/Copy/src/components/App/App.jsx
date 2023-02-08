import React from 'react'
import a from './App.css'
import Basket from '../Basket/Basket'

export default function App() {
  const products = [
    { id: 1, title: "Product 1", price: 10, count: 5 },
    { id: 2, title: "Product 2", price: 20, count: 4 },
    { id: 3, title: "Product 3", price: 30, count: 3 },
    { id: 4, title: "Product 4", price: 40, count: 2 },
  ];

  return (
    <div className={a.container}>
      <Basket products={products} />
    </div>
  );
};

