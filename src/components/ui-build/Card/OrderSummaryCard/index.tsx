"use client";
import { useState } from "react";
import { ArrowRight, Tag } from "lucide-react";
import { ButtonLink, InputField } from "@/components";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/utils";

interface OrderSummaryCardProps {
  onCheckout?: () => void;
}

const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({ onCheckout }) => {
  const [promoCode, setPromoCode] = useState("");
  const { subtotal, discount, deliveryFee, total, applyPromo } = useCart();

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      applyPromo(promoCode);
      setPromoCode("");
    }
  };

  return (
    <Card className="h-fit max-w-[31.5rem] rounded-[1.25rem] border-black/10 px-6 [&>*]:px-0">
      <CardHeader className="pt-5">
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 [&>div>p:nth-child(1)]:text-black/60 [&>div>p:nth-child(2)]:font-bold [&>div]:flex [&>div]:w-full [&>div]:items-center [&>div]:justify-between [&>div]:text-xl">
        <div>
          <p>Subtotal</p>
          <p>{formatCurrency(subtotal)}</p>
        </div>
        <div>
          <p>Discount</p>
          <p className="text-warn">-{formatCurrency(discount)}</p>
        </div>
        <div>
          <p>Delivery Fee</p>
          <p>{formatCurrency(deliveryFee)}</p>
        </div>
      </CardContent>
      <CardFooter className="w-full flex-col gap-6 border-t border-black/10 pb-5 pt-6">
        <div className="flex w-full items-center justify-between text-xl">
          <p>Total</p>
          <p className="text-2xl font-semibold">{formatCurrency(total)}</p>
        </div>

        <div className="grid w-full grid-cols-[1fr_7rem] gap-3">
          <InputField
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Add promo code"
            className="w-full border-none bg-shade-200 placeholder:text-black/40"
            startIcon={<Tag color="#00000066" />}
          />
          <ButtonLink
            onClick={handleApplyPromo}
            disabled={!promoCode.trim()}
            className="h-full max-h-12"
          >
            Apply
          </ButtonLink>
        </div>

        <ButtonLink onClick={onCheckout} className="w-full space-x-3 py-6">
          <span>Go to Checkout</span>
          <ArrowRight />
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};
export default OrderSummaryCard;
