import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 0,
  activeSort: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setActiveSort(state, action) {
      state.activeSort = action.payload;
    },
  },
});

export const { setActiveCategory, setActiveSort } = filterSlice.actions;

export default filterSlice.reducer;
