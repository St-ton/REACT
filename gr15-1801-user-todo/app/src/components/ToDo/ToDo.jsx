import React from 'react'
import todo from './todo.module.css'

export default function ToDo({id, title, done}) {
  
  // const doneStyle = {
  //   color: 'gray',
  //   textDecoration: 'line-through'
  // }
     
  return (
    // <div style={done ? doneStyle : {}} className={todo.card}>
    <div className={todo.card}>
      <p className={done ? todo.title : todo.done}> {title}</p> 
      <button className={todo.button}>Клик</button>
          

</div>
  )
}

