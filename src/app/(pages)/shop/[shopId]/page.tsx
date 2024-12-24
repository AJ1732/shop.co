import {
  ProductDisplaySection,
  ProductTabSection,
} from "@/components/sections/ShopIdPage";

interface ShopIdPageProps {
  params: {
    shopId: string;
  };
}

const ShopIdPage: React.FC<ShopIdPageProps> = ({ params }) => {
  const { shopId } = params;
  return (
    <div>
      ProductIdPage {shopId}
      <ProductDisplaySection />
      <ProductTabSection />
    </div>
  );
};
export default ShopIdPage;
