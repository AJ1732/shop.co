"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { ButtonLink, PriceDisplay, StarRating } from "@/components";
import type { Product } from "@/types/products";
import { useCart } from "@/hooks/use-cart";

interface InfoDisplayProps {
  product: Product;
}

const InfoDisplay: React.FC<InfoDisplayProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { items, addItem, updateItemQuantity } = useCart();

  const cartItem = items.find((item) => item.id === product.id);
  const currentQuantity = cartItem?.quantity || quantity;

  const handleQuantityChange = (change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      if (cartItem) {
        updateItemQuantity(product.id, newQuantity);
      } else {
        setQuantity(newQuantity);
      }
    }
  };

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        thumbnail: product.thumbnail,
        discountPercentage: product.discountPercentage,
      },
      currentQuantity,
    );
    setQuantity(1);
  };

  return (
    <div className="flex flex-col divide-y divide-black/10">
      <header className="pb-6">
        <h2 className="font-integral text-2xl leading-[1.2] md:text-[2rem] lg:text-[2.5rem]">
          {product.title}
        </h2>

        <StarRating rating={product.rating} />

        <PriceDisplay
          price={product.price}
          discountPercentage={product.discountPercentage}
        />

        <p className="mt-3 leading-[1.375rem] text-black/60 max-md:text-sm">
          {product.description}
        </p>
      </header>

      <div className="space-y-4 py-6 text-sm">
        <h3 className="text-black/60">Tags</h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-shade-200 px-5 py-3 capitalize text-black/60"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-3 py-6 md:gap-4">
        <div className="flex items-center justify-center gap-6 rounded-full bg-shade-200 px-4 py-3.5 font-medium md:py-4 lg:gap-8 lg:px-5 lg:py-4">
          <button
            type="button"
            onClick={() => handleQuantityChange(-1)}
            className="active:scale-90"
          >
            <Minus className="size-4 md:size-6" />
          </button>

          <span>{currentQuantity}</span>

          <button
            type="button"
            onClick={() => {
              if (currentQuantity === 1) {
                handleAddToCart();
              }
              handleQuantityChange(1);
            }}
            className="active:scale-90"
          >
            <Plus className="size-4 md:size-6" />
          </button>
        </div>

        <ButtonLink
          onClick={handleAddToCart}
          className="size-full max-md:py-3.5"
        >
          Add to Cart
        </ButtonLink>
      </div>
    </div>
  );
};

export default InfoDisplay;
