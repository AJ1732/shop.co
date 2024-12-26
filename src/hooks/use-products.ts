"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchProducts,
  fetchProductById,
  fetchProductsByCategory,
  fetchPaginatedProducts,
  searchProducts,
} from "@/store/features/products.slice";
import type { Product } from "@/types/products";

interface GetProductsParams {
  category?: string;
  query?: string;
  limit?: number;
  skip?: number;
  select?: string[];
  sortBy?: keyof Product;
  order?: 'asc' | 'desc';
}

export const useProducts = (params?: GetProductsParams) => {
  const dispatch = useAppDispatch();
  const { items, status, error, total } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle" || params) {
      dispatch(fetchProducts(params));
    }
  }, [
    dispatch,
    params?.category,
    params?.query,
    params?.limit,
    params?.skip,
    params?.select?.join(','),
    params?.sortBy,
    params?.order
  ]);

  return {
    products: items,
    total,
    isLoading: status === "loading" || status === "idle",
    isError: status === "failed",
    error,
  };
};

export const useProductById = (params: {
  id: string | string[] | number;
  select?: string[];
}): {
  product: Product | undefined;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
} => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    const productId = Array.isArray(params.id) ? params.id[0] : params.id;

    dispatch(
      fetchProductById({
        id: productId,
        select: params.select,
      }),
    );
  }, [dispatch, params.id, params.select]);

  return {
    product: items[0],
    isLoading: status === "loading",
    isError: status === "failed",
    error,
  };
};

export const useProductsByCategory = (params: {
  category: string;
  select?: string[];
  limit?: number;
  skip?: number;
}) => {
  const dispatch = useAppDispatch();
  const { items, status, error, total } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsByCategory(params));
  }, [dispatch, params.category, params.select, params.limit, params.skip]);

  return {
    products: items,
    total,
    isLoading: status === "loading" || status === "idle",
    isError: status === "failed",
    error,
  };
};

export const usePaginatedProducts = (params: {
  limit?: number;
  skip?: number;
  select?: string[];
}) => {
  const dispatch = useAppDispatch();
  const { items, status, error, total } = useAppSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchPaginatedProducts(params));
  }, [dispatch, params.skip, params.limit]);

  return {
    products: items,
    total,
    isLoading: status === "loading" || status === "idle",
    isError: status === "failed",
    error,
  };
};

export const useSearchProducts = (query: string) => {
  const dispatch = useAppDispatch();
  const { items, status, error, total } = useAppSelector(
    (state) => state.products,
  );

  useEffect(() => {
    if (query) {
      dispatch(searchProducts(query));
    }
  }, [dispatch, query]);

  return {
    products: items,
    total,
    isLoading: status === "loading",
    isError: status === "failed",
    error,
  };
};
