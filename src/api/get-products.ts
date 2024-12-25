import { apiClient } from "@/lib/axios";

export async function getProducts() {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
}