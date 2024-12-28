import { FilterSection, ProductSection } from "@/components/sections/ShopPage";
import { FilterProvider } from "@/provider/filter-context";

interface ShopPageProps {
  searchParams: {
    page?: string;
    category?: string;
  };
}

const ShopPage: React.FC<ShopPageProps> = ({ searchParams }) => {
  const page = Number(searchParams.page) || 1;

  return (
    <FilterProvider initialCategory={searchParams.category}>
      <section className="relative grid gap-5 lg:grid-cols-4">
        <FilterSection />
        <ProductSection initialPage={page} />
      </section>
    </FilterProvider>
  );
};
export default ShopPage;
