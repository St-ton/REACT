import React from 'react'
import card from './Сard.module.css'

export default function Card({id, name, lastname, age, lohn }) {
  return (
    <div className={card.card}>
     <p className={card.titel}><span>ФИО:</span> {name} {lastname}</p>
        <p className={card.age}><span>Возраст:</span> {age}</p>        
        <p className={card.lohn}><span>Зарплата:</span> {lohn} руб</p>
    </div>
  )
}
