import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartProduct = {
  id: number;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
  type: string;
  size: number;
};

type CartState = {
  cartProducts: CartProduct[];
  totalPrice: number;
  totalCount: number;
};

const initialState: CartState = {
  cartProducts: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartProducts(state, action) {
      const findProduct = state.cartProducts.find(
        (obj) => obj.id === action.payload.id
      );

      if (findProduct) {
        findProduct.count++;
      } else {
        state.cartProducts.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.cartProducts.reduce(
        (acc, current) => acc + current.price * current.count,
        0
      );
      state.totalCount = state.cartProducts.reduce(
        (acc, current) => acc + current.count,
        0
      );
    },
    removeProduct(state, action: PayloadAction<number>) {
      const findProduct = state.cartProducts.find(
        (obj) => obj.id === action.payload
      );

      if (findProduct && findProduct.count > 0) {
        findProduct.count--;
      }
      state.totalPrice = state.cartProducts.reduce(
        (acc, current) => acc + current.price * current.count,
        0
      );
      state.totalCount = state.cartProducts.reduce(
        (acc, current) => acc + current.count,
        0
      );
    },
    removeCartProduct(state, action: PayloadAction<number>) {
      state.cartProducts = state.cartProducts.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = state.cartProducts.reduce(
        (acc, current) => acc + current.price * current.count,
        0
      );
      state.totalCount = state.cartProducts.reduce(
        (acc, current) => acc + current.count,
        0
      );
    },
    clearProduct(state) {
      state.cartProducts = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const {
  addCartProducts,
  removeProduct,
  removeCartProduct,
  clearProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
