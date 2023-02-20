import React from 'react';
import './AddForm.module.css';
import { useDispatch } from 'react-redux';
// import { SUM } from '../../store/reducer/clickerReducer';
import { sumAction } from '../../store/reducer/clickerReducer';

export default function AddForm() {
  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const { number } = event.target;
    // dispatch({ type: SUM, payload: +number.value });
    dispatch(sumAction(number.value));
    number.value = '';
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input type="number" name="number" />
        <button>Увеличить</button>
      </form>
    </div>
  );
}

//todo добавить компонент AddForm данный компонент содержит форму с полем ввода и кнопкой при отправке формы число в сторе должно увеличиваться на указанное число в  поле ввода
