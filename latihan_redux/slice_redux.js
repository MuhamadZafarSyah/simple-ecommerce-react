import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      state = state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decrementQuantity: (state, action) => {
      state = state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

// STORE
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// DEKLARASI SUBSCRIBE YANG NANTINYA AKAN MELAKUKAN PERUBAHAN DARI DISPATCH
store.subscribe(() => {
  console.log("Store change: ", store.getState());
});

// DISPATCH
// const action1 = addToCart({ id: 1, quantity: 20 });
// store.dispatch(action1);

store.dispatch(cartSlice.actions.addToCart({ id: 1, quantity: 20 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, quantity: 120 }));
