import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RouteState {
  visitedRoutes: string[];
}

const initialState: RouteState = {
  visitedRoutes: [],
};

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    addRoute: (state, action: PayloadAction<string>) => {
      if (!state.visitedRoutes.includes(action.payload)) {
        state.visitedRoutes.push(action.payload);
      }
    },
  },
});

export const { addRoute } = routesSlice.actions;
