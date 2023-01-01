import { useState } from "react";
import Persons from "./Persons";

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>Our Reviews</h1>
      </div>
      <Persons />
    </div>
  );
}

export default App;
