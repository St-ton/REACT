import React from 'react';
import './MinusForm.module.css';
import { useDispatch } from 'react-redux';
import { MINUS } from '../../store/reducer/clickerReducer';

export default function MinusForm() {
  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const { number } = event.target;
    dispatch({ type: MINUS, payload: +number.value });
    number.value = '';
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input type="number" name="number" />
        <button>Уменьшить</button>
      </form>
    </div>
  );
}

//todo добавить компонент AddForm данный компонент содержит форму с полем ввода и кнопкой при отправке формы число в сторе должно увеличиваться на указанное число в  поле ввода
