import { Product } from "@/types/products";

const DetailRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="grid grid-cols-2 border-b border-black/10 py-4">
    <span className="text-black/60">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

interface ProductDetailsTabProps {
  product: Product;
}

const ProductDetailsTab: React.FC<ProductDetailsTabProps> = ({
  product,
}) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="space-y-1">
        <h3 className="mb-4 font-bold">Product Details</h3>
        <DetailRow label="Brand" value={product.brand} />
        <DetailRow label="SKU" value={product.sku} />
        <DetailRow label="Weight" value={`${product.weight} kg`} />
        <DetailRow
          label="Dimensions"
          value={`${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm`}
        />
      </div>

      <div className="space-y-1">
        <h3 className="mb-4 font-bold">Shipping Information</h3>
        <DetailRow label="Status" value={product.availabilityStatus} />
        <DetailRow label="Shipping" value={product.shippingInformation} />
        <DetailRow label="Min Order Qty" value={product.minimumOrderQuantity} />
        <DetailRow label="Return Policy" value={product.returnPolicy} />
      </div>

      <div className="space-y-1">
        <h3 className="mb-4 font-bold">Additional Info</h3>
        <DetailRow label="Category" value={product.category} />
        <DetailRow label="Tags" value={product.tags.join(", ")} />
        <DetailRow label="Warranty" value={product.warrantyInformation} />
        <DetailRow label="Stock" value={product.stock} />
      </div>
    </div>
  );
};

export default ProductDetailsTab;
