import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const ProductPagination = ({ className }: { className?: string }) => {
  return (
    <Pagination className={cn("w-full", className)}>
      <PaginationContent className="flex w-full justify-between">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        <div className="flex gap-2">
          {[1, 2, 3].map((item) => (
            <PaginationItem key={item}>
              <PaginationLink href="#" isActive={item === 1}>
                {item}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        </div>

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
