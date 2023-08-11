import React from "react";
import { useCounter } from "../context/CounterContext";

function Navbar() {
  const { count } = useCounter();

  return (
    <nav>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
    </nav>
  );
}

export default Navbar;
