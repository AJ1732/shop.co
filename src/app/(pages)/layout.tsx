"use client";

import { usePathname } from "next/navigation";
import { BreadCrumbNav } from "@/components";

const PagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  return (
    <div>
      <BreadCrumbNav currentLink={pathname} />
      {children}
    </div>
  );
};
export default PagesLayout;
