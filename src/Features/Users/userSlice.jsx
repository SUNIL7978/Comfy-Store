import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  synthwave: "synthwave",
  lofi: "lofi",
};

const getUserLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const getThemeLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.lofi;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: getUserLocalStorage(),
  theme: getThemeLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logout User Succesfully");
    },
    toggleTheme: (state) => {
      const { synthwave, lofi } = themes;
      state.theme = state.theme === lofi ? synthwave : lofi;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
