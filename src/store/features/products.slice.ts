// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { ProductsState } from "@/types/products";
// import { apiClient } from "@/lib/axios";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const response = await apiClient.get("/products");
//     return response.data;
//   },
// );

// const initialState: ProductsState = {
//   items: [],
//   status: "idle",
//   error: null,
//   total: 0,
//   skip: 0,
//   limit: 0,
// };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.items = action.payload.products;
//         state.total = action.payload.total;
//         state.skip = action.payload.skip;
//         state.limit = action.payload.limit;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch products";
//       });
//   },
// });

// export default productsSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ProductsState } from '@/types/products';
import { productService } from '@/api/get-products';

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
  metadata: {
    total: 0,
    skip: 0,
    limit: 0,
  },
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch products');
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProducts: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.products;
        state.metadata = {
          total: action.payload.total,
          skip: action.payload.skip,
          limit: action.payload.limit,
        };
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { resetProducts } = productsSlice.actions;
export default productsSlice.reducer;