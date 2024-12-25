"use client";

import { ProductCard } from "@/components";
import { FilterDrawer, ProductPagination } from "../components";
import { useProducts } from "@/hooks/use-products";

const ProductSection = () => {
  const { products, isLoading, isError, error, metadata, refetch, reset } =
    useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  console.log(products);

  return (
    <div className="grid h-fit w-full grid-cols-2 place-items-center gap-5 sm:grid-cols-3 lg:col-span-3 lg:col-start-2 lg:grid-cols-subgrid">
      {/* HEADER */}
      <div className="col-span-2 flex size-full items-center justify-between sm:col-span-3">
        <h1 className="text-[2rem] font-bold">Shop</h1>

        <div className="flex items-center justify-center gap-6">
          <p className="text-black/60">Showing 1-10 of 100 products</p>

          <div className="flex size-8 items-center justify-center rounded-full bg-shade-200 p-2 lg:hidden">
            <FilterDrawer />
          </div>
        </div>
      </div>

      {[1, 2, 3, 4].map((item) => (
        <ProductCard key={item} id={item} />
      ))}

      {/* PAGINATION */}
      <ProductPagination className="col-span-2 size-full border-t border-black/10 py-5 text-center text-black sm:col-span-3" />
    </div>
  );
};
export default ProductSection;
