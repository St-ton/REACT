import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "../AddForm/AddForm";
import MinusForm from "../MinusForm/MinusForm";
import TasksContainer from "../TasksContainer/TasksContainer";
import "./App.css";

export default function App() {
  const state = useSelector((state) => state.clicker);
  const dispach = useDispatch();

  const increment = () => {
    dispach({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispach({ type: "DECREMENT" });
  };

  // const clear = () => {
  //   dispach({ type: 'CLEAR' });
  // };

  return (
    <div className="App">
      <div className="form">
        <AddForm />
        <MinusForm />
      </div>
      <div className="info">
        <button className="btn" onClick={increment}>
          +
        </button>
        <div className="spn">{state}</div>
        <button className="btn" onClick={decrement}>
          -
        </button>
        <button className="btn" onClick={() => dispach({ type: "CLEAR" })}>
          Очистить
        </button>
      </div>
      <TasksContainer />
    </div>
  );
}

//todo добавить компонент AddForm данный компонент содержит форму с полем ввода и кнопкой при отправке формы число в сторе должно увеличиваться на указанное число в  поле ввода

// todo добавить компонент MinuseForm который содержит форму с полем ввода  при отправке формы число из поля вычитается из state
