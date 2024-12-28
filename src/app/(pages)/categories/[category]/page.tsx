"use client";
import { useState } from "react";
import {
  ProductCard,
  ProductCardSkeleton,
  ProductPagination,
} from "@/components";
import { useProducts } from "@/hooks/use-products";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  const { category } = params;
  const [page, setPage] = useState(1);
  const { products, isLoading, isError, total, error } = useProducts({
    category,
    limit: 12,
    skip: (page - 1) * 12,
    // select: [
    //   "id",
    //   "title",
    //   "price",
    //   "discountPercentage",
    //   "rating",
    //   "thumbnail",
    //   "category"
    // ]
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h1 className="font-integral text-[2rem] capitalize md:text-4xl lg:text-[3rem]">
          {category.split("-").join(" ")}
        </h1>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <ProductCardSkeleton key={item} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) return <div>Error: {error}</div>;

  return (
    <div className="flex h-full flex-col gap-6 pb-28">
      <header className="flex items-center justify-between max-md:flex-col max-md:items-start">
        <h1 className="font-integral text-[2rem] capitalize md:text-4xl lg:text-[3rem]">
          {category.split("-").join(" ")}
        </h1>
        <p className="text-black/60">
          {total} {total === 1 ? "Product" : "Products"}
        </p>
      </header>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <ProductPagination
        total={total}
        currentPage={page}
        itemsPerPage={12}
        onPageChange={handlePageChange}
        className="mt-auto"
      />
    </div>
  );
};

export default CategoryPage;
