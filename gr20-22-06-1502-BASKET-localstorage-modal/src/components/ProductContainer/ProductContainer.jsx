import React from 'react';
import { useEffect, useState } from 'react';
import BasketContainer from '../BasketContainer/BasketContainer';
import Modal from '../Modal/Modal';

import Product from '../Product/Product';
import s from './ProductContainer.module.css';

export default function ProductContainer() {
  const [products, setProducts] = useState(null);
  const [basket, setBasket] = useState(() => JSON.parse(localStorage.getItem('basket')) ?? []);

  //todo добавить стейт modal которое принимает значения true или false. Если true, то окно отображается в ином случае нет
  const [modal, setModal] = useState(false);

  //todo создать две функции
  // 1) открывать модальное окно
  // 2) закрывать модальное окно

  const openWindow = () => setModal(true);
  const closeWindow = () => setModal(false);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  //*Считываем товары при первой загрузке страницы, поэтому в конце стоит []
  useEffect(() => {
    (async () => {
      const resp = await fetch('https://dummyjson.com/products');
      const data = await resp.json();
      const result = data.products.map(({ id, title, price, description, images }) => ({
        id,
        title,
        price,
        description,
        images,
        imageIndex: 0,
      }));
      setProducts(result);
    })();
  }, []);

  //todo доработать процесс загрузки товаров 1) грузить все картинки  // 2) добавить свойство imageIndex со значением 0

  useEffect(() => {
    if (products === null) {
      return;
    }
    const products_ids = products.map(({ id }) => id);
    // setBasket(basket.filter(({ id }) => products_ids.includes
    setBasket(pre => pre.filter(({ id }) => products_ids.includes(id)));
  }, [products]);

  //todo реализовать функцию, которая получает id товара и увеличивает у него imageIndex на 1
  const changePhoto = productId => {
    products.find(({ id }) => id === productId).imageIndex++;
    setProducts([...products]);
  };

  //todo передать changePhoto в Product и вызвать ее при клике на картинку

  const deleteProduct = delId => {
    let confirmDelete = window.confirm('Are you sure deleting?');
    if (confirmDelete) {
      setProducts(products.filter(({ id }) => id !== delId));
    }
  };

  const addToBasket = value => {
    const productFromBasket = basket.find(({ id }) => id === value);
    if (productFromBasket) {
      productFromBasket.count++;
      setBasket([...basket]);
    } else {
      const target = products.find(({ id }) => id === value);
      setBasket([...basket, { ...target, count: 1 }]);
    }
  };

  const increment = value => {
    const target = basket.find(({ id }) => id === value);
    target.count++;
    setBasket([...basket]);
  };

  const decrement = value => {
    const target = basket.find(({ id }) => id === value);
    target.count--;
    if (target.count === 0) {
      setBasket(basket.filter(elem => elem !== target));
    } else {
      setBasket([...basket]);
    }
  };

  const clearBasket = () => {
    let confirmClear = window.confirm('Are you sure clearning?');
    if (confirmClear) {
      setBasket([]);
    }
  };

  const deleteFromBasket = value => {
    let confirm = window.confirm('Are you sure?');
    if (confirm) {
      setBasket(basket.filter(({ id }) => id !== value));
    }
  };

  return (
    <div>
      <div className={s.title}>
        <h1>PRODUCTS from {<a href="https://dummyjson.com/products">LINK</a>}</h1>
        <button onClick={openWindow}>
          Корзина товаров. (поз: {basket.length}) (тов:
          {basket.reduce((pre, { count }) => pre + count, 0)}) (сум:
          {basket.reduce((acc, { count, price }) => acc + count * price, 0)})
        </button>
      </div>

      {modal ? (
        <Modal closeWindow={closeWindow}>
          <BasketContainer
            basket={basket}
            increment={increment}
            decrement={decrement}
            clearBasket={clearBasket}
            deleteFromBasket={deleteFromBasket}
          />
        </Modal>
      ) : (
        ''
      )}
      <div className={s.container}>
        {products === null
          ? 'Товары грузятся'
          : products.map(product => (
              <Product
                key={product.id}
                {...product}
                deleteProduct={deleteProduct}
                addToBasket={addToBasket}
                changePhoto={changePhoto}
              />
            ))}
      </div>
      <div className={s.footer}>SHOP XXL</div>
    </div>
  );
}

//todo перенести кнопку закрытия модального окна в компонент Modal  и перекинуть функцию closeWindow через пропсы в компонент Modal

// !Запись в локалсторидж
// useEffect(() => {
//   const storedToDo = JSON.parse(localStorage.getItem('toDo')) || [];
//   setToDo(storedToDo);
// }, []);

// useEffect(() => {
//   localStorage.setItem('toDo', JSON.stringify(toDo));
// }, [toDo]);
