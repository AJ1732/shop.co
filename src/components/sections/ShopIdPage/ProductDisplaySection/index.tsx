import { Product } from "@/types/products";
import { ImageDisplay, InfoDisplay } from "./components";

interface ProductDisplaySectionProps {
  product: Product;
}

const ProductDisplaySection = ({ product }: ProductDisplaySectionProps) => {
  return (
    <div className="grid gap-x-6 max-lg:gap-y-5 lg:grid-cols-[38.125rem_1fr]">
      <ImageDisplay images={product.images} />
      <InfoDisplay product={product} />
    </div>
  );
};

export default ProductDisplaySection;