import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/utils";

export interface CartCardProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  category: string;
  thumbnail: string;
  discountPercentage: number;
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const CartCard: React.FC<CartCardProps> = ({
  id,
  title,
  price,
  quantity,
  category,
  thumbnail,
  discountPercentage,
  onRemove,
  onQuantityChange,
}) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      onQuantityChange(id, newQuantity);
    }
  };

  const discountedPrice = price * (1 - discountPercentage / 100);

  return (
    <Card className="flex w-full items-center justify-start gap-4 rounded-none border-0 py-4 shadow-none md:py-6">
      <figure className="aspect-square min-w-[6.1875rem] rounded-lg bg-[#F0EEED] lg:min-w-[7.75rem]">
        <Image
          src={thumbnail}
          alt={title}
          // width={124}
          // height={124}
          className="size-full object-cover"
          fill
        />
      </figure>

      <div className="flex size-full items-center justify-between">
        <div className="flex h-full flex-col items-start justify-between gap-7 *:p-0">
          <CardHeader className="space-y-0.5">
            <CardTitle className="text-base capitalize md:text-xl">
              {title}
            </CardTitle>
            <CardDescription className="text-xs text-black md:text-sm [&>span]:block">
              <span>
                Category: <span className="text-black/60">{category}</span>
              </span>
            </CardDescription>
          </CardHeader>

          <CardContent className="text-xl font-bold md:text-2xl">
            <p>{formatCurrency(discountedPrice)}</p>
          </CardContent>
        </div>

        <div className="flex h-full flex-col items-end justify-between gap-8">
          <button
            type="button"
            onClick={() => onRemove(id)}
            className="rounded-full bg-red-50 p-2"
          >
            <Trash2 className="size-5 stroke-red-500 lg:size-6" />
          </button>

          <div className="flex items-center justify-center gap-4 rounded-full bg-shade-200 px-4 py-1.5 text-sm font-medium lg:gap-5 lg:px-6 lg:py-3">
            <button
              type="button"
              onClick={() => handleQuantityChange(quantity - 1)}
              className="active:scale-90"
            >
              <Minus className="size-4 lg:size-5" />
            </button>
            <span>{quantity}</span>

            <button
              type="button"
              onClick={() => handleQuantityChange(quantity + 1)}
              className="active:scale-90"
            >
              <Plus className="size-4 lg:size-5" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default CartCard;
