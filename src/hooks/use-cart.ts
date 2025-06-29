import {
  selectCartItems,
  selectCartTotal,
  selectCartSubtotal,
  selectCartDiscount,
  selectDeliveryFee,
  addToCart,
  removeFromCart,
  updateQuantity,
  applyPromoCode,
} from "@/store/features/cart.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { CartItem } from "@/types/cart";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const subtotal = useAppSelector(selectCartSubtotal);
  const discount = useAppSelector(selectCartDiscount);
  const deliveryFee = useAppSelector(selectDeliveryFee);

  return {
    items,
    total,
    subtotal,
    discount,
    deliveryFee,
    addItem: (item: Omit<CartItem, "quantity">, quantity: number) =>
      dispatch(addToCart({ ...item, quantity })),
    removeItem: (id: number) => dispatch(removeFromCart(id)),
    updateItemQuantity: (id: number, quantity: number) =>
      dispatch(updateQuantity({ id, quantity })),
    applyPromo: (code: string) => dispatch(applyPromoCode(code)),
  };
};
