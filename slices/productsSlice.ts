import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CardPropsItem } from "@components/home/card/Card.props";

type productsState = {
  products: Array<CardPropsItem>;
};
const initialState: productsState = {
  products: [],
};

const productsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    addProduct: (state, action: PayloadAction<CardPropsItem>) => {
      state.products = [...state.products, action.payload];
    },
    removeProduct: (state, action) => {},
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
