"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  ProductCard,
  ProductCardSkeleton,
  ProductPaginationSkeleton,
  ProductSectionHeaderSkeleton,
  ProductPagination,
} from "@/components";
import { FilterDrawer } from "../components";
import { useFilter } from "@/provider/filter-context";
import { useProducts } from "@/hooks/use-products";

interface ProductSectionProps {
  initialPage: number;
}

const ProductSection: React.FC<ProductSectionProps> = ({ initialPage }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [page, setPage] = useState(initialPage);
  const { selectedCategory } = useFilter();

  const { products, isError, isLoading, total, error } = useProducts({
    category: selectedCategory,
    limit: 10,
    skip: (page - 1) * 10,
  });

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    if (selectedCategory) {
      params.set("category", selectedCategory);
    }
    router.push(`${pathname}?${params.toString()}`);
    setPage(newPage);
  };

  useEffect(() => {
    setPage(initialPage);
  }, [initialPage]);

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

  if (isError) return <div>Error: {error}</div>;

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
