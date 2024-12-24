import { ButtonLink } from "@/components";

const FilterTab = () => {
  return (
    <div className="space-y-6">
      <hr />

      <div>Category</div>

      <hr />

      <div>Price</div>

      <hr />

      <ButtonLink className="w-full py-4 text-sm font-medium">
        Apply Filter
      </ButtonLink>
    </div>
  );
};
export default FilterTab;
