import { productDetails } from "@/constants/products";
import { ImageDisplay, InfoDisplay } from "./components";

const ProductDisplaySection = ({ id }: { id: string }) => {
  return (
    <div className="grid gap-x-6 max-lg:gap-y-5 lg:grid-cols-[38.125rem_1fr]">
      <ImageDisplay id={id} />
      <InfoDisplay pid={id} {...productDetails} />
    </div>
  );
};
export default ProductDisplaySection;
