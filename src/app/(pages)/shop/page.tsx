import { FilterSection, ProductSection } from "@/components/sections/ShopPage";

const ShopPage = () => {
  return (
    <section className="relative grid gap-5 lg:grid-cols-4">
      <FilterSection />
      <ProductSection />
    </section>
  );
};
export default ShopPage;
