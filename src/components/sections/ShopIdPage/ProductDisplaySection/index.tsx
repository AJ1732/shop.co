import { ImageDisplay, InfoDisplay } from "./components";

const productDetails = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  description:
    "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  category: "beauty",
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
  tags: ["beauty", "mascara"],
  brand: "Essence",
  sku: "RCH45Q1A",
  weight: 2,
  dimensions: {
    width: 23.17,
    height: 14.43,
    depth: 28.01,
  },
  warrantyInformation: "1 month warranty",
  shippingInformation: "Ships in 1 month",
  availabilityStatus: "Low Stock",
  returnPolicy: "30 days return policy",
  minimumOrderQuantity: 24,
  meta: {
    createdAt: "2024-05-23T08:56:21.618Z",
    updatedAt: "2024-05-23T08:56:21.618Z",
    barcode: "9164035109868",
    qrCode: "...",
  },
  thumbnail: "...",
  images: ["...", "...", "..."],
};

const ProductDisplaySection = () => {
  return (
    <div className="grid gap-x-6 max-lg:gap-y-5 lg:grid-cols-[38.125rem_1fr]">
      <ImageDisplay />
      <InfoDisplay {...productDetails} />
    </div>
  );
};
export default ProductDisplaySection;
