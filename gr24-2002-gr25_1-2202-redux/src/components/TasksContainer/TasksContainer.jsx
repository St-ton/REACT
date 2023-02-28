import React from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";

export default function TasksContainer() {
  return (
    <div>
      <AddTask />
      <TaskList />
    </div>
  );
}
