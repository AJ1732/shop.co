"use client";
import { createContext, useContext, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilterContextType {
  selectedCategory: string | undefined;
  setSelectedCategory: (category: string | undefined) => void;
}

interface FilterContextProps {
  children: React.ReactNode;
  initialCategory?: string;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<FilterContextProps> = ({
  children,
  initialCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    initialCategory,
  );
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleCategoryChange = (category: string | undefined) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`${pathname}?${params.toString()}`);
    setSelectedCategory(category);
  };

  return (
    <FilterContext.Provider
      value={{ selectedCategory, setSelectedCategory: handleCategoryChange }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error("useFilter must be used within FilterProvider");
  return context;
};
