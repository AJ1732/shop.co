"use client";

import { useState } from "react";
import {
  ProductCard,
  ProductCardSkeleton,
  ProductPaginationSkeleton,
  ProductSectionHeaderSkeleton,
} from "@/components";
import { FilterDrawer, ProductPagination } from "../components";
import { usePaginatedProducts } from "@/hooks/use-products";

const ProductSection = () => {
  const [page, setPage] = useState(1);
  const { products, isError, isLoading, total, error } = usePaginatedProducts({
    limit: 10,
    skip: (page - 1) * 10,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) {
    return (
      <div className="grid h-fit w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:col-span-3 lg:col-start-2 lg:grid-cols-subgrid">
        <ProductSectionHeaderSkeleton />

        {[1, 2, 3, 4].map((product) => (
          <ProductCardSkeleton key={product} />
        ))}

        <ProductPaginationSkeleton className="mt-10" />
      </div>
    );
  }

  if (isError) {
    return <h1>Error Occurred: {error}</h1>;
  }

  const displayStart = (page - 1) * 10 + 1;
  const displayEnd = Math.min(page * 10, total);

  return (
    <div className="grid h-fit w-full grid-cols-2 place-items-center gap-5 sm:grid-cols-3 lg:col-span-3 lg:col-start-2 lg:grid-cols-subgrid">
      <header className="col-span-2 flex size-full items-center justify-between sm:col-span-3">
        <h1 className="text-[2rem] font-bold">Shop</h1>

        <div className="flex items-center justify-center gap-3 lg:gap-6">
          <p className="text-black/60">
            Showing {displayStart}-{displayEnd} of {total} products
          </p>

          <div className="flex size-8 items-center justify-center rounded-full bg-shade-200 p-2 lg:hidden">
            <FilterDrawer />
          </div>
        </div>
      </header>

      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}

      <ProductPagination
        total={total}
        currentPage={page}
        onPageChange={handlePageChange}
        className="col-span-2 mb-12 mt-4 sm:col-span-3 md:mb-20"
      />
    </div>
  );
};

export default ProductSection;
