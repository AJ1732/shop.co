import { configureStore } from "@reduxjs/toolkit";
import { routesSlice } from "./features/routesSlice";

export const store = configureStore({
  reducer: {
    routes: routesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
