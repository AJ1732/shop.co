// import { configureStore } from "@reduxjs/toolkit";
// import productsSlice from "./features/products.slice";

// export const store = configureStore({
//   reducer: {
//     products: productsSlice,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import productsReducer from './features/products.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
      thunk: true,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;