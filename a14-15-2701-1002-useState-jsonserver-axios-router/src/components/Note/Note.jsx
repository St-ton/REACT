import React from 'react';
import s from './Note.module.css';

export default function Note(props) {
  return (
    <div className={s.note}>
      <h5 className={s.title}>
        <span>Title:</span> {props.title}
      </h5>
      <h5 className={s.descr}>
        <span>Description:</span> {props.descr}
      </h5>
    </div>
  );
}
