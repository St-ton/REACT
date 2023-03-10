import React from "react";
// import BasketList from "../BasketList/BasketList";
// import ProductsContainer from "../ProductsContainer/ProductsContainer";
// import BasketCalculation from "../BasketCalculation/BasketCalculation";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AddProductPage } from "../../pages/AddProductPage/AddProductPage";
import { BasketPage } from "../../pages/BasketPage/BasketPage";
import { ProductsPage } from "../../pages/ProductsPage/ProductsPage";
import { AboutPage } from "../../pages/AboutPage/AboutPage";

import Header from "../Nav/Header";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { TestPage } from "../../pages/TestPage/TestPage";

export default function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div className="main">
        <Routes>
          {/* <Route element={<AboutPage />} path="/:userName" /> */}
          <Route element={<AboutPage />} path="/" />
          <Route element={<AddProductPage />} path="/addproducts" />
          <Route element={<ProductsPage />} path="/products" />
          <Route element={<BasketPage />} path="/basket" />
          <Route element={<TestPage />} path="/test/:id" />
          <Route element={<NotFoundPage />} path="/*" />
        </Routes>
      </div>
      {/* <ProductsContainer /> */}
      {/* <BasketList /> */}
      {/* <BasketCalculation /> */}
    </div>
  );
}

// todo реализовать компонент ProductsContainer реализовать компонент AddProduct, который будет содержать в себе форму в форме поля title, price, discount при отправке формы данные из нее должны выводиться в консоль

// todo создать компонент ProductsList который содержит массив из продуктов (объекты со свойствами id, title, price, discount) названия продуктов должны выводиться в параграфах

// todo подключить редакс в компоненте AddProduct должен вызываться reducer с соответствующим type в payload необходимо передать объект со структурой :  {id: 1, title: '1велосипед', price: 17000, discount: 25} в ProductsList получать стейт через useSelector и отображать параграфы

// todo создать компонент Product который отображает название товара и его цену а так же содержит кнопку удаления продукта

//! Redux
//   useSelector  - получить данные из state
//   useDispatch - отправить action в reducer и изменить (задать новый) state

//! Локальный стейт для компонента
// useState

//todo добавить новый reducer basketReducer, на данном этапе он просто возвращает state используя combineReducres подключите оба редюсера свойтво для продуктов - products свойтво для корзины - basket поправьте useSelector в ProductsList

//todo создать компонент BasketList который считывает данные из basket (state) и пройдясь циклом по нему формирует карточки BasketItem BasketItem получает через props id и выводит его в параграфе

// todo добавить кнопку, которая позволит добавлять продукт в basket  внести правки в basketReducer

//todo если продукта с указаным id нет добавить объект с id и count 1 если продукт есть, то увеличить count на 1 BasketItem помимо id выводить count

//todo добавить кнопки +/- которые позволят увеличивать и уменьшать count  подправить соответствующим образом reducer

//todo реализовать удаление продукта из корзины, если количество равно 0

//todo добавить кнопку удаления товара из корзины

//todo добавить константу и action creator для type ADD

//todo добавить константу и action creator для type DELETE
