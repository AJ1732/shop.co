import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productEndpoints } from "@/api/products";
import type { Product } from "@/types/products";

interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  total: number;
  skip: number;
  limit: number;
}

interface GetProductsParams {
  category?: string;
  query?: string;
  limit?: number;
  skip?: number;
  select?: string[];
  sortBy?: keyof Product;
  order?: "asc" | "desc";
}

interface GetProductByIdParams {
  id: number | string;
  select?: string[];
}

interface CategoryParams {
  category: string;
  select?: string[];
  limit?: number;
  skip?: number;
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params?: GetProductsParams) => {
    return await productEndpoints.getProducts(params);
  },
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async ({ id, select }: GetProductByIdParams) => {
    return await productEndpoints.getProductById({ id, select });
  },
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async ({ category, select, limit, skip }: CategoryParams) => {
    return await productEndpoints.getProductsByCategory({
      category,
      select,
      limit,
      skip,
    });
  },
);

export const fetchPaginatedProducts = createAsyncThunk(
  "products/fetchPaginatedProducts",
  async (params: { limit?: number; skip?: number; select?: string[] }) => {
    return await productEndpoints.getProductsWithPagination(params);
  },
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (query: string) => {
    return await productEndpoints.searchProducts({ query });
  },
);

const initialState: ProductsState = {
  items: [],
  status: "idle",
  error: null,
  total: 0,
  skip: 0,
  limit: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH PRODUCTS
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
        state.limit = action.payload.limit;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      })
      // FETCH PRODUCT BY ID
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = [action.payload];
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch product";
      })
      // FETCH PRODUCTS BY CATEGORY
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
        state.limit = action.payload.limit;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch category products";
      })
      // PAGINATED PRODUCTS
      .addCase(fetchPaginatedProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPaginatedProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
        state.limit = action.payload.limit;
      })
      .addCase(fetchPaginatedProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch paginated products";
      })
      // SEARCH PRODUCTS
      .addCase(searchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
        state.limit = action.payload.limit;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to search products";
      });
  },
});

export default productsSlice.reducer;
