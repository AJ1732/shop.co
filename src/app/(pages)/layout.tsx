"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { BreadCrumbNav } from "@/components";

const PagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center gap-4 lg:gap-8">
        <button
          onClick={() => router.back()}
          className="rounded-full bg-gray-100 p-2"
        >
          <ChevronLeft />
        </button>

        <BreadCrumbNav currentLink={pathname} />
      </div>
      {children}
    </div>
  );
};
export default PagesLayout;
