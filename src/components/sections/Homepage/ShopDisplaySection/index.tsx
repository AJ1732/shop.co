import { ButtonLink } from "@/components";

const ShopDisplaySection = () => {
  return (
    <section className="space-y-8 pt-16 md:space-y-11 lg:space-y-14">
      <h2 className="font-integral text-[2rem] md:text-4xl lg:text-center lg:text-[3rem]">
        Our ITEMS
      </h2>

      <div className="flex items-center justify-center">
        <ButtonLink
          link={`/shop`}
          className="border border-black/10 bg-transparent px-14 py-4 text-black hover:bg-shade-200"
        >
          View All
        </ButtonLink>
      </div>
    </section>
  );
};
export default ShopDisplaySection;
