import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const state = { shoppingCart: [], deliveryCost: 0.0 };

/* eslint-disable @typescript-eslint/no-explicit-any */
const cartSlice = createSlice({
  name: 'Shopping Cart',
  initialState: state,
  reducers: {
    ADD_ITEM: (state: any, action: any) => {
      // Check if item is in cart already
      const item = action.payload;
      const inCart = state.shoppingCart.find((item: any) =>
        item.id === action.payload.id ? true : false
      );
      return {
        //If item is already in cart, add + 1 qty. If not, add item to shoppingCart
        ...state,
        shoppingCart: inCart
          ? state.shoppingCart.map((item: any) =>
              item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.shoppingCart, { ...item, qty: 1 }],
      };
    },

    ADD_QUANTITY: (state: any, action: any) => {
      return {
        ...state,
        shoppingCart: state.shoppingCart.map((item: any) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    },
    DECREASE_QUANTITY: (state: any, action: any) => {
      return {
        ...state,
        shoppingCart: state.shoppingCart.map((item: any) =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: item.qty !== 0 ? item.qty - 1 : 0,
              }
            : item
        ),
      };
    },
    REMOVE_FROM_CART: (state: any, action: any) => {
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter((item: any) => item.id !== action.payload.id),
      };
    },
    ADD_DELIVERY_COST: (state: any, action: any) => {
      console.log(action.payload);
      return {
        ...state,
        deliveryCost: action.payload.deliveryCost,
      };
    },
    RESET: () => {
      return {
        shoppingCart: [],
        deliveryCost: 0.0
      };
    },
  }, //end of reducers
}); //end of cartSlice
/* eslint-disable @typescript-eslint/no-explicit-any */

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const { ADD_ITEM, ADD_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART, ADD_DELIVERY_COST, RESET } =
  cartSlice.actions;
export { cartSlice, store };
