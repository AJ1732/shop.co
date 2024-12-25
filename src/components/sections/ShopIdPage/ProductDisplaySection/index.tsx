import { productDetails } from "@/constants/products";
import { ImageDisplay, InfoDisplay } from "./components";

const ProductDisplaySection = () => {
  return (
    <div className="grid gap-x-6 max-lg:gap-y-5 lg:grid-cols-[38.125rem_1fr]">
      <ImageDisplay />
      <InfoDisplay {...productDetails} />
    </div>
  );
};
export default ProductDisplaySection;
