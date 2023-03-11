import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import s from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (user) => {
    return axios.post("http://localhost:3001/login", user);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const currentUser = {
      email,
      password,
    };

    login(currentUser)
      .then((res) => {
        setUserName(res.data.user.name);
        console.log(userName);
        dispatch(loginSuccess(res.data.user));
        navigate("/profile");
        // toast("👍 Успешная регистрация!");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast(err.response.data);
      });
  };

  return (
    <div className={s.wrapper}>
      {userName ? <h2>Вы успешно авторизировались, {userName}</h2> : null}
      {!userName && (
        <form className={s.form} onSubmit={handleLogin}>
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
          <input className={s.submit} type="submit" value="Вход" />
        </form>
      )}
      <ToastContainer autoClose={500} theme="light" hideProgressBar={true} />
    </div>
  );
};
export default LoginPage;

// Делал так, что исчезали поля емаил и пароля и выводилось имя пользователя
{
  /* <div className={s.wrapper}>
  {userName ? <h2>Вы успешно авторизировались, {userName}</h2> : null}
  {!userName && (
    <form className={s.form} onSubmit={handleLogin}>
      <div>
        
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
        
        <input
          className={s.control}
          type="password"
          name="pass"
          placeholder="Введите пароль"
          minLength="5"
           required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input className={s.submit} type="submit" value="Вход" />
    </form>
  )}
  <ToastContainer autoClose={500} theme="light" hideProgressBar={true} />
</div>; */
}
