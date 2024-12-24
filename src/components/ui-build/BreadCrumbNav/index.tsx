"use client";
import React from "react";
import {
  Breadcrumb,
  // BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

interface BreadcrumbNavProps {
  currentLink: string;
  className?: string;
}

const formatSegment = (segment: string): string => {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({
  currentLink,
  className,
}) => {
  const segments = currentLink.split("/").filter(Boolean);
  const paths = segments.map((_, index) => {
    return "/" + segments.slice(0, index + 1).join("/");
  });

  return (
    <Breadcrumb className={cn("py-5 sm:py-6", className)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={paths[index]}
                className="capitalize text-black"
              >
                {formatSegment(segment)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
