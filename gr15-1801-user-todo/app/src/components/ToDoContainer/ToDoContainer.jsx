import React from 'react'
import ToDo from '../ToDo/ToDo'
import todocontainer from '../ToDo/todo.module.css'

export default function ToDoContainer()
{
  const todos = [
    {id: 1, title: 'Побегать', done: true},
    {id: 2, title: 'Поесть', done: false},
    {id: 3, title: 'Поспать', done: true},
    {id: 4, title: 'Позаниматься', done: false},
    {id: 5, title: 'Порисовать', done: true}
  ];

  return (
    <div className={todocontainer.container}>
      {todos.map(todo => <ToDo key={todo.id} {...todo} />)}
      </div>
  )
}
