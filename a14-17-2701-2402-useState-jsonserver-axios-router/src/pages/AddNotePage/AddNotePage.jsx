import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './AddNotePage.module.css';

const addNote = data => {
  return axios.post('http://localhost:3001/notes', data);
};

export default function AddNotePage() {
  const [text, setText] = useState('');
  const [descr, setDescr] = useState('');
  const [tasks, setTasks] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newNote = {
      text,
      descr,
      tasks,
    };
    addNote(newNote)
      .then(res => {
        setText('');
        setDescr('');
        setTasks('');
        toast('👍 Пост создан!');
      })
      .catch(err => console.log(err));
    // .catch(err => toast('Attention' + err));
  };

  toast('🦄 Wow so easy!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  return (
    <div className={s.wrapper}>
      <h1>Добавить пост</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.control}
          type="text"
          name=""
          id=""
          placeholder="Название"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          className={s.control}
          type="text"
          name=""
          id=""
          placeholder="Описание"
          value={descr}
          onChange={e => setDescr(e.target.value)}
        />
        <input
          className={s.control}
          type="text"
          name=""
          id=""
          placeholder="Количество"
          value={tasks}
          onChange={e => setTasks(e.target.value)}
        />
        <input className={s.submit} type="submit" value="Создать пост" />
      </form>
      <ToastContainer autoClose={500} theme="light" hideProgressBar={true} />
    </div>
  );
}
