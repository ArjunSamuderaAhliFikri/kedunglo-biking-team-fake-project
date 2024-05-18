import { createContext, useContext, useReducer } from "react";

// untuk menyimpan state totalPrice nantinya
const TotalPriceContext = createContext(null);

// untuk menyimpan dispatch method untuk useReducer
const TotalPriceDispatchContext = createContext(null);

// membuat totalPriceReducer terlebih dahulu
const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("Unkwon error :" + action.type);
    }
  }
};

// membuat total price provider terlebih dahulu
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

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
