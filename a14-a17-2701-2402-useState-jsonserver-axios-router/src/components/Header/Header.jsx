import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

export default function Header() {
  return (
    <header>
      <nav className={s.nav}>
        <Link className={s.link} to="/">
          Main
        </Link>
        <Link className={s.link} to="/about">
          About
        </Link>
        <Link className={s.link} to="/contacts">
          Contacts
        </Link>
        <Link className={s.link} to="/addnote">
          Добавить пост
        </Link>
      </nav>
    </header>
  );
}
