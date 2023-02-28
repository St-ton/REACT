import React, { useState, useEffect } from "react";
import s from "./SingleNotePage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import noteService from "../../services/notes";
import { ToastContainer, toast } from "react-toastify";

//будем использовать noteService.getSingle(id)
// const fetchNote = (id) => {
//   return axios.get(`http://localhost:3001/notes/${id}`);
// };

// будем использовать noteService.deleteSingle(id)
// const deleteNote = (id) => {
//   return axios.delete(`http://localhost:3001/notes/${id}`);
// };

const changeNote = (id, data) => {
  return axios.put(`http://localhost:3001/notes/${id}`, data);
};

export default function SingleNotePage() {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("");
  const [descr, setDescr] = useState("");
  const [tasks, setTasks] = useState("");

  useEffect(() => {
    noteService
      .getSingle(id)
      // fetchNote(id)
      .then((res) => setNote(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    noteService
      .deleteSingle(id)
      // deleteNote(id)
      .then(window.location.replace("/"));
    toast("👍 Пост удален!");
  };

  const handleEdit = () => {
    //какие то операции UI
    setEditMode(true);
    setText(note.text);
    setDescr(note.descr);
    setTasks(note.tasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedNote = {
      text,
      descr,
      tasks,
    };
    changeNote(id, editedNote)
      .then((res) => {
        setNote(res.data);
        setEditMode(false);
        toast("👍 Пост отредактирован!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {editMode ? (
        <div>
          <h1>Редактировать пост {id}</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Название"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Описание"
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Количество"
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
            />
            <input className={s.submit} type="submit" value="Сохранить пост" />
          </form>
        </div>
      ) : (
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
          <div>
            <button onClick={handleDelete}>Удалить</button>
            <button onClick={handleEdit}>Редактировать</button>
            <div>На главную</div>
          </div>
          <ToastContainer
            autoClose={500}
            theme="light"
            hideProgressBar={true}
          />
        </div>
      )}
    </>
  );
}
