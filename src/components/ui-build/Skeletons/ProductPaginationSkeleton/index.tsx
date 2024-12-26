import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

interface PaginationSkeletonProps {
  className?: string;
}

const PaginationSkeleton = ({ className }: PaginationSkeletonProps) => {
  return (
    <Pagination
      className={cn("col-span-2 mb-12 mt-4 sm:col-span-3 md:mb-20", className)}
    >
      <PaginationContent className="flex w-full items-center justify-between">
        <PaginationItem>
          <Skeleton className="h-10 w-24 rounded-md" />
        </PaginationItem>

        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <PaginationItem key={index}>
              <Skeleton className="size-10 rounded-md" />
            </PaginationItem>
          ))}
        </div>

        <PaginationItem>
          <Skeleton className="h-10 w-24 rounded-md" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSkeleton;
