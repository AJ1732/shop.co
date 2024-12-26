import { ButtonLink, ProductCardSkeleton } from "@/components";

const ShopDisplaySection = () => {
  return (
    <section className="flex w-full flex-col items-center space-y-8 py-16 md:space-y-11 lg:space-y-14">
      <h2 className="font-integral text-[2rem] md:text-4xl lg:text-center lg:text-[3rem]">
        Our ITEMS
      </h2>

      <div className="flex items-center justify-between gap-4">
        {[1, 2, 3, 4].map((item) => (
          <ProductCardSkeleton key={item} />
        ))}
      </div>

      <ButtonLink
        link={`/shop`}
        className="w-fit border border-black/10 bg-transparent px-14 py-4 text-black hover:bg-shade-200"
      >
        View All
      </ButtonLink>
    </section>
  );
};
export default ShopDisplaySection;
