import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import s from "./Header.module.css";

export default function Header() {
  const user = useSelector((state) => state.user.currentUser);

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
        {user ? (
          <Link className={s.link} to="/profile">
            {user.name}
          </Link>
        ) : (
          <>
            <Link className={s.link} to="/register">
              Регистрация
            </Link>
            <Link className={s.link} to="/login">
              Логин
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
