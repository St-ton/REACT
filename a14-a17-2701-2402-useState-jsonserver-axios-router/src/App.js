import React from 'react';
// import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Notes from './components/Notes/Notes';
// import Note from './components/Note/Note';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import SingleNotePage from './pages/SingleNotePage/SingleNotePage';
import AddNotePage from './pages/AddNotePage/AddNotePage';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Notes />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contacts />} path="/contacts" />
        <Route element={<SingleNotePage />} path="/note/:id" />
        <Route element={<AddNotePage />} path="/addnote" />
      </Routes>
      <Footer />
    </div>
  );
}

//! Сделать добавление нового курса
//! 1. Создать форму добавления нового курса
//! 2. Добавить поля, которые нужны для каждого документа в db.json
//! 2.1 Создать объект, который вы хотите добавить в db.json
//! 3. Отправить post запрос для добавления данных в db.json

//* Первая часть урока

// const [left, setLeft] = useState(0);
// const [right, setRight] = useState(0);
// const [allClicks, setAllClicks] = useState([]);
// const newAllClicks = [];
// const handleLeftClick = () => {
//   setLeft(left + 1);
//   setAllClicks(allClicks.concat('L'));
// };

// const handleLeftRight = () => {
//   setRight(right + 1);
//   setAllClicks(allClicks.concat('R'));
// };

// const [clicks, setClicks] = useState({

// const [clicks, setClicks] = useState({
//   left: 0,
//   right: 0,
// });

// const handleLeftClick = () => {
//   const newClicks = {
//     ...clicks,
//     left: clicks.left + 1,
//   };
//   setClicks(newClicks);
// };

// const handleLeftRight = () => {
//   const newClicks = {
//     ...clicks,
//     right: clicks.right + 1,
//   };
//   setClicks(newClicks);
// };

// return (
//   <div className="App">
//     {/* {/* {clicks.left} &#8656; */}
//     {left} &#8656;
//     <button onClick={handleLeftClick}>left</button>
//     <button onClick={handleLeftRight}>right</button>
//     {right}
//     {/* &#8658; {clicks.right}  */}
//     {/* <button onClick={() => setLeft(left + 1)}>left</button> */}
//     {/* <button onClick={() => setRight(right + 1)}>right</button> */}
//     <p>История кликов:{allClicks.join(' ')}</p>
//   </div>
// );

/*
  ["Left", "Right"] => "Left" "Right"
  1. Не объявлять состояние внутри циклов, условий, функций
*/
// .push() - мутирует состояние, добавляет к начальному массиву значение
// .concat() - возвращает новый массив с добавленным значением
// Задача. При нажатии на left, добавлять в массив clicks 'L',
// При нажатии на right, добавлять в массив clicks 'R'
// Задача. При нажатии на кнопку left, менять свойство left на 1
// При нажатии на right менять свойства right на 1

// Задача. При нажатии на кнопку left, увеличивать состояние left на 1
// При нажатии на кнопку right, увелиичивать состояние right на 1
// Feature Slices
// left = 0, left = 0 + 1, left = 1
// left = 1, left = 1 + 1, left = 2
// let left = 0
// left = left + 1
// setLeft(left + 1) - говорит реакту перерисоваться
// left++
// left = left + 1
