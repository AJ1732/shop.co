"use client";

import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ButtonLink } from "@/components";
import { useFilter } from "@/provider/filter-context";
import { cn } from "@/lib/utils";

const categories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

const FilterTab = () => {
  const { selectedCategory, setSelectedCategory } = useFilter();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? undefined : category);
  };

  return (
    <div className="space-y-6 border-t border-black/10">
      <Accordion type="multiple">
        <AccordionItem value="category" defaultValue={["category"]}>
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent className="no-scrollbar flex max-h-[calc(100dvh-26rem)] flex-col gap-5 overflow-y-scroll text-left">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={cn(
                  `flex items-center justify-between gap-2 py-1 transition-colors`,
                  selectedCategory === category
                    ? "font-medium text-black"
                    : "text-black/60 hover:text-black/80",
                )}
              >
                <span className="capitalize">{category}</span>
                <ChevronRight className="size-4" />
              </button>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <ButtonLink
        onClick={() => setSelectedCategory(undefined)}
        disabled={!selectedCategory}
        className="w-full py-4 text-sm font-medium disabled:opacity-50"
      >
        Clear Filter
      </ButtonLink>
    </div>
  );
};
export default FilterTab;
