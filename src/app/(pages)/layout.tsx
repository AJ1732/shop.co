"use client";

import { usePathname } from "next/navigation";
import { BreadCrumbNav } from "@/components";

const PagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const currentRoute = pathname.split("/").filter(Boolean).pop() || "Home";

  return (
    <div>
      <BreadCrumbNav currentLink={pathname} currentRoute={currentRoute} />
      {children}
    </div>
  );
};
export default PagesLayout;
