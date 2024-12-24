import { CartCard } from "@/components";

const CartSection = () => {
  return (
    <div className="h-fit divide-y-2 rounded-[1.25rem] border border-black/10 px-4 lg:px-6">
      <CartCard title="Gradient Graphic T-shirt" />
      <CartCard title="Gradient Graphic T-shirt" />
      <CartCard title="Gradient Graphic T-shirt" />
    </div>
  );
};
export default CartSection;
