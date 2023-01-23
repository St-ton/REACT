import React from 'react'
import cardscontainer from './СardsContainer.module.css'
import Card from '../Card/Card'


export default function CardsContainer()
{
  const employees=[
    {id: 1, name: 'Иван', lastname: 'Ушанов', age: 30, lohn:25000},
    {id: 2, name: 'Ольга', lastname: 'Степанова', age: 28, lohn:55000},
    {id: 3, name: 'Семен', lastname: 'Иванов', age: 19, lohn:15000},
    {id: 4, name: 'Степан', lastname: 'Петров', age: 26, lohn:20000},
    {id: 5, name: 'Екатерина', lastname: 'Игорева', age: 45, lohn:25000},
    {id: 6, name: 'Анатолий', lastname: 'Сидоров', age: 67, lohn:29000},
    {id: 7, name: 'Оксана', lastname: 'Краснова', age: 41, lohn:31000},
    {id: 8, name: 'Константин', lastname: 'Рубцов', age: 55, lohn:38000},    
  ]
        
  return (
    <div>
  <p className={cardscontainer.titel}>Сотрудники</p>    
    <div className={cardscontainer.container}>{  
     employees.map(employee => <Card key={employee.id} {...employee}/>)
        }
    </div>    
</div>


   )
}
