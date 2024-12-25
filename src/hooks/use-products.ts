// "use client";

// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { fetchProducts } from "@/store/features/products.slice";

// export const useProducts = () => {
//   const dispatch = useAppDispatch();
//   const { items, status, error } = useAppSelector((state) => state.products);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchProducts());
//     }
//   }, [status, dispatch]);

//   return {
//     products: items,
//     isLoading: status === "loading",
//     isError: status === "failed",
//     error,
//   };
// };

import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchProducts, resetProducts } from '@/store/features/products.slice';

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const { items, status, error, metadata } = useAppSelector((state) => state.products);

  const fetchProductsData = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const resetProductsData = useCallback(() => {
    dispatch(resetProducts());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'idle') {
      fetchProductsData();
    }
  }, [status, fetchProductsData]);

  return {
    products: items,
    isLoading: status === 'loading',
    isError: status === 'failed',
    error,
    metadata,
    refetch: fetchProductsData,
    reset: resetProductsData,
  };
};