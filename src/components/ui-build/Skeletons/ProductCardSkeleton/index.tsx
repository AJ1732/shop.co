import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ProductCardSkeletonProps {
  className?: string;
}

const ProductCardSkeleton = ({ className }: ProductCardSkeletonProps) => {
  return (
    <Card
      className={cn("relative w-full border-0 shadow-none *:p-0", className)}
    >
      <Skeleton className="mb-4 aspect-[86/87] w-full rounded-[1.25rem]" />

      <CardHeader>
        <Skeleton className="h-6 w-3/4 md:h-7" />
        <Skeleton className="mt-2 h-4 w-24" />
      </CardHeader>

      <CardContent className="mt-2 sm:mt-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-7 w-20 sm:h-8" />
          <Skeleton className="h-7 w-16 sm:h-8" />
          <Skeleton className="h-7 w-12 rounded-full sm:h-8" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardSkeleton;
