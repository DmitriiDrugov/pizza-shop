import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Sort } from "./types";


interface categoriesSliceState {
  searchValue: string;
  category: number;
  currentPage: number;
  sort: Sort;
}

const initialState: categoriesSliceState = {
  searchValue: "",
  category: 0, // Initial category state
  currentPage: 1,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number>) {
      state.category = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<categoriesSliceState>) {
      state.sort = action.payload.sort;
      state.category = Number(action.payload.category);
      state.currentPage = Number(action.payload.currentPage);
    },
  },
});



export const {
  setCategory,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
