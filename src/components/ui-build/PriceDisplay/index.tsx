import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils";

interface PriceDisplayProps {
  price: number;
  discountPercentage: number;
  className?: string;
  mobile?: boolean;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  discountPercentage,
  className,
  mobile = false,
}) => {
  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div
      className={cn(
        "flex items-center justify-start gap-2.5 text-[2rem] font-bold",
        className,
      )}
    >
      <p>{formatCurrency(discountedPrice)}</p>
      <p className="text-black/30 line-through">{formatCurrency(price)}</p>
      <p
        className={cn(
          "w-fit rounded-full bg-warn/10 px-3.5 py-1.5 text-sm font-medium text-warn",
          mobile && "right-2 top-2 max-sm:absolute",
        )}
      >
        -{discountPercentage}%
      </p>
    </div>
  );
};

export default PriceDisplay;
