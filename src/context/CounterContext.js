import React, { createContext, useContext, useState } from "react";

// Create a context
const CounterContext = createContext();

// Create a context provider
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

// Custom hook to use the context
export function useCounter() {
  return useContext(CounterContext);
}
