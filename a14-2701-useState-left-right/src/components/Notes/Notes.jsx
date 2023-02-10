import React, { useEffect, useState } from 'react';
// import { axios } from "axios";
import axios from 'axios';
import Note from '../Note/Note';
import s from './Notes.module.css';

const fetchNotes = () => {
  return axios.get('http://localhost:3001/notes');
};

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes()
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className={s.wrapper}>
      <div>
        <h1>Lesson Topics</h1>
      </div>
      <div className={s.notes}>
        {notes.map(note => (
          <Note key={note.id} title={note.text} descr={note.descr} />
        ))}
      </div>
    </div>
  );
}
