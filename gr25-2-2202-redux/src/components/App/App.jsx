import React from "react";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import "./App.css";

export default function App() {
  return (
    <div>
      <ProductsContainer />
    </div>
  );
}

// todo реализовать компонент ProductsContainer реализовать компонент AddProduct, который будет содержать в себе форму в форме поля title, price, discount при отправке формы данные из нее должны выводиться в консоль

// todo создать компонент ProductsList который содержит массив из продуктов (объекты со свойствами id, title, price, discount) названия продуктов должны выводиться в параграфах

// todo подключить редакс в компоненте AddProduct должен вызываться reducer с соответствующим type в payload необходимо передать объект со структурой :  {id: 1, title: '1велосипед', price: 17000, discount: 25} в ProductsList получать стейт через useSelector и отображать параграфы

// todo создать компонент Product который отображает название товара и его цену а так же содержит кнопку удаления продукта
