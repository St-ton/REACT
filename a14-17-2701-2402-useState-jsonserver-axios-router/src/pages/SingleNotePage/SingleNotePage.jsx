import React, { useState, useEffect } from 'react';
import s from './SingleNotePage.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const fetchNote = id => {
  return axios.get(`http://localhost:3001/notes/${id}`);
};

export default function SingleNotePage() {
  const { id } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    fetchNote(id)
      .then(res => setNote(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.post}>
        <h1>Post № {note.id}</h1>
        <h3>
          <span>Название: </span>
          {note.text}
        </h3>
        <h4>
          <span>Описание: </span>
          {note.descr}
        </h4>
        <h5>
          <span>Количество: </span>
          {note.tasks}
        </h5>
      </div>
      <div>На главную</div>
    </div>
  );
}
