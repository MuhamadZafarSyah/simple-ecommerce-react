import { createStore } from "redux";

// DEKLARASI REDUCER DAN ACTION TYPE YANG BISA DI GUNAKAN NANTINYA
const cartReducer = (
  state = {
    cart: [
      {
        id: 1,
        quantity: 10,
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// DEKLARASI STORE
const store = createStore(cartReducer);
// console.log("oncreate store : ", store.getState());

// DEKLARASI SUBSCRIBE YANG NANTINYA AKAN MELAKUKAN PERUBAHAN DARI DISPATCH
store.subscribe(() => {
  console.log("Store change: ", store.getState());
});

//

// DISPATCH
// BERGUNA UNTUK HANDLE ACTION
const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    quantity: 20,
  },
};

store.dispatch(action1);
