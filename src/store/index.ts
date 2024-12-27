import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products.slice";
import cartReducer from "./features/cart.slice";
// import { localStorageMiddleware } from "./middleware/localStorage";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
