import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {pizzas: [], status: null};

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async function ({currentPage}) {
    const {data} = await axios.get(
      `https://665d9f80e88051d604078e90.mockapi.io/pizzas?page=${currentPage}&limit=8`
    );
    return data;
  }
);

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.pizzas = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = "success";
        state.pizzas = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = "error";
        state.pizzas = [];
      });
  },
});

export const {setPizzas} = pizzasSlice.actions;

export default pizzasSlice.reducer;
