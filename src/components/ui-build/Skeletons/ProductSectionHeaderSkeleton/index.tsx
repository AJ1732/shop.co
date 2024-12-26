import { Skeleton } from "@/components/ui/skeleton";

const ProductSectionHeaderSkeleton = () => {
  return (
    <div className="col-span-2 flex size-full items-center justify-between sm:col-span-3">
      <Skeleton className="h-10 w-32" />

      <div className="flex items-center justify-center gap-6">
        <Skeleton className="h-6 w-52" />

        <div className="lg:hidden">
          <Skeleton className="size-8 rounded-full" />
        </div>
      </div>
      
    </div>
  );
};

export default ProductSectionHeaderSkeleton;
