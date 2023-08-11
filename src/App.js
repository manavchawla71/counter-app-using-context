import React from "react";
import { CounterProvider } from "./context/CounterContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </CounterProvider>
  );
}

export default App;
