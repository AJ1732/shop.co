import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart.slice";
import productsReducer from "./features/products.slice";
import searchReducer from "./features/search.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
