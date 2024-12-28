"use client";

import { useParams } from "next/navigation";
import { useProducts } from "@/hooks/use-products";
import {
  ProductDisplaySection,
  ProductTabSection,
} from "@/components/sections/ShopIdPage";
import {
  ProductDisplaySectionSkeleton,
  ProductTabSectionSkeleton,
} from "@/components";

const ShopIdPage = () => {
  const { shopId } = useParams();
  const { product, isLoading, isError } = useProducts({
    id: Array.isArray(shopId) ? shopId[0] : shopId,
  });

  if (isLoading)
    return (
      <div className="lg:space-y-6">
        <ProductDisplaySectionSkeleton />
        <ProductTabSectionSkeleton />
      </div>
    );

  if (isError || !product) return <div>Error loading product</div>;

  return (
    <div className="lg:space-y-6">
      <ProductDisplaySection product={product} />
      <ProductTabSection product={product} />
    </div>
  );
};

export default ShopIdPage;
