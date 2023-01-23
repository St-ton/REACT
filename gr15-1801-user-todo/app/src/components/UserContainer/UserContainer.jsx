import React from 'react'
import User from '../User/User'
// import usercontainer from './usercontainer.module.css'
import usercontainer from '../User/user.module.css'

export default function UserContainer()
{
  const users = [
    {id: 1, name: 'Иван', lastname: 'Ушанов', age: 30},
    {id: 2, name: 'Ольга', lastname: 'Степанова', age: 28},
    {id: 3, name: 'Семен', lastname: 'Иванов', age: 19},
    {id: 4, name: 'Степан', lastname: 'Петров', age: 26},
    {id: 5, name: 'Екатерина', lastname: 'Игорева', age: 45},
    {id: 6, name: 'Анатолий', lastname: 'Сидоров', age: 67},
    {id: 7, name: 'Оксана', lastname: 'Краснова', age: 41},
    {id: 8, name: 'Константин', lastname: 'Рубцов', age: 55}, 
  ]
  return (
     <div className={usercontainer.container}>       
      {
        /* users.map(user => <User name={ user.name} lastname={ user.lastname} age={ user.age} />) */ 
        users.map(user => <User key={user.id} {...user} />)        
      }
 </div>
    
  )
}
