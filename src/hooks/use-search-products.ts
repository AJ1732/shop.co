"use client"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { searchProducts, clearSearch } from "@/store/features/search.slice";

interface UseSearchProductsParams {
  query: string;
  limit?: number;
}

export const useSearchProducts = ({ query, limit }: UseSearchProductsParams) => {
  const dispatch = useAppDispatch();
  const { items, status, error, total } = useAppSelector((state) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(searchProducts({ query, limit }));
    }
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch, query, limit]);

  return {
    results: items,
    total,
    isLoading: status === "loading",
    isError: status === "failed",
    error,
  };
};