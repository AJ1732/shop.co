import { FilterSection } from "@/components/sections/ShopPage";

const ShopPage = () => {
  return (
    <section className="relative grid gap-5 lg:grid-cols-4">
      <FilterSection />

      <div className="grid size-full grid-cols-2 place-items-center gap-y-5 lg:col-span-3 lg:col-start-2 lg:grid-cols-subgrid">
        Items
      </div>
    </section>
  );
};
export default ShopPage;
