import { BreadCrumbNav } from "@/components";

const PagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <BreadCrumbNav />
      {children}
    </div>
  );
};
export default PagesLayout;
