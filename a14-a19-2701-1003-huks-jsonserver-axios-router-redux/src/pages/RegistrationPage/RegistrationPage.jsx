import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import s from "./RegistrationPage.module.css";

const register = (user) => {
  return axios.post("http://localhost:3001/register", user);
};

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };

    register(newUser)
      .then((res) => {
        // console.log(res);
        setEmail("");
        setPassword("");
        toast("👍 Пользователь зарегистрирован!");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast(err.response.data);
      });

    //если пользователь уже существует, то приходит сообщение об ошибке
  };

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handleRegister}>
        <div>
          {/* <label htmlFor="email">Email</label> */}
          <input
            className={s.control}
            type="text"
            name="email"
            placeholder="Введите email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          {/* <label htmlFor="pass">Пароль</label> */}
          <input
            className={s.control}
            type="password"
            name="pass"
            placeholder="Введите пароль"
            minLength="5"
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input className={s.submit} type="submit" value="Регистрация" />
      </form>
      <ToastContainer autoClose={500} theme="light" hideProgressBar={true} />
    </div>
  );
};

export default RegistrationPage;
