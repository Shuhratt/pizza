import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ProductProps } from "@components/order/Product";

type productsState = {
  products: Array<ProductProps>;
};
const initialState: productsState = {
  products: [],
};

const productsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    //CREATE
    addProduct: (state, action: PayloadAction<ProductProps>) => {
      state.products = [...state.products, action.payload];
    },
    //UPDATE
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products.filter(({ id }) => id !== action.payload);
    },
    //DELETE
    clearAll: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, clearAll } = productsSlice.actions;

export default productsSlice.reducer;
