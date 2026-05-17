import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (!existing) {
        state.items.push({ ...item, quantity: 1 })
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existing =  state.items.find((i) => i.id === id);
      if (existing) {
        existing.quantity += 1;
      }
    },
    decreaseQuantity: (state,action) => {
      const id = action.payload;
      const existing = state.items.find((i) => i.id === id);
      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i)=> i.id !== id)
    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectTotalAmount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;

// (Removed duplicate selectors and default export)