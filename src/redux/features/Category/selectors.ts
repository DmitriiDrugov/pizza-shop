import { RootState } from "../../store";

export const selectSort = (state: RootState) => state.categoriesReducer.sort;
export const selectFilter = (state: RootState) => state.categoriesReducer;