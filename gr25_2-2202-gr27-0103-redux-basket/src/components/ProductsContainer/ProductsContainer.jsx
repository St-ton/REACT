import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import ProductsList from "../ProductsList/ProductsList";
import "./ProductsContainer.css";

export default function ProductsContainer() {
  return (
    <div className="products-wrapper">
      <AddProduct />
      <ProductsList />
    </div>
  );
}
