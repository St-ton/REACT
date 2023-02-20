import React from 'react';
import s from './Product.module.css';

export default function Product({
  id,
  title,
  description,
  price,
  images,
  imageIndex,
  deleteProduct,
  addToBasket,
  changePhoto,
}) {
  return (
    <div className={s.card}>
      <div>
        <img onClick={() => changePhoto(id)} src={images[imageIndex % images.length]} alt={title} />
      </div>
      <div className={s.info}>
        <p className={s.title}>{title}</p>
        <p className={s.descr}>{description}</p>
        <div className={s.price_block}>
          <p className={s.price}>${price}</p>
          <div className={s.btns}>
            <button className={s.add_button} onClick={() => addToBasket(id)}>
              Add Basket
            </button>
            <button className={s.del_button} onClick={() => deleteProduct(id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
