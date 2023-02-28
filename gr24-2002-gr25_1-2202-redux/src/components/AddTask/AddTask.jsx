import React from "react";
import { useDispatch } from "react-redux";
// import "./AddTask.css";

export default function AddTask() {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const { task } = event.target;
    dispatch({ type: "ADD", payload: task.value });
    console.log(task.value);
    task.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="task" placeholder="Укажите задачу" />
        <button>Добавить задачу</button>
      </form>
    </div>
  );
}

// todo реализовать форму и обработчик формы при отправлении формы данные из поля ввода должны выводиться в консоль
