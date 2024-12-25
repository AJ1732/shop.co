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
    <div className="lg:space-y-6">
      ProductIdPage {shopId}
      <ProductDisplaySection />
      <ProductTabSection />
    </div>
  );
};
export default ShopIdPage;
