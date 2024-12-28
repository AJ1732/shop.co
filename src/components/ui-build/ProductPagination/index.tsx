"use client";

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

interface ProductPaginationProps {
  total: number;
  currentPage: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const ProductPagination = ({
  total,
  currentPage,
  itemsPerPage = 10,
  onPageChange,
  className,
}: ProductPaginationProps) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={`?page=${i}`}
              isActive={currentPage === i}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }
    } else {
      // FIRST PAGE
      pages.push(
        <PaginationItem key={1}>
          <PaginationLink
            href="?page=1"
            isActive={currentPage === 1}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>,
      );

      // ADD ELLIPSIS IF NEEDED
      if (currentPage > 3) {
        pages.push(
          <PaginationItem key="ellipsis1">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      // CURRENT PAGE AND SURROUNDING PAGES
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={`?page=${i}`}
              isActive={currentPage === i}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }

      // ADD ELLIPSIS IS NEEDED
      if (currentPage < totalPages - 2) {
        pages.push(
          <PaginationItem key="ellipsis2">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      // LAST PAGE
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href={`?page=${totalPages}`}
            isActive={currentPage === totalPages}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pages;
  };

  return (
    <Pagination className={className}>
      <PaginationContent className="flex w-full items-center justify-between">
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${currentPage - 1}`}
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            className={cn(
              currentPage <= 1 &&
                "pointer-events-none cursor-not-allowed opacity-50",
            )}
          />
        </PaginationItem>

        <div className="flex items-center justify-center gap-2">
          {renderPageNumbers()}
        </div>

        <PaginationItem>
          <PaginationNext
            href={`?page=${currentPage + 1}`}
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            className={cn(
              currentPage >= totalPages &&
                "pointer-events-none cursor-not-allowed opacity-50",
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
