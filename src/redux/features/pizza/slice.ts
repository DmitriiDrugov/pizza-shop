import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { FetchPizzaArg, Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzaArg>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { order, sortBy, byCategory, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://6605b547d92166b2e3c2a3bb.mockapi.io/pizzas?page=${currentPage}&limit=4&${byCategory}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

interface PizzaSliceState {
  items: Pizza[];
  status: "loading" | "success" | "error";
}
const initialState: PizzaSliceState = {
  items: [],
  status: "loading",
};
const pizzasSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
