import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils";

interface PriceDisplayProps {
  price: number;
  discountPercentage: number;
  className?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  discountPercentage,
  className,
}) => {
  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div className={cn("flex items-center justify-start gap-2.5 text-[2rem] font-bold", className)}>
      <p>{formatCurrency(discountedPrice)}</p>
      <p className="text-black/30 line-through">{formatCurrency(price)}</p>
      <p className="w-fit rounded-full bg-warn/10 px-3.5 py-1.5 text-sm font-medium text-warn">
        -{discountPercentage}%
      </p>
    </div>
  );
};

export default PriceDisplay;
