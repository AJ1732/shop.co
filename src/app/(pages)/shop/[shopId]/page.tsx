interface ShopIdPageProps {
  params: {
    shopId: string;
  };
}

const ShopIdPage: React.FC<ShopIdPageProps> = ({ params }) => {
  const { shopId } = params;
  return <div>ProductIdPage {shopId}</div>;
};
export default ShopIdPage;
