import React from 'react';
import s from './Modal.module.css';

export default function Modal({ children, closeWindow }) {
  return (
    <div className={s.container}>
      <div className={s.window}>
        {children}
        <button className={s.btn_close} onClick={closeWindow}>
          X
        </button>
      </div>
    </div>
  );
}
