import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductCardProps } from "@/types/card";
import { PriceDisplay, StarRating } from "@/components";
import { cn } from "@/lib/utils";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  className,
  discountPercentage,
  price,
  title,
  thumbnail,
  rating,
}) => {
  return (
    <Card className={cn("w-full border-0 shadow-none *:p-0", className)}>
      <Link href={`/shop/${id}`} className="block">
        <figure className="relative mb-4 aspect-[86/87] overflow-hidden rounded-[1.25rem] bg-shade-300">
          <Image
            fill
            src={thumbnail}
            className="object-cover transition-all duration-300 hover:scale-105"
            alt="Product Image"
          />
        </figure>
      </Link>

      <CardHeader>
        <Link href={`/shop/${id}`} className="block">
          <CardTitle className="line-clamp-1 text-base md:text-xl">
            {title}
          </CardTitle>
        </Link>

        <CardDescription className="line-clamp-2 py-0">
          <StarRating rating={rating} className="!my-0" />
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-2 text-xl font-bold sm:mt-3 md:text-2xl">
        <PriceDisplay
          price={price}
          discountPercentage={discountPercentage}
          className="text-lg sm:text-xl [&>p:nth-child(3)]:px-2 [&>p:nth-child(3)]:py-1 [&>p:nth-child(3)]:text-[0.625rem] sm:[&>p:nth-child(3)]:px-3.5 sm:[&>p:nth-child(3)]:py-1.5 sm:[&>p:nth-child(3)]:text-xs"
        />
      </CardContent>
    </Card>
  );
};
export default ProductCard;
