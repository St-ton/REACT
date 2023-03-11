import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null, // пользователь по умолчанию
    isFetching: false, // статус нажатия кнопки Войти и ответа от сервера
    error: false, // обработка ошибок
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { loginSuccess } = userSlice.actions;
