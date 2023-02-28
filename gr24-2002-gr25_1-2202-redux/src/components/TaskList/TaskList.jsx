import React from "react";
import { useSelector } from "react-redux";
// import "./TaskList.css";

export default function TaskList() {
  //const tasks = ["1", "2", "3"];
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks.map((task) => (
        <p key={task}>{task}</p>
      ))}
    </div>
  );
}

//todo содайте массив из слов и с помощью map сформируйте параграфы (1 параграф на 1 слово)
