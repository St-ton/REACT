import axios from "axios";

const URL = "http://localhost:3001/notes";

// Типы запросов на сервер
// Create - post
// Read - get
// Update - patch/put
// Delete - delete

// этот модуль отвечает за слой отправки запроса
// получение всех notes
const getAll = () => {
  // return axios.get(URL);
  const request = axios.get(URL);
  return request.then((res) => res).catch((err) => console.log(err));
};

// получение одного note
const getSingle = (id) => {
  return axios.get(`${URL}/${id}`);
};
// добавление, создание note
const add = (data) => {
  return axios.post(URL, data);
};
// удаление note
const deleteSingle = (id) => {
  return axios.delete(`${URL}/${id}`);
};

export default {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  deleteSingle: deleteSingle,
};
