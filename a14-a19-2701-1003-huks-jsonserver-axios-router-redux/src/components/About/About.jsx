import React from 'react';
import { Link } from 'react-router-dom';
import s from './About.module.css';

export default function About() {
  return (
    <div className={s.wrapper}>
      <h1>About</h1>
      <Link to="/about/info">detailed information</Link>
    </div>
  );
}
