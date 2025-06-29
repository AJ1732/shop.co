"use client";

import { useParams } from "next/navigation";
import { useProducts } from "@/hooks/use-products";
import { ProductTabSection } from "@/components/sections/ShopIdPage";
import {
  ProductDisplaySectionSkeleton,
  ProductTabSectionSkeleton,
} from "@/components";
import {
  ImageDisplay,
  InfoDisplay,
} from "@/components/sections/ShopIdPage/components";

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
      <div className="grid gap-x-6 max-lg:gap-y-5 lg:grid-cols-[38.125rem_1fr]">
        <ImageDisplay images={product.images} />
        <InfoDisplay product={product} />
      </div>
      <ProductTabSection product={product} />
    </div>
  );
};

export default ShopIdPage;
