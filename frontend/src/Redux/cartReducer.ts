import { configureStore, createSlice } from '@reduxjs/toolkit';

const state = { shoppingCart: [] };

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
    RESET: () => {
      return {
        shoppingCart: [],
      };
    },
  }, //end of reducers
}); //end of cartSlice

const store = configureStore({ reducer: cartSlice.reducer });
export const { ADD_ITEM, ADD_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART, RESET } =
  cartSlice.actions;
export { cartSlice, store };
