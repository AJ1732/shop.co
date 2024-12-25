import axios from "axios";
import { apiClient } from "@/lib/axios";
import type { Product } from "@/types/products";

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface PaginationParams {
  limit?: number;
  skip?: number;
  select?: string[];
}

export const productEndpoints = {
  async getProducts(): Promise<ProductsResponse> {
    try {
      const { data } = await apiClient.get<ProductsResponse>("products");
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch products",
        );
      }
      throw new Error("Failed to fetch products");
    }
  },

  async getProductById(id: number | string): Promise<Product> {
    try {
      const { data } = await apiClient.get<Product>(`products/${id}`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || `Failed to fetch product with id ${id}`,
        );
      }
      throw new Error(`Failed to fetch product with id ${id}`);
    }
  },

  async getProductsWithPagination({
    limit = 10,
    skip = 0,
    select = [],
  }: PaginationParams = {}): Promise<ProductsResponse> {
    try {
      const { data } = await apiClient.get<ProductsResponse>("products", {
        params: {
          limit,
          skip,
          select: select.join(","),
        },
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch paginated products",
        );
      }
      throw new Error("Failed to fetch paginated products");
    }
  },
};
