import React, { useEffect, useState } from 'react'
import UserItem from '../UserItem/UserItem';
import uc from './UserContainer.module.css'

export default function UserContainer() {
  
  const [users, setUsers] = useState([]);
  
   useEffect(() =>{
    (async () =>{
      const resp = await fetch('https://reqres.in/api/users');
      const data = await resp.json();
      setUsers(data.data);      
    })()
  }, []);

  const deleteUser = delId =>
  {
    // console.log(delId);
    setUsers(users.filter(({ id }) => id != delId));
  }
  
  return (
      <div className={uc.container}>
        <div className={uc.div}>
          {
            users.map(user => <UserItem key={user.id} {...user} deleteUser={deleteUser} />)
          }
        </div>
        <div className={uc.div}>
          <p className={uc.total}>Users total: {users.length}</p>
        </div>
        
    </div>
  )
}

//todo отправлять fetch запрос и выводить массив с данныыми пользователей в консоль
   
  //! Посмотреть видео перед перерывом
  //   const async_func = async () => {
  //     const resp = await fetch('https://reqres.in/api/users');
  //     const data = await resp.json();
  //     console.log(data.data);
  //   }
  
  // useEffect(() => {async_func()}, []);
  

// todo реализовать компонент UserItem который отображает имя, фамилию и почту пользователя добавьте минимальные стили


// todo добавить функиционал удаления пользователя и передать его в карточки пользователей в карточке добавьте кнопку и по нажатию на нее карточка должна удалиться

// todo добавить компонент UserContainer и переместить в него всю логику отображения карточек пользователей

//todo внизу userContainer отображайте кол-во пользователей