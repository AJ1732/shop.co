"use client";

import { useParams } from "next/navigation";
import { useProductById } from "@/hooks/use-products";
import {
  ProductDisplaySection,
  ProductTabSection,
} from "@/components/sections/ShopIdPage";
import { ProductDisplaySectionSkeleton, ProductTabSectionSkeleton } from "@/components";

const ShopIdPage = () => {
  const { shopId } = useParams();
  const { product, isLoading, isError } = useProductById({ id: shopId });

  if (true)
    return (
      <div className="lg:space-y-6">
        <ProductDisplaySectionSkeleton />
        <ProductTabSectionSkeleton />
      </div>
    );
  if (isLoading) return <h1>Loading...</h1>;
  if (isError || !product) return <div>Error loading product</div>;

  return (
    <div className="lg:space-y-6">
      {/* <ProductDisplaySection product={product} />
      <ProductTabSection product={product} /> */}
    </div>
  );
};

export default ShopIdPage;
