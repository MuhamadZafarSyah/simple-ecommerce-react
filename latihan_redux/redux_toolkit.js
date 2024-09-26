import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// DEKLARASI INITIAL STATE
// const initialState = {
//   cart: [],
// };

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// DEKLARASI REDUCER DAN ACTION TYPE YANG BISA DI GUNAKAN NANTINYA
// TIDAK PERLU MELAKUKAN INITIAL STATE KARNA SUDAH ADA BRACKET ARRAY KOSONG DI PARAMETER
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
  // .addCase(removeFromCart, (state, action) => {
  //   state.cart = state.cart.filter((item) => item.id !== action.payload);
  // })
  // .addCase(incrementQuantity, (state, action) => {
  //   state.cart = state.cart.map((item) =>
  //     item.id === action.payload
  //       ? { ...item, quantity: item.quantity + 1 }
  //       : item
  //   );
  // })
  // .addCase(decrementQuantity, (state, action) => {
  //   state.cart = state.cart.map((item) =>
  //     item.id === action.payload
  //       ? { ...item, quantity: item.quantity - 1 }
  //       : item
  //   );
  // });
});

// STORE
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

// DEKLARASI SUBSCRIBE YANG NANTINYA AKAN MELAKUKAN PERUBAHAN DARI DISPATCH
store.subscribe(() => {
  console.log("Store change: ", store.getState());
});

// DISPATCH
// const action1 = addToCart({ id: 1, quantity: 20 });
// store.dispatch(action1);

store.dispatch({ type: "ADD_TO_CART", payload: { id: 1, quantity: 20 } });
store.dispatch({ type: "ADD_TO_CART", payload: { id: 2, quantity: 10 } });
store.dispatch({ type: "ADD_TO_CART", payload: { id: 3, quantity: 15 } });
store.dispatch({ type: "ADD_TO_CART", payload: { id: 4, quantity: 30 } });
// store.dispatch({ type: "ADD_TO_CART", payload: { id: 3 } });
store.dispatch(login());
