"use client";

import { ChevronRight } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ButtonLink } from "@/components";
import { useFilter } from "@/provider/filter-context";
import { categories } from "@/constants";
import { cn } from "@/lib/utils";

const FilterTab = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { selectedCategory, setSelectedCategory } = useFilter();

  const handleClearFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("category");
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
    setSelectedCategory(undefined);
  };

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
        onClick={handleClearFilter}
        disabled={!selectedCategory}
        className="w-full py-4 text-sm font-medium disabled:opacity-50"
      >
        Clear Filter
      </ButtonLink>
    </div>
  );
};
export default FilterTab;
