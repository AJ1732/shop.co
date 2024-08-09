import { ProductProps } from "@/types/data";

const getProducts = async (): Promise<ProductProps[]> => {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  return await response.json();
};

export default getProducts;
