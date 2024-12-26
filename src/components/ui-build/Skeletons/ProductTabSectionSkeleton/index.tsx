import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductTabSectionSkeleton = () => {
  return (
    <Tabs defaultValue="details" className="pb-8">
      <TabsList className="w-full">
        <TabsTrigger value="details" className="w-full">
          Product Details
        </TabsTrigger>
        <TabsTrigger value="ratings-reviews" className="w-full">
          Rating & Reviews
        </TabsTrigger>
      </TabsList>

      <TabsContent value="details">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* PRODUCT DETAILS COLUMN */}
          <div className="space-y-1">
            <Skeleton className="mb-4 h-7 w-36" />
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-b border-black/10 py-4"
              >
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-32" />
              </div>
            ))}
          </div>

          {/* SHIPPING INFORMATION COLUMN */}
          <div className="space-y-1">
            <Skeleton className="mb-4 h-7 w-44" />
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-b border-black/10 py-4"
              >
                <Skeleton className="h-6 w-28" />
                <Skeleton className="h-6 w-36" />
              </div>
            ))}
          </div>

          {/* ADDITIONAL INFO COLUMN */}
          <div className="space-y-1">
            <Skeleton className="mb-4 h-7 w-32" />
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-b border-black/10 py-4"
              >
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-40" />
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="ratings-reviews">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="mb-3 h-8 w-48 md:col-span-2 lg:col-span-3" />

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-[1.25rem] border border-black/10 p-6"
            >
              <div className="space-y-4">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-5 w-36" />
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabSectionSkeleton;
