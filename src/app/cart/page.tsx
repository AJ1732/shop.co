import { CartCard } from "@/components";

const CartPage = () => {
  return (
    <section className="grid grid-cols-[44rem_32rem] gap-5 space-y-5 pb-20 pt-6 sm:space-y-6">
      <h2 className="col-span-2 font-integral text-[2rem] md:text-4xl lg:text-[3rem]">
        Your Cart
      </h2>

      <div className="divide-y-2 rounded-[1.25rem] border border-black/10 px-4 lg:px-6">
        <CartCard title="Gradient Graphic T-shirt" />
        <CartCard title="Gradient Graphic T-shirt" />
      </div>
    </section>
  );
};
export default CartPage;
