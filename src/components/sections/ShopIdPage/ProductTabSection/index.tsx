import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productDetails } from "@/constants/products";

const Loader = () => <div>Loading...</div>;

// LAZY LOAD COMPONENTS
const ProductDetailsTab = dynamic(
  () => import("./components").then((mod) => mod.ProductDetailsTab),
  { loading: () => <Loader /> },
);

const RatingRevewsTab = dynamic(
  () => import("./components").then((mod) => mod.RatingRevewsTab),
  { loading: () => <Loader /> },
);

const ProductTabSection = ({ id }: { id: string }) => {
  return (
    <Tabs defaultValue="details" className="pb-8">
      <TabsList className="w-full">
        <TabsTrigger value="details" className="w-full">
          Product Details
        </TabsTrigger>
        <TabsTrigger value="ratings-reviews" className="w-full">
          Rating & Reviews
        </TabsTrigger>
      </TabsList>

      <TabsContent value="details">
        <ProductDetailsTab product={productDetails} id={id} />
      </TabsContent>
      <TabsContent value="ratings-reviews">
        <RatingRevewsTab id={id} />
      </TabsContent>
    </Tabs>
  );
};
export default ProductTabSection;
