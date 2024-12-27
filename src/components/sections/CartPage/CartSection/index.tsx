"use client";
import { CartCard } from "@/components";
import { useCart } from "@/hooks/use-cart";

const CartSection = () => {
  const { items, removeItem, updateItemQuantity } = useCart();
  
  if (!items.length) {
    return (
      <div className="flex h-40 items-center justify-center rounded-[1.25rem] border border-black/10 px-4 lg:px-6">
        <p className="text-black/60">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="h-fit divide-y-2 rounded-[1.25rem] border border-black/10 px-4 lg:px-6">
      {items.map((item) => (
        <CartCard
          key={item.id}
          {...item}
          onRemove={removeItem}
          onQuantityChange={updateItemQuantity}
        />
      ))}
    </div>
  );
};

export default CartSection;
