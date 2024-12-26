import { SlidersHorizontal } from "lucide-react";
import { FilterTab } from "../components";

const FilterSection = () => {
  return (
    <div className="h-fit w-full space-y-6 rounded-[1.25rem] border-black/10 px-6 py-5 max-lg:hidden lg:sticky lg:top-[6.5rem] lg:mb-4 lg:max-w-[18.5rem] lg:border">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Filters</h2>
        <SlidersHorizontal className="size-6 rotate-90 bg-white text-black/40" />
      </div>

      <FilterTab />
    </div>
  );
};
export default FilterSection;
