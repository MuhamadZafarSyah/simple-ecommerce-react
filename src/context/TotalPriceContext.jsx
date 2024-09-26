import { useContext, createContext, useReducer, useState } from "react";

const TotalPriceContext = createContext(null);

const TotalPriceDispatchContext = createContext(null);

export function totalPriceReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        total: action.payload.total,
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });

  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

// REDUCER NYA DI BUAT DI DALAM PROVIDER LANGSUNG

// export function TotalPriceProvider({ children }) {
//   const [totalPrice, dispatch] = useReducer((state, action) => {
//     switch (action.type) {
//       case "UPDATE ":
//         return action.payload;
//       default:
//         throw Error("Unknown action: " + action.type);
//     }
//   }, 0);
//   return (
//     <TotalPriceContext.Provider value={totalPrice}>
//       <TotalPriceDispatchContext.Provider value={dispatch}>
//         {children}
//       </TotalPriceDispatchContext.Provider>
//     </TotalPriceContext.Provider>
//   );
// }

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
