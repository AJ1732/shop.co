import { ReviewCard } from "@/components";

const reviews = [
  {
    rating: 2,
    comment: "Very unhappy with my purchase!",
    date: "2024-05-23T08:56:21.618Z",
    reviewerName: "John Doe",
    reviewerEmail: "john.doe@x.dummyjson.com",
  },
  {
    rating: 2,
    comment: "Not as described!",
    date: "2024-05-23T08:56:21.618Z",
    reviewerName: "Nolan Gonzalez",
    reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
  },
  {
    rating: 5,
    comment: "Very satisfied!",
    date: "2024-05-23T08:56:21.618Z",
    reviewerName: "Scarlett Wright",
    reviewerEmail: "scarlett.wright@x.dummyjson.com",
  },
];

const RatingReviewTabs = () => {
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
