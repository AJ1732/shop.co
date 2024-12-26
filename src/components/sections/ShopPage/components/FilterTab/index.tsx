"use client";

import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ButtonLink } from "@/components";

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
  return (
    <div className="space-y-6 border-t border-black/10">
      <Accordion type="multiple">
        <AccordionItem value="category" defaultValue={["category"]}>
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent className="no-scrollbar flex max-h-[calc(100dvh-16rem)] flex-col gap-5 overflow-y-scroll text-left">
            {categories.map((category) => (
              <button
                key={category}
                className={`flex items-center justify-between gap-2 py-1 text-black/60 transition-colors hover:text-black/80`}
              >
                <span className="capitalize">{category}</span>
                <ChevronRight className="size-4" />
              </button>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>Tageted Price</AccordionContent>
        </AccordionItem> */}
      </Accordion>

      <ButtonLink
        disabled
        className="w-full py-4 text-sm font-medium disabled:opacity-50"
      >
        {true ? "Applying..." : "Apply Filter"}
      </ButtonLink>
    </div>
  );
};
export default FilterTab;
