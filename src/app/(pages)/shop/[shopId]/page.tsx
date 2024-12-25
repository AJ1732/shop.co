"use client";

import { useProductById } from "@/hooks/use-products";
import {
  ProductDisplaySection,
  ProductTabSection,
} from "@/components/sections/ShopIdPage";
// import { Loader } from "@/components";

interface ShopIdPageProps {
  params: {
    shopId: string;
  };
}

const ShopIdPage: React.FC<ShopIdPageProps> = ({ params }) => {
  const { shopId } = params;
  const { product, isLoading, isError } = useProductById({ id: shopId });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError || !product) return <div>Error loading product</div>;

  return (
    <div className="lg:space-y-6">
      <ProductDisplaySection product={product} />
      <ProductTabSection product={product} />
    </div>
  );
};

export default ShopIdPage;
