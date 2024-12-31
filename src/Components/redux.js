import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => state.filter((item) => item.id !== action.payload.id),
    clearCart: () => [],
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const itemExists = state.some((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => state.filter((item) => item.id !== action.payload.id),
  },
});


export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export default store;
