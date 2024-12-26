import { StaticImageData } from "next/image";

export type CardProps = {
  src?: StaticImageData | string;
  title: string;
  description?: string;
  content?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  className?: string;
};

export type CartCardProps = Omit<CardProps, "footer"> & {
  price?: number;
};
export type ProductCardProps = Omit<
  CardProps,
   "description" | "content" | "footer"
> & {
  id: number;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  rating: number
};
