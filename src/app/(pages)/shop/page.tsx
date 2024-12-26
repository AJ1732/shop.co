import { FilterSection, ProductSection } from "@/components/sections/ShopPage";
import { FilterProvider } from "@/provider/filter-context";

const ShopPage = () => {
  return (
    <FilterProvider>
      <section className="relative grid gap-5 lg:grid-cols-4">
        <FilterSection />
        <ProductSection />
      </section>
    </FilterProvider>
  );
};
export default ShopPage;
