"use client";

import { ButtonLink, ProductCard, ProductCardSkeleton } from "@/components";
import { useProducts } from "@/hooks/use-products";

const ShopDisplaySection = () => {
  const { products, isLoading, isError } = useProducts({
    limit: 8,
    skip: 8,
    select: [
      "id",
      "title",
      "price",
      "discountPercentage",
      "rating",
      "thumbnail",
    ],
    category: "groceries",
  });

  if (isLoading) {
    return (
      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </section>
    );
  }

  if (isError) {
    return <div>Failed to load products</div>;
  }

  return (
    <section className="flex w-full flex-col items-center space-y-8 py-16 md:space-y-11 lg:space-y-14">
      <h2 className="font-integral text-[2rem] md:text-4xl lg:text-center lg:text-[3rem]">
        Our ITEMS
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <ButtonLink
        link={`/shop`}
        className="w-fit border border-black/10 bg-transparent px-14 py-4 text-black hover:bg-shade-200"
      >
        View All
      </ButtonLink>
    </section>
  );
};
export default ShopDisplaySection;
