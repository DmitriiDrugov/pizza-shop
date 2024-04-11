import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getItemFromLocalStorage } from "../../../utils/getItemFromLocalStorage";
import { calculateTotalPrice } from "../../../utils/calcTotalPrice";
import { cartItem } from "./types";

interface CartSliceState {
  totalPrice: number;
  items: cartItem[];
}

const { items, totalPrice } = getItemFromLocalStorage();
const initialState: CartSliceState = {
  totalPrice: totalPrice,
  items: items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<cartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: +1,
        });
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      const itemToRemove = state.items.find((obj) => obj.id === action.payload);
      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.count;
      }
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeItem, minusItem, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
