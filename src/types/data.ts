export type DimensionProps = {
  width: number;
  height: number;
  depth: number;
};

export type ReviewProps = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type MetaProps = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type ProductProps = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: DimensionProps;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewProps[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: string[];
  images: string[];
  thumbnail: string | string[];
};
