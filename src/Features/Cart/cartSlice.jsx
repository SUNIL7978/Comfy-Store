import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      console.log(product);
      const item = state.cartItems.find((i) => i.cartId === product.cartId);
      if (item) {
        item.amount += item.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price;
      cartSlice.caseReducers.calculationTotals(state);
      toast.success("Item Added in cart Succesfully.");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartId } = action.payload;
      const product = state.cartItems.find((i) => i.cartId === cartId);
      state.cartItems = state.cartItems.filter((i) => i.cartId !== cartId);
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.amount * product.price;
      cartSlice.caseReducers.calculationTotals(state);
      toast.error("Item Removed from Cart");
    },
    editItem: (state, action) => {
      const { cartId, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartId === cartId);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculationTotals(state);
      toast.success("Cart Updated");
    },
    calculationTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.tax + state.shipping + state.cartTotal;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
