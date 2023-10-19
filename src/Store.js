import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/cartSlice";
import userReducer from "./Features/Users/userSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
