import { ReviewCard } from "@/components";

const RatingReviewTabs = () => {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <h3 className="mb-3 text-2xl font-bold md:col-span-2">
        All Reviews{" "}
        <span className="text-base font-normal text-black/60">(451)</span>
      </h3>

      {[1, 2, 3, 4].map((item) => (
        <ReviewCard key={item} />
      ))}
    </div>
  );
};
export default RatingReviewTabs;
