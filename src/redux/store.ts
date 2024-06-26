import { configureStore } from "@reduxjs/toolkit";

import filter from "./slices/filterSlice";
import search from "./slices/searchSlice";
import cart from "./slices/cartSlice";
import pizzas from "./slices/pizzasSlice";

export const store = configureStore({
  reducer: {
    filter,
    search,
    cart,
    pizzas,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
