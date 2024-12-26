import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartItem } from "@/types/cart";

const initialState: CartState = {
  items: [],
  status: "idle",
  error: null,
  discount: 0,
  deliveryFee: 15,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      }
    },
    applyPromoCode: (state, action: PayloadAction<string>) => {
      state.promoCode = action.payload;
      // Example discount calculation
      state.discount = state.items.reduce(
        (acc, item) =>
          acc + (item.price * item.quantity * item.discountPercentage) / 100,
        0,
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.promoCode = undefined;
      state.discount = 0;
    },
  },
});

// SELECTORS
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartTotal = (state: { cart: CartState }) => {
  const subtotal = state.cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return subtotal - state.cart.discount + state.cart.deliveryFee;
};
export const selectCartSubtotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
export const selectCartDiscount = (state: { cart: CartState }) =>
  state.cart.discount;
export const selectDeliveryFee = (state: { cart: CartState }) =>
  state.cart.deliveryFee;

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  applyPromoCode,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
