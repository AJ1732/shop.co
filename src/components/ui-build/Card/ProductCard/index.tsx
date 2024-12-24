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
import { formatCurrency } from "@/utils";
import { cn } from "@/lib/utils";

const ProductCard: React.FC<ProductCardProps> = async ({ id, className }) => {
  return (
    <Card
      className={cn(
        "max-w-[10.75rem] border-0 shadow-none *:p-0 md:max-w-[18.5rem]",
        className,
      )}
    >
      <Link href={`/item/${id}`} className="block">
        <figure className="relative mb-4 h-[10.875rem] w-[10.75rem] overflow-hidden rounded-[1.25rem] bg-[#F0EEED] md:h-[18.625rem] md:w-[18.4375rem]">
          <Image
            fill
            src={1 && "https://i.imgur.com/QkIa5tT.jpeg"}
            style={{ objectFit: "contain" }}
            className="transition-all duration-300 hover:scale-105"
            alt="Product Image"
          />
        </figure>
      </Link>

      <CardHeader>
        <Link href={`/item/${id}`} className="block">
          <CardTitle className="line-clamp-1 text-base md:text-xl">
            {""}
          </CardTitle>
        </Link>

        <CardDescription className="line-clamp-2">{""}</CardDescription>
      </CardHeader>

      <CardContent className="mt-4 text-xl font-bold md:text-2xl">
        <p>{formatCurrency(70)}</p>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
