import React from 'react';
import s from './BasketItem.module.css';

export default function BasketItem({
  id,
  title,
  price,
  count,
  increment,
  decrement,
  deleteFromBasket,
}) {
  return (
    <div className={s.item}>
      {/* <div className={s.info}> */}
      <div className={s.title}>{title}</div>
      <div className={s.price}>
        <span>$: </span>
        {price}{' '}
      </div>
      <div className={s.btns_container}>
        <button className={[s.btn, s.red].join(' ')} onClick={() => decrement(id)}>
          -
        </button>
        <p className={s.count}>{count}</p>
        <button className={[s.btn, s.green].join(' ')} onClick={() => increment(id)}>
          +
        </button>
        <button className={s.btn_del} onClick={() => deleteFromBasket(id)}>
          x
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}
