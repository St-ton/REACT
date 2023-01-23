import React from 'react'
import user from './user.module.css'

export default function User({ name, lastname, age })
{    
   return (
    <div className={user.card}>
       <p className={user.card_title}>Имя: {name}</p>
      <p className={user.card_title}>Фамилия: {lastname}</p>
      <p className={user.card_age}>Возраст: {age}</p>
     </div>
  )
}
