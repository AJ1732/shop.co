import { StarSVG } from "@/svgs";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  className?: string;
  rate?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  className,
  rate = true,
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div
      className={cn(
        "my-3 flex items-center justify-start gap-2 md:my-3.5",
        className,
      )}
    >
      <div className={cn("flex gap-2")}>
        {/* FULL STARS */}
        {[...Array(fullStars)].map((_, index) => (
          <StarSVG key={`full-${index}`} className="fill-[#FFC633]" />
        ))}

        {/* HALF STAR */}
        {hasHalfStar && (
          <div className="relative">
            <StarSVG
              className="fill-[#FFC633]"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
            <StarSVG className="absolute left-0 top-0 fill-none stroke-[#FFC633]" />
          </div>
        )}

        {/* EMPTY STARS */}
        {[...Array(5 - Math.ceil(rating))].map((_, index) => (
          <StarSVG
            key={`empty-${index}`}
            className="fill-none stroke-[#FFC633]"
          />
        ))}
      </div>

      {/* RATING */}
      {rate && (
        <p className="text-black/60">
          <span className="text-black">{rating}</span>/5
        </p>
      )}
    </div>
  );
};

export default StarRating;
