// import { Middleware, AnyAction } from '@reduxjs/toolkit';
// import type { RootState } from '@/store';
// import type { CartState } from '@/types/cart';

// // Define explicit middleware type
// const localStorageMiddleware: Middleware =
//   (store) => (next) => (action: AnyAction) => {
//     const result = next(action);

//     if (typeof window !== 'undefined' && action.type?.startsWith('cart/')) {
//       const { cart } = store.getState() as RootState;
//       localStorage.setItem('cart', JSON.stringify(cart));
//     }

//     return result;
//   };

// export const loadState = (): CartState | undefined => {
//   if (typeof window === 'undefined') return undefined;

//   try {
//     const serializedState = localStorage.getItem('cart');
//     if (!serializedState) return undefined;
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// export { localStorageMiddleware };
