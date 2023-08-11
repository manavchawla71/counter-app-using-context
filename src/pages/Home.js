import React from "react";
import { useCounter } from "../context/CounterContext";
import "./Home.css";
function Home() {
  const { count, increment, decrement } = useCounter();
  const Rectangle = ({ children }) => {
    <div className="app">{children}</div>;
  };
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Home;
