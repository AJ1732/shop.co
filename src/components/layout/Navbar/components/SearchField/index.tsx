import { SearchIcon } from "lucide-react";
import { InputField } from "@/components";

const SearchField = () => {
  return (
    <div>
      <InputField
        startIcon={<SearchIcon />}
        placeholder="Search for products..."
        className="ml-auto min-w-[36rem] bg-shade-200 max-lg:hidden"
        iconProps={{
          className: "max-lg:hidden stroke-black/40",
        }}
      />
    </div>
  );
};
export default SearchField;
