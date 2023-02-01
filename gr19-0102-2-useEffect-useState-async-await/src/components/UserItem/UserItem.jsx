import React from 'react'
import s from './UserItem.module.css'

export default function UserItem({id, first_name, last_name, email, deleteUser}) {
  return (
    <div className={s.usercard}>
      <p className={s.title}>{first_name} {last_name}</p>
      <p className={s.email}>{email}</p>
      <button onClick={()=>deleteUser(id)}>Удалить</button>
    </div>
  )
}
