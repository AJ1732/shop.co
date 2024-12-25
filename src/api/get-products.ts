import { Product } from '@/types/products';

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productService = {
  async getProducts(): Promise<ProductsResponse> {
    const response = await fetch('https://dummyjson.com/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    return response.json();
  },
};