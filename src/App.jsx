import { Component } from "react";
import Header from "./Header/Header";
import Counter from "./Counter/Counter";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Counter />
    </div>
  );
};

export default App;
