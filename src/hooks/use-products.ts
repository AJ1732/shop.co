"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { 
  fetchProducts, 
  fetchProductById, 
  fetchPaginatedProducts,
  searchProducts 
} from "@/store/features/products.slice";
import type { Product } from "@/types/products";

export const useProducts = (sortOptions?: { sortBy?: keyof Product; order?: 'asc' | 'desc' }) => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts(sortOptions));
    }
  }, [status, dispatch, sortOptions]);

  return {
    products: items,
    isLoading: status === "loading",
    isError: status === "failed",
    error,
  };
};

export const useProductById = (id: number | string) => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return {
    product: items[0], 
    isLoading: status === "loading",
    isError: status === "failed",
    error,
  };
};

export const usePaginatedProducts = (params: { 
  limit?: number; 
  skip?: number; 
  select?: string[] 
}) => {
  const dispatch = useAppDispatch();
  const { items, status, error, total } = useAppSelector((state) => state.products);

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
  const { items, status, error, total } = useAppSelector((state) => state.products);

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