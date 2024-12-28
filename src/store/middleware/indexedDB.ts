// import { Middleware, UnknownAction, MiddlewareAPI, Dispatch } from '@reduxjs/toolkit';
// import { openDB, IDBPDatabase } from 'idb';
// import type { RootState } from '@/store';
// import type { CartState } from '@/types/cart';

// interface StoreSchema {
//   cart: {
//     key: string;
//     value: CartState;
//   };
// }

// const DB_NAME = 'shopco-store';
// const STORE_NAME = 'cart';
// const DB_VERSION = 1;

// let db: IDBPDatabase<StoreSchema> | null = null;

// const initDB = async () => {
//   if (!db) {
//     db = await openDB<StoreSchema>(DB_NAME, DB_VERSION, {
//       upgrade(db) {
//         if (!db.objectStoreNames.contains(STORE_NAME)) {
//           db.createObjectStore(STORE_NAME);
//         }
//       },
//     });
//   }
//   return db;
// };

// export const loadCartState = async (): Promise<CartState | undefined> => {
//   try {
//     const db = await initDB();
//     const state = await db.get(STORE_NAME, 'cartState');
//     return state || undefined;
//   } catch (err) {
//     console.error('Failed to load cart state:', err);
//     return undefined;
//   }
// };

// export const indexedDBMiddleware: Middleware = 
//   (store: MiddlewareAPI<Dispatch, RootState>) => 
//   (next: Dispatch) => 
//   async (action: UnknownAction) => {
//     const result = next(action);
    
//     if (typeof action.type === 'string' && action.type.startsWith('cart/')) {
//       try {
//         const db = await initDB();
//         const { cart } = store.getState();
//         await db.put(STORE_NAME, cart, 'cartState');
//       } catch (err) {
//         console.error('Failed to save cart state:', err);
//       }
//     }
    
//     return result;
//   };