export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  category: string;
  thumbnail: string;
  discountPercentage: number;
}

export interface CartState {
  items: CartItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  promoCode?: string;
  discount: number;
  deliveryFee: number;
}
