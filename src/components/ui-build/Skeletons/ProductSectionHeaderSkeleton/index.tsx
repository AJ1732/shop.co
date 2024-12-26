import { Skeleton } from "@/components/ui/skeleton";

const ProductSectionHeaderSkeleton = () => {
  return (
    <div className="col-span-2 flex size-full items-center justify-between sm:col-span-3">
      <Skeleton className="h-10 w-28 sm:w-32" />

      <div className="flex items-center justify-center gap-3 lg:gap-6">
        <Skeleton className="h-6 w-40 sm:w-52" />

        <div className="lg:hidden">
          <Skeleton className="size-8 rounded-full" />
        </div>
      </div>
      
    </div>
  );
};

export default ProductSectionHeaderSkeleton;
