import { formatCurrency } from "@/utils";

interface PriceDisplayProps {
  price: number;
  discountPercentage: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  discountPercentage,
}) => {
  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div className="flex items-center justify-start gap-2.5">
      <p className="text-[2rem] font-bold">{formatCurrency(discountedPrice)}</p>
      <p className="text-[2rem] font-bold text-black/30 line-through">
        {formatCurrency(price)}
      </p>
      <p className="w-fit rounded-full bg-warn/10 px-3.5 py-1.5 text-sm font-medium text-warn">
        -{discountPercentage}%
      </p>
    </div>
  );
};

export default PriceDisplay;
