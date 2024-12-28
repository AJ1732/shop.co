"use client";
import { useState, useEffect, useRef } from "react";
import { SearchIcon, X } from "lucide-react";
import { InputField, SearchCard } from "@/components";
import { useSearchProducts } from "@/hooks/use-search-products";

const SearchField = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const { results, isLoading } = useSearchProducts({
    query: query.length >= 3 ? query : "",
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full lg:max-w-[36rem]" ref={searchRef}>
      <InputField
        startIcon={<SearchIcon />}
        endIcon={
          query ? (
            <X onClick={() => setQuery("")} className="cursor-pointer" />
          ) : undefined
        }
        placeholder="Search for products..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        className="w-full bg-shade-200"
        iconProps={{
          className: "stroke-black/40",
        }}
      />

      {isOpen && query.length >= 3 && (
        <div className="no-scrollbar absolute left-0 right-0 top-full z-50 mt-2 max-h-[80vh] overflow-auto rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
          {isLoading ? (
            <p className="p-2 text-black/60">Searching...</p>
          ) : results.length > 0 ? (
            <div className="divide-y divide-black/10">
              {results.map((product) => (
                <SearchCard
                  key={product.id}
                  product={product}
                  onClose={() => setIsOpen(false)}
                />
              ))}
            </div>
          ) : (
            <p className="p-2 text-black/60">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchField;
