import { ReviewCard } from "@/components";
import { ProductReview } from "@/types/products";

const RatingReviewTabs = ({ reviews }: { reviews: ProductReview[] }) => {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <h3 className="mb-3 text-2xl font-bold md:col-span-2 lg:col-span-3">
        All Reviews{" "}
        <span className="text-base font-normal text-black/60">(451)</span>
      </h3>

      {reviews.map((item, index) => (
        <ReviewCard key={`revivew-${index}`} {...item} />
      ))}
    </div>
  );
};
export default RatingReviewTabs;
