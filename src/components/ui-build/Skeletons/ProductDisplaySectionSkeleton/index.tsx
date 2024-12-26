import { Skeleton } from "@/components/ui/skeleton";

const ProductDisplaySectionSkeleton = () => {
  return (
    <div className="grid gap-x-6 max-lg:gap-y-5 lg:grid-cols-[38.125rem_1fr]">
      {/* IMAGE DISPLAY SKELETON */}
      <div className="grid gap-3.5 md:grid-cols-[9.5rem_1fr]">
        <div className="flex w-full gap-3.5 md:flex-col">
          {[1, 2, 3].map((index) => (
            <Skeleton
              key={index}
              className="relative aspect-square w-full rounded-[1.25rem] md:aspect-[19/21] md:max-w-[9.5rem]"
            />
          ))}
        </div>

        <Skeleton className="relative aspect-[179/145] w-full rounded-[1.25rem] max-md:row-start-1 lg:aspect-[222/265]" />
      </div>

      {/* INFO DISPLAY SKELETON */}
      <div className="flex flex-col divide-y divide-black/10">
        <header className="pb-6">
          <Skeleton className="h-10 w-3/4 md:h-12 lg:h-14" />
          <Skeleton className="mt-4 h-6 w-32" />
          <Skeleton className="mt-4 h-8 w-48" />
          <Skeleton className="mt-4 h-20 w-full" />
        </header>

        <div className="space-y-4 py-6">
          <Skeleton className="h-6 w-16" />
          <div className="mt-2 flex flex-wrap gap-2">
            {[1, 2, 3].map((index) => (
              <Skeleton key={index} className="h-10 w-24 rounded-full" />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-5 py-6">
          <Skeleton className="h-14 w-36 rounded-full" />
          <Skeleton className="h-14 flex-1 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplaySectionSkeleton;
