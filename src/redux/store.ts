import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/Category/slice.ts";
import cartReducer from "./features/cart/slice.ts";
import pizzasReducer from "./features/pizza/slice.ts";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { categoriesReducer, cartReducer, pizzasReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
