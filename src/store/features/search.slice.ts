import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productEndpoints } from "@/api/products";
import type { Product } from "@/types/products";

interface SearchState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  total: number;
}

interface SearchParams {
  query: string;
  limit?: number;
}

const initialState: SearchState = {
  items: [],
  status: "idle",
  error: null,
  total: 0,
};

export const searchProducts = createAsyncThunk(
  "search/searchProducts",
  async (params: SearchParams) => {
    return await productEndpoints.searchProducts(params);
  },
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to search products";
      });
  },
});

export const { clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
