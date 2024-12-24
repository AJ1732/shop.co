import { OrderSummaryCard } from "@/components";
import { CartSection } from "@/components/sections/CartPage";

const CartPage = () => {
  return (
    <section className="grid gap-5 space-y-5 pb-20 sm:space-y-6 lg:grid-cols-[1fr_40%]">
      <h2 className="font-integral text-[2rem] md:text-4xl lg:col-span-2 lg:text-[3rem]">
        Your Cart
      </h2>
      <CartSection />
      <OrderSummaryCard />
    </section>
  );
};
export default CartPage;
