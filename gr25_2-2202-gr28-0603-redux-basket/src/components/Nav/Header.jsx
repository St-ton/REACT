import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const checkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header>
      <nav className="nav">
        {/* <NavLink className={checkClass} to="/Станислав"></NavLink> */}
        <NavLink className={checkClass} to="/">
          О нас
        </NavLink>
        <NavLink className={checkClass} to="/addproducts">
          Добавить товар
        </NavLink>
        <NavLink className={checkClass} to="/products">
          Все товары
        </NavLink>
        <NavLink className={checkClass} to="/basket">
          Корзина
        </NavLink>
      </nav>
    </header>
  );
}

{
  /* <Link className="link" to="/">
          Добавить товар
        </Link>
        <Link className="link" to="/products">
          Все товары
        </Link>
        <Link className="link" to="/basket">
          Корзина
        </Link> */
}
