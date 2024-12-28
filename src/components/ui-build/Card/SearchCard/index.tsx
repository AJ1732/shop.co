import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/utils";
import type { Product } from "@/types/products";

interface SearchCardProps {
  product: Pick<Product, "id" | "title" | "price" | "thumbnail">;
  onClose?: () => void;
}

const SearchCard = ({ product, onClose }: SearchCardProps) => {
  return (
    <Link
      href={`/shop/${product.id}`}
      onClick={onClose}
      className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 hover:bg-black/5"
    >
      <figure className="relative aspect-square w-16 overflow-hidden rounded-lg bg-neutral-100">
        <Image
          fill
          src={product.thumbnail}
          alt={product.title}
          className="object-cover"
        />
      </figure>
      <div className="space-y-1">
        <h3 className="font-medium">{product.title}</h3>
        <p className="text-black/60">{formatCurrency(product.price)}</p>
      </div>
    </Link>
  );
};

export default SearchCard;