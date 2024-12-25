// import { apiClient } from "@/lib/axios";

// export async function getProducts() {
//   try {
//     const response = await apiClient.get("/products");
//     return response.data;
//   } catch (error) {
//     throw new Error('Failed to fetch products');
//   }
// }

import { apiClient } from '@/lib/axios';
import { Product } from '@/types/products';

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productService = {
  async getProducts(): Promise<ProductsResponse> {
    try {
      const { data } = await apiClient.get<ProductsResponse>('/products');
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch products: ${error.message}`);
      }
      throw new Error('Failed to fetch products');
    }
  },
};