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
    <Card className={cn("w-full border-0 shadow-none *:p-0", className)}>
      <Link href={`/item/${id}`} className="block">
        <figure className="bg-shade-300 relative mb-4 aspect-[86/87] overflow-hidden rounded-[1.25rem]">
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
            Lorem ipsum
          </CardTitle>
        </Link>

        <CardDescription className="line-clamp-2">
          dolor sit amet consectetur adipisicing elit. Accusantium, vitae?
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-4 text-xl font-bold md:text-2xl">
        <p>{formatCurrency(70)}</p>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
